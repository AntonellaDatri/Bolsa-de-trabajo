import Navbar from '../componets/Navbar'
import { useState , useEffect} from 'react';
import CVCard from '../componets/CvCard'
import AnnouncementCard from '../componets/AnnouncementCard'

import rp from 'request-promise';


function ApproveDeclineDrafrts() {
    
    const [showDraftsCVs, setShowDraftsCVs] = useState(false)
    const [showDraftsAnnouncements, setShowDraftsAnnouncements] = useState(false)
    const token = sessionStorage.getItem("accessToken")

    useEffect(() => {
        const options = {
            url: "http://localHost:5000/user/posts",
            headers : {"authorization" : token},
            json: true,
        };
        rp.post(options).then(response => {
        }).catch(err => {
            window.location.href ="/login"
        });
  
     }, [])


    const viewDraftsCVs = (() => {
        setShowDraftsCVs(!showDraftsCVs)
        
    });

    const viewDraftsAnnouncements =(() => {
        setShowDraftsAnnouncements(!showDraftsAnnouncements)
    });

    


    return (
        <>
            <Navbar/>
            <div className= "button-position btn-lg "> 
                    <button type="button" className="btn btn-info dropdown-toggle fs-4" onClick={viewDraftsCVs}>CVs de alumnos </button>
            </div>
            {showDraftsCVs && <CVCard aprob="false" buttons = {true}/>}

            <div className= "button-position btn-lg "> 
                    <button type="button" className="btn btn-primary dropdown-toggle fs-4" onClick={viewDraftsAnnouncements}>Ofertas laborales  </button>
            </div>
            <div className="container-fluid">
                {showDraftsAnnouncements && <AnnouncementCard aprob="false" buttons = {true}/>}
            </div>
        </>
    );
  }
  
export default ApproveDeclineDrafrts;