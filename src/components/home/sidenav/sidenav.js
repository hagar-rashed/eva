import "./sidenav.css";
import Images from "../../../images/images";
import { Link } from "react-router-dom";
function Sidenav() {
  return (
    <>
      <div className="sidenav">
        <div className="images logo">
          
            <img src={Images.original_476} alt=""/>
          
        </div>
        <div className="images">
        <Link to="/">
            <img src={Images.path_66} alt=""/>
          </Link>
        </div>
        <div className="images">
        <Link to="/profile">
          <img src={Images.svgexport_7} alt=""/>
          </Link>
        </div>
        <div className="images">
        <Link to="/login">
          <img src={Images.svgexport_7_1} alt="" />
        </Link>  
        </div>
        <div className="images">
        <Link to="/signup">
          <img src={Images.svgexport_7_2} alt="" />
          </Link>
        </div>
        <div className="images">
        <Link to="/setting">
          <img src={Images.Path_199} alt="" />
          </Link>
        </div>
      </div>
    </>
  );
}

export default Sidenav;
