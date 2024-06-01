import React, {useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile() {
  const {user} = useContext(UserContext);

  if(!user) return alert("please login");

  return (
    <>
    <h1 className='text-3xl'>Welcome {user.username}</h1>
    </>
  )
}

export default Profile
