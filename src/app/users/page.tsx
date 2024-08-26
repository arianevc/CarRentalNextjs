import React, { use } from 'react'
interface User{
  id:number;
  name:string;
}
const UsersPage = async() => {
 const res=await fetch('https://jsonplaceholder.typicode.com/users',
  {cache:'no-store'});//to avoid cashe store. if you want to store put {next:revalidate 10} which means refresh after 10 sec
 const users: User[]=await res.json();
 return (
    <>
      <h1>Users</h1>
      <p>{new Date().toLocaleTimeString()}</p>
      <ul>
        {users.map(user=><li key={user.id}>{user.name}</li> )}
      </ul>
    </>
  )
}

export default UsersPage
