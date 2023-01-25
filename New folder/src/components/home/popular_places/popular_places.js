import "./popular_places.css";
import Images from "../../../images/images";
import "./popular_places.css";
function Popular() {
  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="popular_title col-12">
          <h2>popular destination</h2>
        </div>
        <div className="popular_cards row pt-3 ">
          <div className=" col-lg-3 col-md-6">
            <div className="card m-1">
              <div className="heart">
                <img src={Images.path_102} />
              </div>
              <div className="card-img">
                <img src={Images.Mask_Group_19} />
              </div>
              <div className="card-body">
                <p className="card-title">chilly mountain</p>
                <p className="card-details">
                  Discover what rest really means
                  <br /> at these cold mountains
                </p>
              </div>
              <div className="card-footer d-flex justify-content-between">
                <p className="place">Alaska. USA</p>
                <p className="rate">4.3</p>
                <p className="veiwer">(203)reviews</p>
                <a>open</a>
              </div>
            </div>
          </div>
          <div className=" col-lg-3 col-md-6">
            <div className="card m-1">
              <div className="heart">
                <img src={Images.path_102} />
              </div>
              <div className="card-img">
                <img src={Images.Mask_Group_19} />
              </div>
              <div className="card-body">
                <p className="card-title">chilly mountain</p>
                <p className="card-details">
                  Discover what rest really means
                  <br /> at these cold mountains
                </p>
              </div>
              <div className="card-footer d-flex justify-content-between">
                <p className="place">Alaska. USA</p>
                <p className="rate">4.3</p>
                <p className="veiwer">(203)reviews</p>
                <a>open</a>
              </div>
            </div>
          </div>
          <div className=" col-lg-3 col-md-6">
            <div className="card m-1">
              <div className="heart">
                <img src={Images.path_102} />
              </div>
              <div className="card-img">
                <img src={Images.Mask_Group_19} />
              </div>
              <div className="card-body">
                <p className="card-title">chilly mountain</p>
                <p className="card-details">
                  Discover what rest really means
                  <br /> at these cold mountains
                </p>
              </div>
              <div className="card-footer d-flex justify-content-between">
                <p className="place">Alaska. USA</p>
                <p className="rate">4.3</p>
                <p className="veiwer">(203)reviews</p>
                <a>open</a>
              </div>
            </div>
          </div>
          <div className=" col-lg-3 col-md-6">
            <div className="card m-1">
              <div className="heart">
                <img src={Images.path_102} />
              </div>
              <div className="card-img">
                <img src={Images.Mask_Group_19} />
              </div>
              <div className="card-body">
                <p className="card-title">chilly mountain</p>
                <p className="card-details">
                  Discover what rest really means
                  <br /> at these cold mountains
                </p>
              </div>
              <div className="card-footer d-flex justify-content-between">
                <p className="place">Alaska. USA</p>
                <p className="rate">4.3</p>
                <p className="veiwer">(203)reviews</p>
                <a>open</a>
              </div>
            </div>
          </div>
       
        </div>
      </div>
    </div>
  );
}
export default Popular;
