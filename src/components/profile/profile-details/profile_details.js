
import "./profile_details.css";
import Images from "../../../images/images";
import { Link } from "react-router-dom";
function ProfileDetails(){
    return (<>
    <div className="container-fluid">
        <div className="row justify-content-between">
            <div className="col-lg-3 col-md-6 ">
                <div className="profile-information">
                    <div className="profile-img">
                        <img src={Images.Group_132} alt=""/>
                    </div>
                    <div className="profile-name">
                      <p>Hagar Rashed</p>
                    </div>
                    <div className="user-details d-flex justify-content-between">
                        <p className="place">mansoura</p>
                        <p className="place">mansoura</p>
                        <p className="place">mansoura</p>
                    </div>
                    <div className="account-details d-flex justify-content-between">
                        <div>
                         <p className="reviews">reveiw 255</p>
                         <p className="reviews">reveiw 255</p>
                        </div>
                        <div>
                         <p className="reviews">reveiw 255</p>
                         <p className="reviews">reveiw 255</p>
                        </div>
                        <div>
                         <p className="reviews">reveiw 255</p>
                         <p className="reviews">reveiw 255</p>
                        </div>
                        <div>
                         <p className="reviews">reveiw 255</p>
                         <p className="reviews">reveiw 255</p>
                        </div>
                    
                    </div>
                </div>
            </div>
            <div className="col-lg-7  col-md-6 ">
                <div className="post">
                  <form>
                    <input type="text" placeholder="post new ..." className="createPost"/>
                    <input type="file" name="example3[]" multiple="multiple"/>
                    <input type="submit"/>
                  </form>

               </div>
            </div>
            <div className="col-12 mt-3">
                <div className="profile-cards">
                <div className="row">
                <div className=" col-lg-3 col-md-6">
            <div className="card m-1">
              <div className="heart">
                <img src={Images.path_102} alt=""/>
              </div>
              <div className="card-img">
                <img src={Images.Mask_Group_19} alt=""/>
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
                <Link>open</Link>
              </div>
            </div>
          </div>
          <div className=" col-lg-3 col-md-6">
            <div className="card m-1">
              <div className="heart">
                <img src={Images.path_102} alt=""/>
              </div>
              <div className="card-img">
                <img src={Images.Mask_Group_19} alt=""/>
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
                <Link>open</Link>
              </div>
            </div>
          </div>
          <div className=" col-lg-3 col-md-6">
            <div className="card m-1">
              <div className="heart">
                <img src={Images.path_102} alt=""/>
              </div>
              <div className="card-img">
                <img src={Images.Mask_Group_19}alt="" />
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
                <Link>open</Link>
              </div>
            </div>
          </div>
          <div className=" col-lg-3 col-md-6">
            <div className="card m-1">
              <div className="heart">
                <img src={Images.path_102} alt=""/>
              </div>
              <div className="card-img">
                <img src={Images.Mask_Group_19} alt=""/>
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
                <Link>open</Link>
              </div>
            </div>
          </div>
          <div className=" col-lg-3 col-md-6">
            <div className="card m-1">
              <div className="heart">
                <img src={Images.path_102} alt="" />
              </div>
              <div className="card-img">
                <img src={Images.Mask_Group_19} alt="" />
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
                <Link>open</Link>
              </div>
            </div>
          </div>
                </div>    
          
                </div>
            </div>
        </div>
    </div>
    
        </>)
}
export default ProfileDetails;