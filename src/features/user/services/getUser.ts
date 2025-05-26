import { User } from "@/features/user/types/user";

// ❓ビジネスロジックは含んでいないが、servicesフォルダでいいのか？lib/apiの方がいいのか？
// apiだとブラウザとのやり取りという認識になるか？
// ただfetchしているだけだから、servicesは違和感を感じる？
export async function getUser(userId: string): Promise<User> {
  const userRes = await fetch(`http://localhost:3000/api/users/${userId}`);
  const data: User = await userRes.json();
  return data;
}
