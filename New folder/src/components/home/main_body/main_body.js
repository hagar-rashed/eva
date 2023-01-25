import "./main_body.css";

import Popular from "../popular_places/popular_places";
import Images from "../../../images/images";
import Recommended from "../recommended_places/recommended_places";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
function Main() {
  const [data, setData] = useState([]);
  useEffect(() => {
    // axios
    //   .get("https://b5d5-45-242-119-149.eu.ngrok.io/Category/")
    //   .then((res) => {
    //     console.log(res);
    //     // setData()
    //   });
    axios({
      method: "GET",
      url: "https://fc62-45-242-119-149.eu.ngrok.io/Category/",
    }).then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  });
  return (
    <div className="main">
      <div className="sub-title">
        <p>Welcome,Traveller</p>
      </div>
      <div className="main-title">
        <h2>explore the beauty of our planet</h2>
      </div>
      <div className="search">
        <form>
          <div className="search-input">
            <input type="text" name="name" />
          </div>
        </form>
        <div className="location-icon">
          <img src={data.images} alt="" />
        </div>
      </div>
      <div className="helper">
        <div className="helper-title">
          <p>might help you</p>
        </div>
        <div className="helper-places">
          <ul>
        {
            data.map((category) => (
                <li key={category.id}>
                <Link href="">
                  <div className="helper-img">
                    <img src={category.images} alt="" />
                  </div>
                  <p>{category.title}</p>
                </Link>
               </li>
            ))

        }    
           

            {/* <li><a href=''>
                    see more ...</a></li> */}
          </ul>
        </div>
      </div>

      <Popular />

      <Recommended />
    </div>
  );
}
export default Main;
