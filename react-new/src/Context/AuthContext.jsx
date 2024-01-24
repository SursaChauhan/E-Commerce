import { createContext, useState } from "react";
export const Authcontext =createContext();



function AuthContextProvider({children}) 
{

  const initialvalue ={
    authState:{
      isAuth:false,
      token:null
    },
    handlelogin: (detail)=>{
  setauth ({...setauth, authState:{isAuth:true,token:detail}}
    )
    },
    handlelogout:()=>{
      setauth({...setauth, authState:{isAuth:false,token:null}}
        )
    }
  }
  
  const[auth,setauth]=useState(initialvalue);

  return(
   < AuthContextProvider value={{}}>
    {children}</ AuthContextProvider>
  )
}

export default AuthContextProvider;
