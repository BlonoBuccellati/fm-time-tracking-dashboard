import { promises as fs } from "fs";
import path from "path";

import { NextResponse } from "next/server";

import { UserCardConfig } from "@/features/activity-tracker/types/card-config";
import { ActivityCard } from "@/types/activity-card";
import { UserActivities } from "@/types/user-activity";

const DATA_DIR = path.join(process.cwd(), "public/data");
export async function GET(
  _req: Request,
  // routerが[userId]になっているので、paramはuserIdにする必要がある
  context: { params: { userId: string } },
) {
  // 以下の手法とfsを使用するのどっちがいいんだ？
  // const baseUrl = new URL(request.url).origin;
  // const res = await fetch(`${baseUrl}/activities.json`);
  try {
    const { userId } = await context.params;
    const activities = await getActivities(userId);
    const cardConfigs = await getCardConfigs(userId);
    // マージ
    const cardMap = new Map(cardConfigs.map((c) => [c.slug, c]));
    const cards: ActivityCard[] = activities.map((activity) => {
      const c = cardMap.get(activity.slug);
      if (!c) {
        throw new Error(`missing config for slug:${activity.slug}`);
      }
      return {
        ...c, // title,iconPath, color
        activity,
      };
    });
    if (!activities) {
      return NextResponse.json(
        { error: "User Activities not found" },
        { status: 404 },
      );
    }
    return NextResponse.json(cards);
  } catch (err) {
    console.error("GET /api/users error:", err);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}

async function getActivities(id: string) {
  const res = await fs.readFile(
    path.join(DATA_DIR, "activities.json"),
    "utf-8",
  );
  const userActivities: UserActivities[] = JSON.parse(res);
  const matched = userActivities.find((a) => a.userId === id);
  return matched?.activity ?? [];
}

async function getCardConfigs(id: string) {
  const res = await fs.readFile(
    path.join(DATA_DIR, "card-config.json"),
    "utf-8",
  );
  const cardConfigs: UserCardConfig[] = JSON.parse(res);
  const matched = cardConfigs.find((config) => config.id === id);
  return matched?.cardConfig ?? [];
}
