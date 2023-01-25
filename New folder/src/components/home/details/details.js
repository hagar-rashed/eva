import Images from "../../../images/images";
import './details.css';
function Details(){
    return(
    <>
    <div className="main-title text-center">
        <h2>here we go</h2>
    </div>
    <div className="details-img text-center">
        <img src={Images.Mask_Group_19} />
    </div>
    <div className="d-flex justify-content-around align-items-center text-center">
        <div className="detail-title text-center">
           <p>chilly mountain</p>
        </div>
        
        <div className="follow-btn">
            <a href="">follow</a>
        </div>
    
    </div>
    <div className="details-body text-left px-3">
            <p>Discover what rest really means at <br/>these cold mountains</p>
            <p className="area">Alaska. USA</p>
        </div>
    
    </>)
}

export default Details;