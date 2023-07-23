import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import API from '../api'

const PersonalProfile = () => {

    const [userData, setUserData] = useState({
        'email': '',
        'username': '',
        'fullname': ''
    })

    const getProfile = async () => {
        const res = await API.get('/profile', {
          headers: {
            "Content-type": 'application/json',
            Accept: 'application/json'
          },
          credentials: 'include'
    
        })
    
        const data = await res.data
        //console.log(data)
        setUserData(data)
      }
    
      
    
      useEffect(() => {
        console.log('Profile page')
        getProfile();
      }, [])
    

  return (
    <div className='profile-info-view'>
       

       <div className='profile-pair-div row'>
            <span className='profile-keys col'> Userame </span>
            <span className='profile-values col'> {userData.username} </span>
            <span className='profile-values col'> </span>
       </div>

       <div className='profile-pair-div row'>
            <span className='profile-keys col'> Name  </span>
            <span className='profile-values col'> {userData.fullname}</span>
            <span className='profile-values col'> </span>
       </div>

       <div className='profile-pair-div row'>
            <span className='profile-keys col'> Email </span>
            <span className='profile-values col'> {userData.email}</span>
            <span className='profile-values col'> </span>
       </div>

       
            <div className='edit-profile-text'> <u>Edit Profile </u></div>
       

    </div>
  )
}


export default PersonalProfile
