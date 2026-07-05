import { useState, useEffect } from "react";

interface NewsletterItem {
  title: string;
  link: string;
  date: string;
  description: string;
}

const FEED_URL = "/substack-feed";

function parseRSSFeed(xml: string): NewsletterItem[] {
  const parser = new DOMParser();
  const doc = parser.parseFromString(xml, "text/xml");
  const items = doc.querySelectorAll("item");

  return Array.from(items).map((item) => {
    const title = item.querySelector("title")?.textContent || "";
    const link = item.querySelector("link")?.textContent || "";
    const pubDate = item.querySelector("pubDate")?.textContent || "";
    const description = item.querySelector("description")?.textContent || "";

    const descText =
      new DOMParser()
        .parseFromString(description, "text/html")
        .body.textContent?.trim() || "";

    return {
      title,
      link,
      date: pubDate
        ? new Date(pubDate).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "2-digit",
          })
        : "",
      description:
        descText.length > 150 ? descText.slice(0, 150) + "…" : descText,
    };
  });
}

export function useSubstackFeed() {
  const [newsletters, setNewsletters] = useState<NewsletterItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function fetchFeed() {
      try {
        const res = await fetch(FEED_URL);
        if (!res.ok) throw new Error(`Feed fetch failed: ${res.status}`);
        const xml = await res.text();
        const items = parseRSSFeed(xml);
        if (!cancelled) {
          setNewsletters(items);
          setLoading(false);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : "Unknown error");
          setLoading(false);
        }
      }
    }

    fetchFeed();
    return () => {
      cancelled = true;
    };
  }, []);

  return { newsletters, loading, error };
}
