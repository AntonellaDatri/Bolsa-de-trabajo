import Navbar from '../componets/Navbar'
import CVCard from '../componets/CvCard'



function Cvs(){   
    return (
        <>
            <Navbar/>
            <div className="container-fluid">
                <CVCard aprob="true" />
            </div>
        </>
    );
  }
  
  export default Cvs;