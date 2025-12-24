'use client'
import { useState } from "react"
import {users, User} from "./data"
import Form from 'next/form'

export default function Search(){
    const[userInput, setuserInput] = useState("")
    const [foundUser, setFoundUser] = useState<User | null>(null);
    
    // const name = users.map(user => user.first_name )
    const handleSubmit = () =>{
        const founduser = users.find( user => user.first_name === userInput)
        if(founduser){
            setFoundUser(founduser)
            console.log("Match", founduser)
        }
        else{
            console.log("Not Match")
        }
    }
    return(
        <>  
        <Form action={handleSubmit}>
        <input name="query" placeholder="enter value" onChange={e => setuserInput(e.target.value) } />
        <button type='submit'>Search</button>
        </Form>

        <div>
            {foundUser ? <div>
                <table className='border w-full border-gray-300 rounded-lg overflow-hidden'>
                <thead className="bg-gray-100">
                    <tr className="text-left">
                        <th className="px-4 py-2 border-b">ID</th>
                        <th className="px-4 py-2 border-b">First Name</th>
                        <th className="px-4 py-2 border-b">Email</th>
                    </tr>
                </thead>
                <tbody>
                    
                        <tr className="hover:bg-gray-50">
                            <td className="px-4 py-2 border-b">{foundUser.id}</td>
                            <td className="px-4 py-2 border-b">{foundUser.first_name}</td>
                            <td className="px-4 py-2 border-b">{foundUser.email}</td>
                        </tr>
                 
                </tbody>
            </table>
            </div> : <div>
                User not found! Search Again
            </div> }
            
        </div>
        </>
    )
}

// Now our task is to build a function handleSubmit
// 1. it can see and access Data from data folder 
// 2. Match if name is available
// 3. return a complete row of it Done we use find function