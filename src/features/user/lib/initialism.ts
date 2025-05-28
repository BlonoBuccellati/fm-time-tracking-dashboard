export function getInitials(name: string): string {
  name = name.trim();

  // スペースが含まれていればスペース区切りロジックを優先
  if (/\s/.test(name)) {
    return name
      .split(/\s+/)
      .map((w) => w[0])
      .join("")
      .toUpperCase();
  }

  // それ以外はキャメル／パスカルケースの大文字を拾う
  const matches = name.match(/[A-Z]/g);
  if (matches && matches.length > 1) {
    return matches.join("");
  }

  // フォールバック：先頭２文字を大文字化
  return name.slice(0, 2).toUpperCase();
}
