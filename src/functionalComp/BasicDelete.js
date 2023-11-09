import Axios from 'axios';
import React, { useEffect, useState } from 'react';

const BasicDelete = () => {
    const [emp, SetEmp] = useState([]);


    const [id,SetId]= useState();
    const [name, SetName] = useState();
    const [phone, SetPhone] = useState();
    const [mail, SetMail] = useState();


    useEffect(() => {
        Axios.get("http://localhost:4000/employee")
        .then((res) => SetEmp(res.data))
        .catch((err)=> {
            console.log(err);
        });
      });
    const deleteData  = (EmpID) => {
        Axios.delete(`http://localhost:4000/employee/${EmpID}`)
        .then(() => {
            alert("Data Deleted")

        })
        .catch((err)=> {
            console.log(err);
        })
    };

    const editData = (EmpID) => {
        Axios.get(`http://localhost:4000/employee/${EmpID}`)
        .then((res)=> {
            SetId(res.data.id)
            SetName(res.data.name)
            SetPhone(res.data.phone)
            SetMail(res.data.mail)
        })
        .catch(err=> {
            console.log(err);
        })
    };

    const updateHandler = (e) => {
        e.preventDefault();
        Axios.put(`http://localhost:4000/employee/`+id,{id,name,phone,mail})
        .then(()=> {
            alert("Data Updated");
            SetId("");
            SetName("");
            SetPhone("");
            SetMail("");
        })
        .catch((err) => {
            console.log(err)
        })
    }
  return (
    <div>
        <h1 className='mb-3'>Final Employee Data</h1>
        <table className="table table-bordered mb-5">
            <thead>
                <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Phone Number</th>
                <th scope="col">Email</th>
                <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    emp.map((item) => {
                        return <tr>
                            <th scope="row">{item.id}</th>
                            <td>{item.name}</td>
                            <td>{item.phone}</td>
                            <td>{item.mail}</td>
                            <td>
                                <button
                                    onClick={() => {
                                        deleteData(item.id);}} >Delete</button>
                                <button
                                onClick={()=> {editData(item.id);}}
                                >Edit</button>
                            </td>
                        </tr>
                    })
                }
                <tr>
                    
                </tr>
            </tbody>
        </table>





        <div style={{backgroundColor:"#5AB1D2"}} className="px-3 py-4">
            <h1>Editable data</h1>
            <form className="row g-3" onSubmit={updateHandler}>
                <div className="col-md-6">
                    <input type="text"
                     className="form-control"
                     id="id"
                     disabled
                     name="id"
                     value={id}
                     onChange={(e) => {
                        SetId(e.target.value);
                     }}
                      />
                </div>
                <div className="col-md-6">
                
                    <input type="text"
                     className="form-control"
                     id="name"
                     name="name"
                     value={name}
                     onChange= {(e) => {
                        SetName(e.target.value);
                     }}
                      />
                </div>
                <div className="col-md-6">
                    <input type="text"
                     className="form-control"
                     id="phone"
                     name="phone"
                     value={phone}
                     onChange={(e)=> {
                        SetPhone(e.target.value);
                     }}
                     
                      />
                </div>
                <div className="col-md-6">
                    <input type="email"
                     className="form-control"
                     id="mail"
                     name="mail"
                     value={mail}
                     onChange={(e)=> {
                        SetMail(e.target.value)
                     }}
                      />
                </div>
                <div className="col-12">
                    <input type='submit' value="Update" />
                </div>
            </form>
        </div>
    </div>
  );
}

export default BasicDelete;
