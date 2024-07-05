import styles from "./ImageCard.module.css";

export default function ImageCard({ photo, modal, onOpen }) {
  function clickHandler() {
    if (!modal) {
      onOpen(photo);
    }
  }

  return (
    <div className={styles.wrapper}>
      <img
        className={styles.img}
        src={modal ? photo.fullImg : photo.thumbImg}
        alt={photo.alt}
        onClick={clickHandler}
      />
    </div>
  );
}
