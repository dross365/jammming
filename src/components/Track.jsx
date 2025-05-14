import styles from "../css/Track.module.css";

function Track() {
  return (
    <div className={styles.container}>
      <img
        className={styles.img}
        src="../assets/billie_album_cover.png"
        alt="Billie Album Cover"
      />
      <h2>Bad Guy</h2>
      <p>Billie Eilish</p>
      <p>When We All Fall Asleep, Where Do We Go?</p>
    </div>
  );
}

export default Track;
