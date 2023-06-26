import styles from "./ErrorIndicatior.module.scss";

export const ErrorIndicatior = ({ message }) => (
  <div className={styles.error}>
    <span>{message}. Try again</span>
  </div>
);
