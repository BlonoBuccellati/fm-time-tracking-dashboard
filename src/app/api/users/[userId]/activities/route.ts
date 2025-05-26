import { promises as fs } from "fs";
import path from "path";

import { NextResponse } from "next/server";

import { UserActivities } from "@/types/user-activity";

const DATA_PATH = path.join(process.cwd(), "public/data", "activities.json");
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
    if (!activities) {
      return NextResponse.json(
        { error: "User Activities not found" },
        { status: 404 },
      );
    }
    return NextResponse.json(activities);
  } catch (err) {
    console.error("GET /api/users error:", err);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}

async function getActivities(id: string) {
  const res = await fs.readFile(DATA_PATH, "utf-8");
  const userActivities: UserActivities[] = JSON.parse(res);
  const matched = userActivities.find((a) => a.userId === id);
  return matched?.activity ?? [];
}
