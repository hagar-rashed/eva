
import Main from "./main_body/main_body";
import Details from "./details/details";
import './home.css';
function Home (){
  return (
   <div className="home">
    
  


    
      <div className="container-fluid">
        <div className="row">
      
        <div className="col-md-8">
          <Main /> 
        </div>
        <div className="col-md-4 details p-0">
          <Details />
        </div>
    </div>
      </div>
   </div>
  );
}
export default Home;