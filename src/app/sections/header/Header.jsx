import styles from "./css/style.module.css";

export default function Header() {
  return (
    <>
      <header className={`${styles.headerMain}`}>
        <div className="header-box">
          <h1 className={`title-header ${styles.headerTitle}`}>
            lando norris campione <span><img className={`img-header ${styles.imgF1LogoHeader}`} src="/f1-logo.png" alt="F1 logo" /></span>
            2025
          </h1>
        </div>
      </header>
    </>
  );
}
