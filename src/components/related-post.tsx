import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  slug: string;
  title: string;
}

export function RelatedPost({ slug, title }: Props) {
  return (
    <article>
      <a href={`/blog/post/${slug}/`}>{title}</a>
      <FontAwesomeIcon icon={faArrowRight} />
    </article>
  );
}
