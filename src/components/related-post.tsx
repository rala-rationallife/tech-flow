import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "@styles/related-post.module.css";

interface Props {
  slug: string;
  title: string;
}

export function RelatedPost({ slug, title }: Props) {
  return (
    <article className={styles.article}>
      <a href={`/blog/post/${slug}/`}>
        <span>{title}</span>
        <FontAwesomeIcon icon={faArrowRight} />
      </a>
    </article>
  );
}
