import axios from 'axios';
import React, {useState} from 'react';

function AddEmp() {
    const [id,SetId]= useState();
    const [name, SetName] = useState();
    const [phone, SetPhone] = useState();
    const [mail, SetMail] = useState();
    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:4000/employee',{id,name,phone,mail})
        .then(()=> {
            alert("Data Inserted");
            SetId("");
            SetName("");
            SetPhone("");
            SetMail("");
        })
        .catch((err)=>{
            console.log(err)
        })
    }
  return (
    <div className='container'>
        <div style={{backgroundColor:"#5AB1D2"}} className="px-3 py-4">
            <h1>Add Employee here form ADD EMP FIle</h1>
            <form className="row g-3" onSubmit={submitHandler}>
                <div className="col-md-6">
                    <label for="id" className="form-label">ID</label>
                    <input type="text"
                     className="form-control"
                     id="id"
                     name="id"
                     onChange={(e)=>{SetId(e.target.value)}}
                     value={id}
                      />
                </div>
                <div className="col-md-6">
                    <label for="name" className="form-label">Name</label>
                    <input type="text"
                     className="form-control"
                     id="name"
                     name="name"
                     onChange={(e)=>{SetName(e.target.value)}}
                     value={name}
                      />
                </div>
                <div className="col-md-6">
                    <label for="phone" className="form-label">Phone Number</label>
                    <input type="text"
                     className="form-control"
                     id="phone"
                     name="phone"
                     onChange={(e)=>{SetPhone(e.target.value)}}
                     value={phone}
                     
                      />
                </div>
                <div className="col-md-6">
                    <label for="mail" className="form-label">Email</label>
                    <input type="email"
                     className="form-control"
                     id="mail"
                     name="mail"
                     onChange={(e)=>{SetMail(e.target.value)}}
                     value={mail}
                      />
                </div>
                <div className="col-12">
                    <input type='submit' value="ADD EMP" />
                </div>
                
            </form>
        </div>
    </div>
  );
}

export default AddEmp;
