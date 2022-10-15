import "./listItem.css";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import AddIcon from "@mui/icons-material/Add";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import { useState } from "react";

const ListItem = ({ index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="list-item"
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {!isHovered && (
        <img className="list-item-image" src="list-item.jpg" alt="" />
      )}
      {isHovered && (
        <div className="list-item-info">
          <video
            src="/netflix-trailer.mp4"
            autoPlay={true}
            loop
            className="list-item-video"
          />
          <div className="info-icons">
            <PlayArrowIcon className="info-icon" />
            <AddIcon className="info-icon" />
            <ThumbUpIcon className="info-icon" />
            <ThumbDownIcon className="info-icon" />
          </div>
          <div className="item-info-top">
            <span>1 hour 14 min</span>
            <span className="item-info-limit">+16</span>
            <span>1999</span>
          </div>
          <div className="desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam aliquid
            tempore placeat eum commodi nisi explicabo dolorem ad nulla.
          </div>
          <div className="genre">Action</div>
        </div>
      )}
    </div>
  );
};

export default ListItem;
