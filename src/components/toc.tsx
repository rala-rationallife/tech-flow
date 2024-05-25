import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronDown } from "@fortawesome/free-solid-svg-icons";
import styles from "@styles/toc.module.css";
import * as React from "react";
import type { ReactNode } from "react";

export function Toc({ children }: { children: ReactNode }) {
  const [tocOpen, setTocOpen] = React.useState(false);

  const toggleToc = () => {
    setTocOpen((prev) => !prev);
  };

  const refText = React.useRef<HTMLDivElement>(null);

  const tocTextStyle: React.CSSProperties & { "--text-height": string } = {
    "--text-height": refText.current
      ? `${refText.current.scrollHeight}px`
      : "0px",
  };

  return (
    <div className={tocOpen ? styles.open : styles.close}>
      <h3 className={styles.heading}>
        <button onClick={toggleToc}>
          {tocOpen ? <span>目次を閉じる</span> : <span>目次を見る</span>}
          <FontAwesomeIcon icon={faCircleChevronDown} className={styles.icon} />
        </button>
      </h3>

      <div className={styles.text} ref={refText} style={tocTextStyle}>
        <ul className={styles.list}>{children}</ul>
      </div>
    </div>
  );
}
