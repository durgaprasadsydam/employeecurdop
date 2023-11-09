import React from 'react';

function DashBoard() {
  return (
    <div className='container-fluid g-0 text-start dashBoard'>
        <div className="row">
            <div className="col-12 col-lg-2">
                <div className='leftBox'>
                    <button>Dashboard</button>
                    <button>Add Employee</button>
                    <button>Edit Employee</button>
                    <button>Enquiry Details</button>
                    
                </div>
            </div>
            <div className="col-12 col-lg-10">
                Right side content
            </div>


        </div>
    </div>
  );
}

export default DashBoard;
