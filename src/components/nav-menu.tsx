import * as React from "react";
import styles from "@styles/nav-menu.module.css";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
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
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/blog/">Blog</a>
          </li>
        </ul>
      </div>
    </>
  );
}
