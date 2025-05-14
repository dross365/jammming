import Tracklist from "../components/Tracklist";
import tracklistData from "../components/tracklistData";
import TrackInfo from "../components/TrackInfo";

function TracklistContainer() {
  const getSongById = (id) => {
    const track = tracklistData.find((track) => track.id === id);
    return track ? track.song : null; //Return the song name or null if no song name found with id
  };

  return (
    <>
      <TrackInfo />
      {tracklistData.map((track) => (
        <Tracklist songNumber={track.id} song={track.song} />
      ))}
    </>
  );
}

export default TracklistContainer;
