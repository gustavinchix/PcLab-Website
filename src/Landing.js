import "./CSS/landing.css";
import logo from "./IMG/logo3.ico";
import buildIco from "./IMG/setting.ico";

function Landing() {
  return (
    <div>
      <nav>
        <div className="navigationBar">
          <img alt="" src={logo} width="50px" height="100%"></img>
          <a href="#"><img className="buildIco" alt="" src={buildIco} width="30px" height="60%"></img></a>
          
        </div>
      </nav>
    </div>
  );
}
export default Landing;
