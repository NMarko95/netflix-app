import "./list.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ListItem from "../listItem/ListItem";
import { useRef, useState } from "react";

const List = () => {
  const containerRef = useRef();

  const [slideNumber, setSlideNumber] = useState(1);

  const handleArrow = (direction) => {
    let distance = containerRef.current.getBoundingClientRect().x - 50;
    //console.log(distance);
    if (direction === "left" && slideNumber > 0) {
      containerRef.current.style.transform = `translateX(${230 + distance}px)`;
      setSlideNumber(slideNumber - 1);
    }
    if (direction === "right" && slideNumber < 5) {
      containerRef.current.style.transform = `translateX(${-230 + distance}px)`;
      setSlideNumber(slideNumber + 1);
    }
  };

  return (
    <div className="list">
      <span className="list-title">Continue to watch</span>
      <div className="list-wrapper">
        {slideNumber !== 1 && (
          <ArrowBackIosIcon
            onClick={() => handleArrow("left")}
            className="slider-arrow left"
            style={{ height: "100%", width: "50px" }}
          />
        )}
        <div ref={containerRef} className="list-container">
          <ListItem index={0} hover />
          <ListItem index={1} />
          <ListItem index={2} />
          <ListItem index={3} />
          <ListItem index={4} />
          <ListItem index={5} />
          <ListItem index={6} />
          <ListItem index={7} />
          <ListItem index={8} />
          <ListItem index={9} />
        </div>
        {slideNumber < 5 && (
          <ArrowForwardIosIcon
            onClick={() => handleArrow("right")}
            className="slider-arrow right"
            style={{ height: "100%", width: "50px" }}
          />
        )}
      </div>
    </div>
  );
};

export default List;
