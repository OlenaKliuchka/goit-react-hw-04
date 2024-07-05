import styles from "./ErrorMessage.module.css";

export default function ErrorMessage() {
  return (
    <p className={styles.error}>
      Oops! An error has occurred! Write the name correctly.
    </p>
  );
}
