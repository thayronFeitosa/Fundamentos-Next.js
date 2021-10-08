import styles from "./styles.module.scss";
import { SignInButton } from '../SignInButton'
export function Header() {
  return (
    <header className={styles.hreaderContainer}>
      <div className={styles.hreaderContent}>
        <img src="/images/logo.svg" />
        <nav>
          <a className={styles.active}>Home</a>
          <a>Posts</a>
        </nav>
        <SignInButton />
      </div>
    </header >
  );
}
