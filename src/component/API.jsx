import axios from "axios";
import { useEffect, useState } from "react";


function API (){
    
    const [user, setUser] = useState([])


    const handleGetData = () =>{
        axios.get("https://jsonplaceholder.typicode.com/users").then( (Response)=>{
            setUser(Response.data)
        }).catch((error) => {
            console.log(error)

        })

    }

    useEffect(() =>{
        handleGetData()
    })


    return <div>
        <h1>Hello API</h1>

        {
            user.map( (data) =>{
                return <div className="bg-red-300 m-3">
                    <h1> Name:{data.email}</h1>
                    <h1>Email:{data.name}</h1>
                    <h1>UserName: {data.username}</h1>
                    <h1> Address{data.address.city}</h1>
                </div>
            })
        }



    </div>
}

export default API