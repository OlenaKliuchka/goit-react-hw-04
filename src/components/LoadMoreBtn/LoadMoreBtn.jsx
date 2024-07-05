import styles from "./LoadMoreBtn.module.css";

export default function LoadMoreBtn({ onLoading, setPage }) {
  return (
    <button
      type="button"
      className={styles.btn}
      onClick={() => setPage((prevPage) => prevPage + 1)}
      disabled={onLoading}
    >
      Load more
    </button>
  );
}
