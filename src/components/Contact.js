import React from 'react';
import AddEmp from '../functionalComp/AddEmp';
import BasicDelete from '../functionalComp/BasicDelete';

function Contact() {
  return (
    <div className='container text-start py-5'>
        <div className='mb-5'>
            <AddEmp />
        </div>
        <div className='py-5 d-none'>
            <h1 className='mb-3 mb-lg-5'>Get in <span>Touch</span></h1>
            <form className="row g-3">
                <div className="col-md-6">
                    <label for="inputPassword4" className="form-label">ID</label>
                    <input type="text" className="form-control" id="subject" />
                </div>
                <div className="col-md-6">
                    <label for="Name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" />
                </div>
                <div className="col-md-6">
                    <label for="PhoneNumber" className="form-label">Phone Number</label>
                    <input type="text" className="form-control" id="phoneNumber" />
                </div>
                <div className="col-md-6">
                    <label for="inputEmail4" className="form-label">Email</label>
                    <input type="email" className="form-control" id="inputEmail4" />
                </div>
                <div className="col-12">
                    <button type="submit" className="btn btn-primary">Send</button>
                </div>
                
            </form>
        </div>
        <div className='mt-5'>
            <BasicDelete />
        </div>
        {/* <CustomApi /> */}
    </div>
  );
}

export default Contact;
