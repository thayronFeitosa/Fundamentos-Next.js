import styles from "./styles.module.scss";

export function Header() {
  return (
    <header className={styles.hreaderContainer}>
      <div className={styles.hreaderContent }>
        <img src="/images/logo.svg" alt="" />
        <nav>
          <a className={styles.active}>Home</a>
          <a>Posts</a>
        </nav>
      </div>
    </header >
  );
}
