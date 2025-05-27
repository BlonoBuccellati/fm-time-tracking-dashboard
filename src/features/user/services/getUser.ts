import { User } from "@/features/user/types/user";

// ❓ビジネスロジックは含んでいないが、servicesフォルダでいいのか？lib/apiの方がいいのか？
// apiだとブラウザとのやり取りという認識になるか？
// ただfetchしているだけだから、servicesは違和感を感じる？
const ORIGIN =
  process.env.NODE_ENV === "production"
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000";
export async function getUser(userId: string): Promise<User> {
  const userRes = await fetch(`${ORIGIN}/api/users/${userId}`);
  const data: User = await userRes.json();
  return data;
}
