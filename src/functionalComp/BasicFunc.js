
import React, { useState, useEffect } from 'react';

function BasicFunc() {
    const [emp, SetEmp] = useState([]);

    useEffect(() => {
        fetch("http://localhost:4000/employee")
        .then((res)=> res.json())
        .then((data)=>SetEmp(data));
      });
  return (
    <div>
        <h1 className='mb-3'>Added Employee form basic Fun</h1>
        <table className="table table-bordered">
            <thead>
                <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Phone Number</th>
                <th scope="col">Email</th>
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
                        </tr>
                    })
                }
                <tr>
                    
                </tr>
            </tbody>
        </table>
    </div>
  );
}
export default BasicFunc;
