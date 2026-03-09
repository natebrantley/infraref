import { useMemo } from "react";
import { NEWS_ITEMS } from "../data/news.js";
import { TagBadge } from "./TagBadge.jsx";

function matchNewsState(stateFilter, tag) {
  if (stateFilter === "ALL") return true;
  if (tag === "OR/WA") return stateFilter === "OR" || stateFilter === "WA";
  return tag === stateFilter;
}

function formatDate(dateStr) {
  if (!dateStr) return "";
  const [y, m] = dateStr.split("-");
  if (!m) return y;
  const month = new Date(Number(y), Number(m) - 1).toLocaleString("en-US", { month: "short" });
  return `${month} ${y}`;
}

export function NewsFeed({ stateFilter = "ALL" }) {
  const items = useMemo(
    () => NEWS_ITEMS.filter((item) => matchNewsState(stateFilter, item.tag)),
    [stateFilter]
  );

  if (items.length === 0) return null;

  return (
    <section className="news-feed-section" aria-label="Industry news">
      <h2 className="news-feed-section-heading">
        <span className="news-feed-section-heading-accent" aria-hidden="true" />
        Industry & local news
      </h2>
      <ul className="news-feed-list">
        {items.map((item) => (
          <li key={item.id} className="news-feed-item">
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="news-feed-link"
            >
              <span className="news-feed-title">{item.title}</span>
              <span className="news-feed-meta">
                {item.source}
                {item.date && ` · ${formatDate(item.date)}`}
              </span>
            </a>
            {item.tag && (
              <span className="news-feed-tag">
                <TagBadge tag={item.tag} />
              </span>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
