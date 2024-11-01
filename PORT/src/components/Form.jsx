import React, { useState } from "react";
import { Formik, FieldArray } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom"; // Import for navigation

const Form = () => {
  const [register, setRegister] = useState(false); // Toggle between login and registration
  const [formTransition, setFormTransition] = useState(false); // Form transition state
  const navigate = useNavigate(); // Initialize navigate function

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    checkBox: Yup.string().required("Select your Gender"),
  });

  const regiValidationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
    checkBox: Yup.string().required("Select your Gender"),
  });

  const handleLoginClick = () => {
    if (register) {
      setFormTransition(true);
      setTimeout(() => {
        setRegister(false);
        setFormTransition(false);
      }, 300);
    }
  };

  const handleRegisterClick = () => {
    if (!register) {
      setFormTransition(true);
      setTimeout(() => {
        setRegister(true);
        setFormTransition(false);
      }, 300);
    }
  };

  const loginSubmit = (values) => {
    console.log("Form submitted with values:", values);
    navigate("/welcome");
  };

  const registerSubmit = (values) => {
    console.log("Form submitted with values:", values);
    navigate("/welcome");
  };

  return (
    <div className="bg-gradient-to-r from-blue-900 via-purple-900 to-black h-screen flex justify-center items-center relative overflow-hidden">
      <div
        className={`neon-border w-1/3 max-md:w-[96%]  h-[90vh] rounded-xl p-8 shadow-2xl flex flex-col relative backdrop-blur-lg bg-opacity-30 bg-black transition-all duration-300 ${
          formTransition ? "opacity-0" : "opacity-100"
        }`}
        style={{
          transform: register ? "translateY(0%)" : "translateY(0%)",
          transition: "transform 0.3s ease",
        }}
      >
        {!register ? (
          <>
            <h1 className="text-center text-4xl font-extrabold neon-text mb-6">
              Login Form
            </h1>
            <Formik
              initialValues={{
                email: "",
                password: "",
                checkBox: "",
              }}
              validationSchema={validationSchema}
              onSubmit={loginSubmit} // This should remain here
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                setFieldValue,
                handleSubmit, // Add this line to get handleSubmit from Formik
              }) => (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {" "}
                  {/* Change onSubmit here */}
                  {/* Email Field */}
                  <div className="relative neon-input-wrapper flex flex-col">
                    <label htmlFor="email" className="form-label neon-text">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                      className="form-input neon-input"
                    />
                    {touched.email && errors.email && (
                      <p className="text-red-500 absolute top-full left-0 mt-1 text-sm">
                        {errors.email}
                      </p>
                    )}
                  </div>
                  {/* Password Field */}
                  <div className="relative neon-input-wrapper flex flex-col">
                    <label htmlFor="password" className="form-label neon-text">
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                      className="form-input neon-input"
                    />
                    {touched.password && errors.password && (
                      <p className="text-red-500 absolute top-full left-0 mt-1 text-sm">
                        {errors.password}
                      </p>
                    )}
                  </div>
                  {/* Gender Selection */}
                  <div className="relative flex flex-col gap-2 p-5 rounded-lg neon-input-wrapper border-[2px] border-dashed border-[#08fdd8]">
                    <h1 className="form-label neon-text">Select Gender</h1>
                    <div className="flex gap-8">
                      {["male", "female", "other"].map((gender) => (
                        <label
                          key={gender}
                          htmlFor={gender}
                          className="form-label neon-text"
                        >
                          <input
                            type="radio"
                            name="checkBox"
                            id={gender}
                            value={gender}
                            checked={values.checkBox === gender}
                            onChange={handleChange}
                            className="radio neon-radio mt-8"
                          />
                          {gender.charAt(0).toUpperCase() + gender.slice(1)}
                        </label>
                      ))}
                    </div>
                    {touched.checkBox && errors.checkBox && (
                      <p className="text-red-500">{errors.checkBox}</p>
                    )}
                  </div>
                  {/* Submit Button */}
                  <div className="my-5 flex justify-center">
                    <button type="submit" className="submit-button neon-button">
                      Submit
                    </button>
                  </div>
                </form>
              )}
            </Formik>

            <div className="flex justify-center space-x-3 text-white my-3">
              Don't have an account?
              <a
                href="#"
                className="text-[#08fdd8] btn-trans ml-3"
                onClick={handleRegisterClick}
              >
                Sign Up
              </a>
            </div>
          </>
        ) : (
          <>
            <h1 className="text-center text-4xl font-extrabold neon-text mb-6">
              Register
            </h1>
            <Formik
  initialValues={{
    email: "",
    password: "",
    confirmPassword: "",
    checkBox: "",
  }}
  validationSchema={regiValidationSchema}
  onSubmit={registerSubmit} // This ensures the correct function is called on submission
>
  {({
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
  }) => (
    <form onSubmit={(e) => { 
        e.preventDefault(); // Prevent default form submission
        if (Object.keys(errors).length === 0) { // Check for validation errors
          registerSubmit(values); // Only call the submit function if there are no errors
        }
      }} className="space-y-6">
      {/* Email Field */}
      <div className="relative neon-input-wrapper flex flex-col">
        <label htmlFor="email" className="form-label neon-text">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
          className="form-input neon-input"
        />
        {touched.email && errors.email && (
          <p className="text-red-500 absolute top-full left-0 mt-1 text-sm">
            {errors.email}
          </p>
        )}
      </div>

      {/* Password Field */}
      <div className="relative neon-input-wrapper flex flex-col">
        <label htmlFor="password" className="form-label neon-text">
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.password}
          className="form-input neon-input"
        />
        {touched.password && errors.password && (
          <p className="text-red-500 absolute top-full left-0 mt-1 text-sm">
            {errors.password}
          </p>
        )}
      </div>

      {/* Confirm Password Field */}
      <div className="relative neon-input-wrapper flex flex-col">
        <label htmlFor="confirmPassword" className="form-label neon-text">
          Confirm Password
        </label>
        <input
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.confirmPassword}
          className="form-input neon-input"
        />
        {touched.confirmPassword && errors.confirmPassword && (
          <p className="text-red-500 absolute top-full left-0 mt-1 text-sm">
            {errors.confirmPassword}
          </p>
        )}
      </div>

      {/* Gender Selection */}
      <div className="relative flex flex-col gap-2 p-5 rounded-lg neon-input-wrapper border-[2px] border-dashed border-[#08fdd8]">
        <h1 className="form-label neon-text">Select Gender</h1>
        <div className="flex gap-8">
          {["male", "female", "other"].map((gender) => (
            <label
              key={gender}
              htmlFor={gender}
              className="form-label neon-text"
            >
              <input
                type="radio"
                name="checkBox"
                id={gender}
                value={gender}
                checked={values.checkBox === gender}
                onChange={handleChange}
                className="radio neon-radio mt-8"
              />
              {gender.charAt(0).toUpperCase() + gender.slice(1)}
            </label>
          ))}
        </div>
        {touched.checkBox && errors.checkBox && (
          <p className="text-red-500">{errors.checkBox}</p>
        )}
      </div>

      {/* Submit Button */}
      <div className="my-5 flex justify-center">
        <button type="submit" className="submit-button neon-button">
          Submit
        </button>
      </div>
    </form>
  )}
</Formik>

            <div className="flex justify-center space-x-3 text-white my-3">
              Already have an account?
              <a
                href="#"
                className="text-[#08fdd8] btn-trans ml-3"
                onClick={handleLoginClick}
              >
                Sign In
              </a>
            </div>
          </>
        )}
      </div>
      <style>
        {`
            /* Other styles remain unchanged */
            body {
              font-family: 'Roboto', sans-serif;
              overflow: hidden;
            }

            .moving-neon-circle {
              position: absolute;
              border-radius: 50%;
              pointer-events: none;
              opacity: 0.5;
              mix-blend-mode: screen;
            }
              
            .circle-1 {
              width: 300px;
              height: 300px;
              background: radial-gradient(circle, #ff00ff, transparent);
              animation: move 15s linear infinite;
            }
              
            .circle-2 {
              width: 550px;
              height: 550px;
              background: radial-gradient(circle, #00ffff, transparent);
              animation: move 20s linear infinite reverse;
            }
              
            @keyframes move {
              0% { transform: translate(0, 0); }
              50% { transform: translate(-200px, -200px); }
              100% { transform: translate(0, 0); }
            }

            /* Custom Scrollbar Styling */
            .neon-input-wrapper .overflow-y-scroll::-webkit-scrollbar {
              width: 12px; /* Slightly wider for emphasis */
            }

            .neon-input-wrapper .overflow-y-scroll::-webkit-scrollbar-track {
              background: #182b32; /* Dark gradient for track */
              border-radius: 10px;
              box-shadow: inset 0 0 5px #000; /* Subtle shadow inside track */
            }

            .neon-input-wrapper .overflow-y-scroll::-webkit-scrollbar-thumb {
              background: linear-gradient(135deg, #08fdd8, #00ffff); /* Neon gradient */
              border-radius: 10px;
              box-shadow: 0 0 10px #08fdd8, 0 0 15px #00ffff; /* Neon glow */
              transition: background 0.3s ease, box-shadow 0.3s ease; /* Smooth transition */
            }

            .neon-input-wrapper .overflow-y-scroll::-webkit-scrollbar-thumb:hover {
              background: linear-gradient(135deg, #00ffff, #08fdd8); /* Inverse gradient on hover */
              box-shadow: 0 0 15px #00ffff, 0 0 25px #08fdd8; /* Increase glow on hover */
            }

            /* Background, text, and button styling for the form */
            .bg-gradient-to-r {
              background: linear-gradient(135deg, #0f2027, #203a43, #2c5364);
            }

            .neon-text {
              color: #08fdd8;
              text-shadow: 0 0 1px #08fdd8, 0 0 10px #08fdd8;
            }
.btn-trans:hover{
              text-shadow: 0 0 1px #08fdd8, 0 0 10px #08fdd8;

}
            .neon-input-wrapper {
              position: relative;
              margin-bottom: 1rem; /* To maintain space between elements */
            }

            .neon-input {
              background: transparent;
              border: 1px solid #08fdd8;
              color: white;
              padding: 0.5rem 1rem;
              outline: none;
              width: 100%;
              transition: box-shadow 0.3s ease;
              
            }

            .neon-input:focus {
              box-shadow: 0 0 10px #08fdd8, 0 0 20px #08fdd8;
            }

            .neon-button {
              background-color: transparent;
              border: 1px solid #08fdd8;
              color: white;
              padding: 0.5rem 1rem;
              cursor: pointer;
              transition: background-color 0.3s ease;
            }
              .text-highlite:hover{
                            text-shadow: 0 0 1px #08fdd8, 0 0 10px #08fdd8;

              }

            .neon-button:hover {
              background-color: #08fdd8;
              color: black; /* Change text color on hover */
              box-shadow: 0 0 10px #08fdd8, 0 0 20px #08fdd8;
            }
              .neon-border {
  transition: all 0.3s ease;
}

         `}
      </style>
    </div>
  );
};

export default Form;
