import React, { useState } from 'react'
import dummyData from './dummyData'

const User = () => {
    const [loading,setloading] = useState(false);

    const loadUser = () => {
        setloading(true);
    }
    if (loading == true){
          return (
    <div className='d-flex flex-column align-items-center justify-content-center vh-100'>
      <div className='display-1'>
        User Name
      </div>
      <div className='d-flex flex-column align-items-center justify-content-center text-secondary gap-2'>

        {
        dummyData.map((user)=>{
            return(
                <div key={user.id} className='card d-flex flex-row align-items-center justify-content-between gap-2 p-3 mt-4 w-100' >
                    <img src={user.image} alt={user.name} style={{width: '50px', height: '50px'}} />
                   <div className='d-flex flex-column align-items-start justify-content-center'>
                     <div className='text-primary'>{user.name}</div>
                    <p className='text-secondary'>{user.email}</p>
                   </div>
                </div>
            )
        })
      }
      <button className='btn btn-primary' onClick={loadUser}>
        Load user
      </button>

      </div>
      
    </div>
  )
    }
    else {
        return(
           
      <div className='d-flex flex-column align-items-center justify-content-center vh-100'>
      <div className='display-1'>
        User Name
      </div>
      <div className='d-flex flex-column align-items-center justify-content-center text-secondary gap-2'>
        <button className='btn btn-primary' onClick={loadUser}>
          Load user
        </button>
      </div>
      
      </div>
    
      
    
        )
    }

}

export default User
