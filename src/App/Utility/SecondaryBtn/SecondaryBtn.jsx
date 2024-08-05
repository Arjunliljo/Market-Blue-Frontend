import styles from "./SecondaryBtn.module.css";
function SecondaryBtn({ children }) {
  return <button className={styles.secondaryBtn}>{children}</button>;
}

export default SecondaryBtn;
