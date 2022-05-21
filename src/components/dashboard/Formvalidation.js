import React, { useEffect, useState } from "react";
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
    console.log("hello sir ", firstname);
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

  // const initialValue = {
  //   firstname: "",
  //   lastname: "",
  //   address: "",
  //   company: "",
  //   telephonenumber: "",
  // };
  // const [formvalue, setFormvalue] = useState(initialValue);
  // const [formError, setFormError] = useState({});
  // console.log("firstname", lastname);

  // const onChangehandle = (e) => {
  //   const { name, value } = e.target;
  //   setFormvalue({ ...formvalue, [name]: value });

  //   // console.log(formvalue);
  // };

  // const handleSubmite = (e) => {
  //   e.preventDefault();
  //   setFormError(validate(formvalue));
  //   setIsSubmit(true);
  // };

  // const validate = (values) => {
  //   const error = {};
  //   if (!values.firstname) {
  //     error.firstname = "First Name is require";
  //   }

  //   if (!values.lastname) {
  //     error.lastname = "Last Name is require";
  //   }

  //   if (!values.address) {
  //     error.address = "Address is require";
  //   }

  //   if (!values.company) {
  //     error.company = "Company is require";
  //   }
  //   if (!values.telephonenumber) {
  //     error.telephonenumber = "Telephone Number is require";
  //   } else if (values.telephonenumber.length < 0) {
  //     error.telephonenumber = "Telephone Number is more than -1  ";
  //   } else if (values.telephonenumber.length > 12) {
  //     error.telephonenumber = "Telephone Number is less than 12";
  //   }

  //   return error;
  // };

  // useEffect(() => {
  //   console.log(formError);
  //   if (Object.keys(formError).length === 0) {
  //     console.log(formvalue);
  //   }
  // }, [formError]);

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
            {/* <Typography
              variant='body2'
              style={{ color: "red", fontWeight: "500" }}
            >
              {formError.firstname}
            </Typography> */}
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
            {/* <Typography
              variant='body2'
              style={{ color: "red", fontWeight: "500" }}
            >
              {formError.lastname}
            </Typography> */}
          </div>

          {/* <!----------------------------Address-------------------------> */}

          <div className='control-form '>
            <span>
              {/* <i className='fa fa-lock' aria-hidden='true'></i> */}
              {/* <i class='fa-solid fa-house'></i> */}
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

            {/* <Typography
              variant='body2'
              style={{ color: "red", fontWeight: "500" }}
            >
              {formError.address}
            </Typography> */}
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

            {/* <Typography
              variant='body2'
              style={{ color: "red", fontWeight: "500" }}
            >
              {formError.company}
            </Typography> */}
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
            {/* <Typography
              variant='body2'
              style={{ color: "red", fontWeight: "500" }}
            >
              {formError.telephonenumber}
            </Typography> */}
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
