import styles from "./FooterBtn.module.css";
function FooterBtn({ children, type }) {
  return (
    <button className={styles[type]}>
      <span>{children}</span>
    </button>
  );
}

export default FooterBtn;
