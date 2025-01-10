import styles from "./loading.module.css";

export default function NotFound() {
  return (
    <svg
      className={styles.container}
      viewBox="0 0 40 40"
      height="40"
      width="40"
    >
      <circle
        className={styles.track}
        cx="20"
        cy="20"
        r="17.5"
        pathLength="100"
        strokeWidth="5px"
        fill="none"
      />
      <circle
        className={styles.car}
        cx="20"
        cy="20"
        r="17.5"
        pathLength="100"
        strokeWidth="5px"
        fill="none"
      />
    </svg>
  );
}
