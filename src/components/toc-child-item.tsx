import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import styles from "@styles/toc-child-item.module.css";
import type { ReactNode } from "react";

export function TocChildItem({ children }: { children: ReactNode }) {
  return (
    <li className={styles.list}>
      <FontAwesomeIcon icon={faMinus} />
      <span>{children}</span>
    </li>
  );
}
