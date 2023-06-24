import React, { useState } from "react";
import "./scholar.css";

const BannerForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    course: "",
    class: "",
    mobile: "",
    email: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  //otp ka funtion
  const handleVerifyOTP = () => {
    console.log("OTP Verified");
  };
  //function check krne ke liye sb bhara hai ya nhi
  const handleSubmit = (event) => {
    event.preventDefault();
    let hasEmptyField = false;
    for (const field in formData) {
      if (formData[field] === "") {
        hasEmptyField = true;
        break;
      }
    }

    if (hasEmptyField) {
      alert("Please fill in all fields.");
      return;
    } else {
      alert("form");
    }
    console.log("Form submitted:", formData);
  };
  //contengt on left
  return (
    <div className="w-full min-h-full flex items-center bg-[rgb(253,_224,_71,_0.3)] p-4">
      <div className="content">
        <h4 className="content-title">Appear in Instant Online</h4>
        <h1 className="content-title">
          <strong> PATNA SCIENCE ACADMEY SCHOLARSHIP PROGRAM(PSAS)</strong>
        </h1>
        <h3 className="content-title">
          For Class 6th to 12th &amp; 12th Pass Out Students
        </h3>
        <div className="round-box">
          <div className="centered-content">
            <div>
              Avail upto <p>100% SCHOLARSHIP</p>on{" "}
              <p>JEE(MAINS & ADVANCE),NEET FOUNDATION</p> courses
            </div>
          </div>
        </div>
      </div>
      <form className="form" onSubmit={handleSubmit}>
        <h3>Get To Know More About MOST</h3>
        <div className="form-group">
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="course">Course</label>
          <select
            id="course"
            name="course"
            value={formData.course}
            onChange={handleInputChange}>
            <option value="">Select a course</option>
            <option value="course1">JEE</option>
            <option value="course2">NEET</option>
            <option value="course3">FOUNDATION</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="class">Class</label>
          <select
            id="class"
            name="class"
            value={formData.class}
            onChange={handleInputChange}>
            <option value="">Select a class</option>
            <option value="class1">Class 8 to 10th</option>
            <option value="class2">Class 11 or 12th </option>
            <option value="class3">12(dropper)</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="mobile">Mobile Number</label>
          <div className="mobile-input-group">
            <input
              type="tel"
              id="mobile"
              name="mobile"
              value={formData.mobile}
              onChange={handleInputChange}
            />
            <button
              type="button"
              className="otp-button"
              onClick={handleVerifyOTP}>
              Verify OTP
            </button>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Submit</button>
        <p>
          <a
            href="https://www.google.com/maps/dir/25.7163414,85.0592406/Bazar+Samiti,+Saketpuri,+main+gate,+Patna,+Bihar+800016/@25.6002908,85.1073058,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x39ed59a053f710e7:0x884cb78d62517ab6!2m2!1d85.1773461!2d25.6003075?entry=ttu"
            arget="_blank"
            rel="noopener noreferrer">
            Or visit us at Bazar Samiti, Saketpuri, main gate, Patna, Bihar
            800016{" "}
          </a>
        </p>
      </form>
    </div>
  );
};

export default BannerForm;
