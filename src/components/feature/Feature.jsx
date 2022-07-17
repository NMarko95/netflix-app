import "./feature.scss";

const Feature = () => {
  return (
    <div className="feature">
      <img src="https://wallpaper.dog/large/5543711.jpg" alt="" />
      <div className="info">
        <img
          src="https://gumlet.assettype.com/freepressjournal/2021-11/73de02ef-cd36-47d8-bbae-528d01dc6fe4/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg"
          alt=""
        />
        <span className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero nulla
          itaque incidunt quae quisquam ea maxime excepturi beatae soluta a
          nemo, iure aperiam recusandae mollitia aliquam laborum saepe natus
          consectetur.
        </span>
        <div className="buttons">
          <button className="play">
            <i className="fa-solid fa-play"></i>
            <span>Play</span>
          </button>
          <button className="more">
            <i className="fa-solid fa-info"></i>
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Feature;
