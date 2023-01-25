import ProfileDetails from './profile-details/profile_details';
import './profile.css';


function Profile(){
  return(<>
  <div className="profile">
      <div className='container-fluid'>
        <div className='row'>

       <div className='col-12'>
        <div className='profile-title'>
          <h2>profile</h2>
       
       </div>
       </div>
       <div className='col-12'>
        <ProfileDetails />
       </div>
       
      </div>
      </div>
  </div>
  </>)
}

export default Profile;