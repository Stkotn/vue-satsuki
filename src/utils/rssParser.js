import { XMLParser } from "fast-xml-parser";

export async function fetchNoteRss(userId) {
  try {
    const res = await fetch(`/api/rss/${userId}`);
    if (!res.ok) throw new Error("RSS取得に失敗しました");

    const xml = await res.text();
    const parser = new XMLParser();
    const json = parser.parse(xml);

    return json.rss.channel.item || [];
  } catch (err) {
    console.error("RSS fetch error:", err);
    return [];
  }
}
