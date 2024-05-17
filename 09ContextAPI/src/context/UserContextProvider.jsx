import React, { useState } from 'react'
import UserContext from './UserContext'

const UserContextProvider = ({children}) => {  
  const[user,setUser]  = useState(null)
  return (
    
    <UserContext.Provider value={{user,setUser}}>
     {children} 
   
    </UserContext.Provider>
  )
}

export default UserContextProvider

// AT LINe 4:-
//children aise hi ek name h bas ki jo aa rha h props use as it is aagr pass kr do bas.  Not necessary children hi name rakho but children name mostly rkhe h log
// AT LINe 8:-  {/*//jo bhi aa rha h use as it is render kr rhe h in wrap , provider k liye yeh file h  bas */}
//and we give value foe know kis component ko kya access milega so pehle unhe lana pdega jiska acess den h so use value (yha wo lokho jisko tumhe lana h for gant acess to components) 