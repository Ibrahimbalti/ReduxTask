import React, { useState } from "react";
import "./form.css";
import { connect } from "react-redux";
import { addForm } from "../../action/formAction";
const Formvalidation = ({ addForm }) => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastname] = useState("");
  const [address, setAddress] = useState("");
  const [company, setCompany] = useState("");
  const [telephonenumber, setTelephonenumber] = useState("");

  const onSubmited = (e) => {
    e.preventDefault();
    const newform = {
      firstname,
      lastname,
      address,
      company,
      telephonenumber,
    };

    addForm(newform);
    setFirstName("");
    setLastname("");
    setAddress("");
    setCompany("");
    setTelephonenumber("");
  };

  return (
    <>
      <div className='form-container'>
        <form action='' className='form' onSubmit={onSubmited}>
          <h2>Form</h2>

          {/* <!------------------------------First Name------------------------> */}

          <div className='control-form'>
            <span style={{ display: "inline" }}>
              <i className='fa fa-user' aria-hidden='true'></i>
            </span>
            <input
              type='text'
              id='firstname'
              className='input'
              name='firstname'
              value={firstname}
              required
              placeholder='Firstname'
              onChange={(e) => setFirstName(e.target.value)}
            />
            <hr />
          </div>

          {/* <!----------------------------Last Name-------------------------> */}

          <div className='control-form '>
            <span>
              <i className='fa fa-user' aria-hidden='true'></i>
            </span>
            <input
              type='text'
              id='lastname'
              name='lastname'
              value={lastname}
              required
              className='input'
              placeholder='Lastname'
              onChange={(e) => setLastname(e.target.value)}
            />
            <hr />
          </div>

          {/* <!----------------------------Address-------------------------> */}

          <div className='control-form '>
            <span>
              <i className='fa fa-home' aria-hidden='true'></i>
            </span>
            <input
              type='text'
              id='address'
              name='address'
              value={address}
              required
              className='input'
              placeholder='Address'
              onChange={(e) => setAddress(e.target.value)}
            />
            <hr />
          </div>

          {/* <!----------------------------Company-------------------------> */}

          <div className='control-form'>
            <span>
              <i className='fa fa-building' aria-hidden='true'></i>
            </span>
            <input
              type='text'
              name='company'
              value={company}
              required
              className='input'
              placeholder='Company'
              onChange={(e) => setCompany(e.target.value)}
            />
            <hr />
          </div>

          {/* <!----------------------------Telephone Number-------------------------> */}

          <div className='control-form'>
            <span>
              <i className='fa fa-phone' aria-hidden='true'></i>
            </span>
            <input
              type='number'
              id='telephonenumber'
              name='telephonenumber'
              value={telephonenumber}
              required
              className='input'
              placeholder='Telephone number'
              onChange={(e) => setTelephonenumber(e.target.value)}
            />
            <hr />
          </div>

          <input
            style={{
              marginTop: "20px",
              width: "100%",
              backgroundColor: "blue",
              padding: "10px",
              color: "white",
              border: "none",
              borderRadius: "5px",
            }}
            type='submit'
            value='Submit'
          />
        </form>
      </div>
    </>
  );
};
export default connect(null, { addForm })(Formvalidation);
