import axios from "axios";
import { useEffect, useState } from "react";


function API (){
    
    const [user, setUser] = useState([])


    const handleGetData = () =>{
        axios.get("https://jsonplaceholder.typicode.com/posts").then( (Response)=>{
            setUser(Response.data)
        }).catch((error) => {
            console.log(error)

        })

    }

    useEffect(() =>{
        handleGetData()
    })


    return <div>
        <h1>Hello Posts</h1>

        {
            user.map( (data) =>{
                return <div className="bg-red-300 m-3">
                    <h1> userId:{data.userId}</h1>
                    <h1>id:{data.id}</h1>
                    <h1>title: {data.title}</h1>
                    <h1> body{data.body}</h1>
                </div>
            })
        }



    </div>
}

export default API