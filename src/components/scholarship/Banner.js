import React, { useState } from "react";

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

    <div className="w-screen min-h-max lg:h-screen" style={{
      backgroundImage: `url('https://cdn.wallpapersafari.com/79/20/zVpafX.jpg')`,
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
      backgroundSize:'cover',
    }}>

      <div className="w-screen min-h-max lg:h-screen flex flex-col xl:flex-row items-center justify-between md:space-x-5 p-4 bg-black bg-opacity-80">
        <div className="">

          <h4 className="py-2 text-md md:text-2xl text-white">Appear in Instant Online</h4>

          <h1 className="text-green-500 text-[20px] md:text-[45px]">
            <strong> PATNA SCIENCE ACADEMY SCHOLARSHIP PROGRAM (PSASP)</strong>
          </h1>

          <h3 className="text-lg my-2 text-white">
            For Class 6th to 12th &amp; 12th Pass Out Students
          </h3>

          <div className="text-xl my-3 py-5 bg-green-400 rounded-xl">
            <div className="">
              <div>
                Avail upto <p>100% SCHOLARSHIP</p>{" "}on{" "}
                <p>JEE(MAINS & ADVANCE),NEET FOUNDATION</p> courses
              </div>
            </div>
          </div>

        </div>

        <div className="my-10 lg:my-0 w-[350px] sm:w-[400px] md:w-[500px] py-10 rounded-xl bg-green-700 bg-opacity-70">

          <form className="flex flex-col items-center justify-center space-y-5" onSubmit={handleSubmit}>
            <h3 className="text-white">Get To Know More About PSASP</h3>

            <div className="flex flex-col items-start space-y-2 w-[300px] sm:w-[350px] md:w-[450px]">
              <label htmlFor="name" className="text-white">Your Name</label>
              <input className="px-2 sm:px-5 py-1 sm:py-2 w-[300px] sm:w-[350px] md:w-[450px] text-black text-md rounded-lg sm:rounded-xl outline-0 placeholder-gray-400 placeholder:italic placeholder:text-sm"
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your name"
              />
            </div>

            <div className="flex flex-col items-start space-y-2 w-[300px] sm:w-[350px] md:w-[450px]">
              <label htmlFor="course" className="text-white">Course</label>
              <select className="px-2 sm:px-5 py-1 sm:py-2 w-[300px] sm:w-[350px] md:w-[450px] text-black text-md rounded-lg sm:rounded-xl outline-0 placeholder-gray-400 placeholder:italic placeholder:text-sm"
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

            <div className="flex flex-col items-start space-y-2 w-[300px] sm:w-[350px] md:w-[450px]">
              <label htmlFor="class" className="text-white">Class</label>
              <select className="px-2 sm:px-5 py-1 sm:py-2 w-[300px] sm:w-[350px] md:w-[450px] text-black text-md rounded-lg sm:rounded-xl outline-0 placeholder-gray-400 placeholder:italic placeholder:text-sm"
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

            <div className="flex flex-col items-start space-y-2 w-[300px] sm:w-[350px] md:w-[450px]">
              <label htmlFor="mobile" className="text-white">Mobile Number</label>
              <div className="flex w-[450px]">
                <input className="px-2 sm:px-5 py-1 sm:py-2 w-[200px] sm:w-[250px] md:w-[300px] text-black text-md rounded-l sm:rounded-tl-xl sm:rounded-bl-xl outline-0 placeholder-gray-400 placeholder:italic placeholder:text-sm"
                  type="tel"
                  id="mobile"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  placeholder="Enter your number"
                />
                <button
                  type="button"
                  className="w-[100px] sm:w-[100px] md:w-[150px] text-white bg-black bg-opacity-40 rounded-tr-md rounded-br-md sm:rounded-tr-xl sm:rounded-br-xl hover:bg-opacity-30"
                  onClick={handleVerifyOTP}>
                  Verify OTP
                </button>
              </div>
            </div>

            <div className="flex flex-col items-start space-y-2 w-[300px] sm:w-[350px] md:w-[450px]">
              <label htmlFor="email" className="text-white">Email Address</label>
              <input className="px-2 sm:px-5 py-1 sm:py-2 w-[300px] sm:w-[350px] md:w-[450px] text-black text-md rounded-lg sm:rounded-xl outline-0 placeholder-gray-400 placeholder:italic placeholder:text-sm"
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email"
              />
            </div>

            <button type="submit" style={{ color: 'black', fontWeight: '500', backgroundColor: 'rgba(39, 193, 89, 1)', padding: '8px 15px', borderRadius: '7px' }}>Submit</button>

            <p className="underline">
              <a
                href="https://www.google.com/maps/dir/25.7163414,85.0592406/Bazar+Samiti,+Saketpuri,+main+gate,+Patna,+Bihar+800016/@25.6002908,85.1073058,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x39ed59a053f710e7:0x884cb78d62517ab6!2m2!1d85.1773461!2d25.6003075?entry=ttu"
                target="_blank"
                rel="noopener noreferrer" className="text-gray-300  hover:text-green-200">
                Or visit us at Bazar Samiti, Saketpuri, main gate, Patna, Bihar
                800016{" "}
              </a>
            </p>
          </form>

        </div>
      </div>
      
    </div>
  );
};

export default BannerForm;
