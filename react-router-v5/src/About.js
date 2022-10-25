import React from 'react'
import{useLocation, useHistory} from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import UsersAxios from '../../fetching/src/components/UsersAxios';
function useQuery(){
    return new URLSearchParams(useLocation().search);

}

function About(){
    const query = useQuery();
    const history= useHistory();
    const goToUsersPage=()=>{
        history.push("/users");

    };


    return(
        <div>
            About{query.get("lang")} {query.get("x")}
        <hr/>
        <div onClick={goToUsersPage} style={{cursor:"pointer", color:"blue"}}>
        Go to Users
        </div>
        </div>
    )
}

export default About;

