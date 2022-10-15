import "./watch.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Watch = () => {
  return (
    <div className="watch">
      <div className="watch-back">
        <ArrowBackIcon />
        Home
      </div>
      <video
        className="watch-video"
        autoPlay
        controls
        src="/netflix-trailer.mp4"
      />
    </div>
  );
};

export default Watch;
