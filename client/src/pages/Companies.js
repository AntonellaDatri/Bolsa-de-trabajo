import Navbar from '../componets/Navbar'
import AnnouncementCard from '../componets/AnnouncementCard'



function Companies() {
    


    return (
        <div>
            <Navbar/>
            
            <div className="container-fluid">
                <AnnouncementCard aprob="true" />
            </div>
                    
        </div>
    );
  }
  
  export default Companies;