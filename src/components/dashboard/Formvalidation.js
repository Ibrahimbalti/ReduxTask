import React, { useState } from "react";
import "./form.css";

const Formvalidation = () => {
  return (
    <>
      <div className='form-container'>
        <form action='' className='form' id='form'>
          <h2>Form</h2>

          {/* <!------------------------------First Name------------------------> */}

          <div className='control-form' id='conftrol-from'>
            <span style={{ display: "inline" }}>
              <i className='fa fa-user' aria-hidden='true'></i>
            </span>
            <input
              type='text'
              id='firstnamename'
              className='input'
              placeholder='Firstname'
            />
            <hr />
            <small>Error Message</small>
          </div>

          {/* <!----------------------------Last Name-------------------------> */}

          <div className='control-form ' id='conftrol-from'>
            <span>
              <i className='fa fa-location-arrow' aria-hidden='true'></i>
            </span>
            <input
              type='text'
              id='lastname'
              className='input'
              placeholder='Lastname'
            />
            <hr />
            <small>Error Message</small>
          </div>

          {/* <!----------------------------Address-------------------------> */}

          <div className='control-form ' id='conftrol-from'>
            <span>
              <i className='fa fa-lock' aria-hidden='true'></i>
            </span>
            <input
              type='text'
              id='address'
              className='input'
              placeholder='Address'
            />
            <hr />
            <small>Error Message</small>
          </div>

          {/* <!----------------------------Company-------------------------> */}

          <div className='control-form' id='conftrol-from'>
            <span>
              <i className='fa fa-lock' aria-hidden='true'></i>
            </span>
            <input
              type='text'
              id='company'
              className='input'
              placeholder='Company'
            />
            <hr />
            <small>Error Message</small>
          </div>

          {/* <!----------------------------Telephone Number-------------------------> */}

          <div className='control-form' id='conftrol-from'>
            <span>
              <i className='fa fa-lock' aria-hidden='true'></i>
            </span>
            <input
              type='text'
              id='telephonenumber'
              className='input'
              placeholder='Telephone number'
            />
            <hr />
            <small>Error Message</small>
          </div>

          <button>Submit</button>
          {/* <pre>
            By clickling the Sign Up button, you agree to our
            <span style={{ color: "#1eae98" }}>Terms & Condition</span> and{" "}
            <span style={{ color: "#1eae98" }}> Privacy Policy</span>{" "}
          </pre> */}
        </form>
      </div>
    </>
  );
};
export default Formvalidation;
