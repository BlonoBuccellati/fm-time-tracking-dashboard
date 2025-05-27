import { User } from "@/features/user/types/user";

// ❓ビジネスロジックは含んでいないが、servicesフォルダでいいのか？lib/apiの方がいいのか？
// apiだとブラウザとのやり取りという認識になるか？
// ただfetchしているだけだから、servicesは違和感を感じる？
const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL!;
export async function getUser(userId: string): Promise<User> {
  const userRes = await fetch(`${API_BASE}/api/users/${userId}`);
  const data: User = await userRes.json();
  return data;
}
