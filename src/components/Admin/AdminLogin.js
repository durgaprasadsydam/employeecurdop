import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom'
const AdminLogin = () => {
    const [username, SetUsername]=useState("")
    const [password, SetPassword]=useState("")
    const navigate = useNavigate();

    const Login = (e) => {
        e.preventDefault();
        if(username === "Admin" && password === "Admin@123") {
            //alert("admin login success")
            navigate("/dashboard")
        }
        else {
            alert("please check details")
        }
    };
  return (
    <div className='adminLogin'>
        <div className='container'>
            <div className='row align-items-center justify-content-center'>
                <div className='col-12 col-lg-4'>
                    <div className='box py-3'>
                        <h1>Admin Login</h1>
                        <form onSubmit={Login}>
                            <input
                            type="text"
                            className="form-control form-control-lg mb-3"
                                name="username"
                                value={username}
                                onChange={(e)=>{SetUsername(e.target.value);}}
                                placeholder="User Name"
                                />
                            <input 
                                type="password" 
                                className="form-control form-control-lg mb-3" 
                                name="password" 
                                value={password} 
                                placeholder="Password"
                                onChange={(e)=>{SetPassword(e.target.value);}}

                            />
                            <input className='themeBtn' type="submit" value="login" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default AdminLogin;
