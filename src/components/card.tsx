import styles from "@styles/card.module.css";

interface Props {
  url: string;
  title: string;
  dateTime: string;
  date: string;
  isModified: boolean;
}

export function Card({ url, title, dateTime, date, isModified }: Props) {
  return (
    <article>
      <a href={url} className={styles.link}>
        <h2 className={styles.title}>{title}</h2>
        <time dateTime={dateTime} className={styles.date}>
          {isModified ? <span>更新：</span> : <span>公開：</span>}
          <span>{date}</span>
        </time>
      </a>
    </article>
  );
}
