// fsは、ファイルシステム。promiseベースの関数を使えるようにしている。
import { promises as fs } from "fs";
// OS に依存しない形でパスを組み立てるためのユーティリティ。
// 例えば Windows だと \、Unix/Linux だと / を自動的に使い分けてくれる。
import path from "path";

import { NextResponse } from "next/server";

import { User } from "@/features/user/types/user";

// process.cwd() は「現在のプロジェクトのルートディレクトリ」のパスを返す。
// それに 'data/users.json' をつなげて、/プロジェクトルート/public/data/users.json という 絶対パスを作ってる。
const DATA_PATH = path.join(process.cwd(), "public/data", "users.json");

/** GET /api/users/:userId */
export async function GET(
  _req: Request,
  context: { params: { userId: string } },
) {
  try {
    // paramsは、15以降非同期（Promise）らしい。そのため、以下のようにawait で取得。
    const { userId } = await context.params;
    const user = await getUser(userId);
    if (!user) {
      // リソースが存在しない
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }
    return NextResponse.json(user);
  } catch (err) {
    console.error("GET /api/users error:", err);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}

async function getUser(id: string) {
  const raw = await fs.readFile(DATA_PATH, "utf-8");
  const users: User[] = JSON.parse(raw);

  const user = users.find((u) => u.id === id);
  return user;
}
