import styles from "../css/Tracklist.module.css";

function Tracklist({ song, songNumber }) {
  return (
    <>
      <div className={styles.songContainer}>{`${songNumber}: ${song}`}</div>
    </>
  );
}

export default Tracklist;
