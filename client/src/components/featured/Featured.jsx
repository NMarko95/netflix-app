import "./featured.css";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import InfoOutlinedIcon from "@mui/icons-material/Info";

const Featured = ({ type }) => {
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movie" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre">
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
      <img className="featured-img" src="featured-background.jpg" alt="" />
      <div className="featured-info">
        <img className="featured-title" src="featured-title.jpg" alt="" />
        <span className="featured-desc">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis,
          cum? Perferendis quae dolor obcaecati ipsam assumenda nesciunt
          dolorum! Fugiat odit sed voluptatibus eum odio dolorum rerum iste,
          cupiditate laboriosam sequi.
        </span>
        <div className="featured-buttons">
          <button className="featured-play">
            <PlayArrowIcon />
            <span>Play</span>
          </button>
          <button className="featured-more">
            <InfoOutlinedIcon />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
