import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import styles from "@styles/toc-item.module.css";
import type { ReactNode } from "react";

export function TocItem({ children }: { children: ReactNode; to: string }) {
  return (
    <li className={styles.list}>
      <FontAwesomeIcon icon={faCheck} />
      <span>{children}</span>
    </li>
  );
}
