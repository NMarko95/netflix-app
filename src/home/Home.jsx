import "./home.scss";
import Navbar from "../components/navbar/Navbar";
import Feature from "../components/feature/Feature";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Feature />
    </div>
  );
};

export default Home;
