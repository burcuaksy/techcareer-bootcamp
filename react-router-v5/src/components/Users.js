import React, {useState,useEffect} from 'react'
import {Link, useRouteMatch} from "react-router-dom";

function Users(){
    let match = useRouteMatch();
    function UsersFetch(){
        const[loading, setLoading] = useState(true);
        const[users, setUsers]= useState([]);
        useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res)=> res.json())
        .then((data)=> setUsers(data))
        .catch((e)=> console.log(e))
        .finally(()=> setLoading(false));
    },[]);


        return(
         <div>
        {loading ? (
            <h3>Loading...</h3>
        ) : (
            <ul>
                {users.map((user,index) =>(
                    <li key={index}>
                        <Link to={`${match.url}/}${user.id}`}>{user.name}</Link>
                
                    </li>
                ))}
                
            </ul>
        )}
    </div>
  );
}
    
   
export default Users;