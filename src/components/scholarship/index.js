// import "./scholar.css";
import Footer from "../footer";
import img1 from "./images/most-test1.png";
import img2 from "./images/most-test2.png";
import img3 from "./images/most-test3.png";
import star from "./images/star-icon.png";
import finance from "./images/finance-leaders-rafiki.png";
import customer from "./images/customer-survey-amico.png";
import target from "./images/target-amico.png";
import BannerForm from "./Banner";

export default function Scholarship() {
  return (
    <div className="h-[calc(100%_-_60px)] text-center bg-yellow-200 bg-opacity-80 overflow-x-hidden">

      <BannerForm />

      <div className="">
        <h1 className="pt-16 pb-7 text-[40px] font-bold">PSA Open Scholarship Test</h1>

        <div className="flex flex-wrap justify-center">

          <div className="p-[16px] m-[16px] w-[40%] rounded-[12px] border h-[250px] bg-white drop-shadow-lg">

            <img src={img1} alt="" className="w-[100%]" />

            <p className="leading-[24px] mt-[24px]">
              Take the test at a date and time of your choice.
              <br />
              Timings : <b>9 AM to 9 PM Daily</b> | Duration : <b>1 Hr</b>
              <br />
              Mode :<b>Online (From Anywhere)</b>
            </p>
          </div>

          <div className="p-[16px] m-[16px] w-[40%] rounded-[12px] border h-[250px] bg-white drop-shadow-lg">
            <img src={img2} alt="" className="w-[100%]" />
            <p className="leading-[24px] mt-[24px]">
              <b> JEE, NEET, Olympiad & Board</b> classroom <br /> Courses
            </p>
          </div>

          <div className="p-[16px] m-[16px] w-[40%] rounded-[12px] border h-[250px] bg-white drop-shadow-lg">
            <img src={img3} alt="" className="w-[100%]" />
            <p className="leading-[24px] mt-[24px]">
              className <b>6th to 12th & 12th Pass</b> out Students
              <br /> Registration Fee : ₹ 100
            </p>
          </div>

        </div>

        <div className="px-[180px]">

          <h1 className="text-xl font-bold my-5">Why should you choose MOST?</h1>

          <div className="grid grid-cols-3 gap-[32px]">

            <div className="crd">
              <img src={star} alt="" />
              <img src={target} alt="" />
              <p>
                The objective of MOST is to encourage students in developing their
                study skills and embracing individual strengths. We conduct this
                test for both online and offline batches in order to provide equal
                possibilities. As a result, every student benefits from this test
                and is eligible to receive the award.
              </p>
            </div>

            <div className="crd">
              <img src={star} alt="" />
              <img src={finance} alt="" />
              <p>
                MOST is a program to provide financial aid to the students
                aspiring for JEE, NEET or Foundation Exam through Motion
                Education. It is a great opportunity for students who have been
                exempted from getting privileges based on any other criteria.
              </p>
            </div>

            <div className="crd">
              <img src={star} alt="" />
              <img src={customer} alt="" />
              <p>
                MOST enables students to assess their performance and gain
                first-hand experience. To do this, we create a paper format that
                mirrors the final test as well as a national ranking. Through this
                procedure, students gain more self-assurance, analytical
                abilities, and improve performance in future.
              </p>
            </div>

          </div>

        </div>

        <div className="h-[50px]"></div>
        
      </div>

      <Footer />

    </div>
  );
}
