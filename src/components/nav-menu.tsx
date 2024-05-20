import * as React from "react";
import styles from "@styles/nav-menu.module.css";
import {
  faBars,
  faBookOpen,
  faHome,
  faSearch,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Global, css } from "@emotion/react";

export function NavMenu() {
  const [navIsOpen, setNavIsOpen] = React.useState(false);

  const toggleNav = () => {
    setNavIsOpen((prev) => !prev);
  };

  return (
    <>
      {navIsOpen && (
        <Global
          styles={css`
            @media (width <= 767px) {
              body {
                overflow: hidden;
              }
            }
          `}
        />
      )}

      <button className={styles.btn} onClick={toggleNav}>
        {navIsOpen ? (
          <>
            <FontAwesomeIcon icon={faXmark} />
            <p>とじる</p>
          </>
        ) : (
          <>
            <FontAwesomeIcon icon={faBars} />
            <p>メニュー</p>
          </>
        )}
      </button>

      <div className={navIsOpen ? styles.list_open : styles.list}>
        <ul className={styles.ul}>
          <li>
            <a href="/" className={styles.menuItem}>
              <FontAwesomeIcon icon={faHome} />
              <span>ホーム</span>
            </a>
          </li>
          <li>
            <a href="/blog/" className={styles.menuItem}>
              <FontAwesomeIcon icon={faBookOpen} />
              <span>ブログ</span>
            </a>
          </li>
          <li>
            <a href="/search/" className={styles.menuItem}>
              <FontAwesomeIcon icon={faSearch} />
              <span>検索する</span>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
