import React, {useState,useEffect} from 'react'

function Users(){
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
                {users.map((user,index} =>(
                    <li key={index}>{user.name}</li>
                )
    )}
                
            </ul>
        
    </div>
        );
    }
    
   
export default Users;
