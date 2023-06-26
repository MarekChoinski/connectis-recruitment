import styles from "./ErrorIndicatior.module.scss";

export const ErrorIndicatior = ({ x }) => (
  <div className={styles.error2}>
    <span>{x}</span>
  </div>
);
