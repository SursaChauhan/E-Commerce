import React,{useState,useContext} from "react";
import { Link ,useNavigate} from "react-router-dom";

function Login() {
  const[email,setEmail] = useState("");
  const[password,setPassword] = useState("");


  const loginpost=async(obj)=>{

    try{
const res =await fetch('https://reqres.in/api/login',{
  method:"POST",
  headers:{
  'application-Type':'response/json'
  },
   body:(obj)
})
Navigate("/dashboard")


    }catch(err){
      console.log("posting err",err)
    }
  }

  const handlesubmit=(e)=>{
    e.preventDefault();

    let obj ={email,password}
    loginpost(obj);
  }

  return (
    <div className="login-page">
      <form className="form" data-testid="login-form" onSubmit={(e)=>{handlesubmit}}>
        <div>
          <label>
            <input data-testid="email-input" type="email" placeholder="email"  value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
          </label>
        </div>
        <div>
          <label>
            <input
              data-testid="password-input"
              type="password"
              placeholder="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}
            />
          </label>
        </div>
        <div>
          <button data-testid="form-submit" type="submit">
            SUBMIT
          </button>
        </div>
      </form>
      <div>
        <Link className="message" to="/">
          Go Back
        </Link>
      </div>
    </div>
  );
}
export default Login;
