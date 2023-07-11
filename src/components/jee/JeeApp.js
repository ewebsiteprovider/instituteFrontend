import "./jee.css";
import SchoolIcon from "@mui/icons-material/School";
import BarChartIcon from "@mui/icons-material/BarChart";
import PrintIcon from "@mui/icons-material/Print";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import QuizIcon from "@mui/icons-material/Quiz";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import LottieAnimation from "../LottieAnimation";
import Footer from "../footer";

export default function JeeApp() {

  return (
    <section className="main-section bg-yellow-200 bg-opacity-80">

      <div className="h-[100%] py-5" style={{
        backgroundImage: `url('https://cache.careers360.mobi/media/article_images/2022/1/4/CAT-2021-cutoff-bulls-eye.jpg')`,
        backgroundPosition: 'bottom ',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
      }} >
        <div className="w-screen min-h-max lg:h-screen flex flex-col xl:flex-row items-center justify-evenly space-y-6 md:space-y-36 xl:space-y-0 md:space-x-5 p-4 bg-yellow-00 bg-opacity-90">
          <div className="mt-20 xl:mt-0">

            <div className="text-[30px] sm:text-[40px] md:text-[53px] font-bold sm:leading-[70px] text-black">

              <div>
                <span className="text-[red]">Rank</span> Chahiye ??
              </div>
              <div>
                <span className="text-[red]">Patna Science Academy</span> Aaiye
              </div>

            </div>

            <div className="text-[15px] sm:text-[20px] md:text-[27px] py-10 xl:pt-[80px] font-bold text-black">
              JEE (Main + Advanced) | NEET | Boards
            </div>

          </div>
        </div>

        {/* <LottieAnimation animationUrl="https://assets3.lottiefiles.com/packages/lf20_rbowzham.json" /> */}

      </div>

      <div className="text-center py-5 mt-5">
        <h2 className="text-[20px] md:text-[40px] xl:text-[40px] font-bold">JEE (Main+Advanced)-2025</h2>
        <p className="text-[15px] sm:text-lg py-5">
          WE ensures to provide quality education for the optimum results and
          success of students, so far, we have acquired remarkable selection
          ratios in competitive exams.
        </p>
      </div>

      <div className="section-parts">
        <div className="flex items-center justify-evenly py-5">
          <a href="#course-highlights">
            <div className="p-3 text-xl bg-[red] bg-opacity-80 rounded-xl text-white font-bold hover:bg-red-600 duration-200">Course Description</div>
          </a>
          <a href="#planner">
            <div className="p-3 text-xl bg-[red] bg-opacity-80 rounded-xl text-white font-bold hover:bg-red-600 duration-200">Planner</div>
          </a>
          <a href="#fees-structure">
            <div className="p-3 text-xl bg-[red] bg-opacity-80 rounded-xl text-white font-bold hover:bg-red-600 duration-200">Fees Structure</div>
          </a>
        </div>

        <div className="display" id="course-highlights">
          <h3>Course Description of JEE (Main + Advanced)</h3>
          <p>
            Patna Science Academy has long been distinguished for providing the
            Best class room Coaching, Online Learning Facility and getting
            excellent results. The curriculum is specifically designed for the
            JEE 2025 aspirants along with their 11th preparations. To strengthen
            the foundation, conceptual knowledge and enhance the academic skills
            this course is the best option. The course helps the aspirants with
            better understanding of the examination pattern and ensure their
            success in the JEE with ease through a year-long curriculum.
          </p>
          <h3>Course Hightlights</h3>
          <div className="highlights">
            <div className="types">
              <div className="type">
                <SchoolIcon sx={{ color: "#1f3f65" }} />
                <p>
                  Structured Academic Planner for JEE 2025 & Also get Support
                  for 12th Board Preparation
                </p>
              </div>
              <div className="type">
                <HeadphonesIcon sx={{ color: "#1f3f65" }} />
                <p>Complete Syllabus Coverage of class 11th.</p>
              </div>
              <div className="type">
                <BarChartIcon sx={{ color: "#1f3f65" }} />
                <p>Printed Study Material & Daily Practice Sheets.</p>
              </div>
            </div>
            <div className="types">
              <div className="type">
                <PrintIcon sx={{ color: "#1f3f65" }} />
                <p>
                  Free Access to Motion Learning App for conceptual revision of
                  Syllabus.
                </p>
              </div>
              <div className="type">
                <SettingsApplicationsIcon sx={{ color: "#1f3f65" }} />
                <p>One on One doubt solving support & Regular Test facility.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="my-[50px] mx-[180px] p-[20px] bg-red-600 text-white flex flex-col justify-evenly items-center rounded-xl" id="planner">
        <div className="text-[40px] font-bold p-[10px]">
          <h4>Planner</h4>
        </div>
        <div className="my-[4px] w-[880px] h-[100px] rounded-md flex items-center">
          <SchoolIcon sx={{ color: "#fff" }} />
          <p className="text-[22px] text-white p-[8px] pl-[12px] leading-8">
            <span className="text-[22px] text-yellow-300">590+</span> Online & Offline classes (Physics 170+, Chemistry
            170+ & Mathematics 220+) with Lecture of 90 Minute Each.
          </p>
        </div>
        <div className="my-[4px] w-[880px] h-[100px] rounded-md flex items-center">
          <QuestionAnswerIcon sx={{ color: "#fff" }} />
          <p className="text-[22px] text-white p-[8px] pl-[12px] leading-8">
            <span>8000+ </span> of Questions Solve Online & Offline Mode.
          </p>
        </div>
        <div className="my-[4px] w-[880px] h-[100px] rounded-md flex items-center">
          <QuizIcon sx={{ color: "#fff" }} />
          <p className="text-[22px] text-white p-[8px] pl-[12px] leading-8">
            <span className="text-[22px] text-yellow-300">20+</span> Test Papers Will Conduct for Practice.
          </p>
        </div>
        <div className="my-[4px] w-[880px] h-[100px] rounded-md flex items-center">
          <LocalLibraryIcon sx={{ color: "#fff" }} />
          <p className="text-[22px] text-white p-[8px] pl-[12px] leading-8">
            <span className="text-[22px] text-yellow-300">Free Acess of Learning App </span>which contain Live class &
            Recorded Video Lectures, Video Solutions, PYQ'S & Others Support.
          </p>
        </div>
        <div className="flex justify-evenly items-center w-[820px] h-[100px]">
          <button className="p-[10px] bg-yellow-300 text-red-600 rounded-xl text-[18px] font-bold w-[140px] h-[50px] flex justify-evenly items-center cursor-pointer hover:bg-yellow-400 duration-200">Enroll Now</button>
          <button className="p-[10px] bg-yellow-300 text-red-600 rounded-xl text-[18px] font-bold w-[140px] h-[50px] flex justify-evenly items-center cursor-pointer hover:bg-yellow-400 duration-200">
            <img src="assets/planner/download-pdf.png" alt="pdf" />
            Planner
          </button>
        </div>
      </div>

      <div className="my-[20px] mx-[80px] p-[20px] flex flex-col items-center justify-evenly rounded-xl " id="fees-structure">

        <h2 className="p-[20px] text-[20px] md:text-[40px] xl:text-[40px] font-bold">Course Fee for 11th class- Targeting JEE 2025</h2>
        <h5 className="pb-[10px] text-[15px] sm:text-lg">Available in classroom & Online (Live Mode)</h5>

        <div className="p-[20px] flex items-center justify-evenly w-[1200px] h-[400px]">
          <div className="flex flex-col items-center justify-evenly rounded-xl py-[10px] px-[20px] w-[500px] h-[300px] bg-white shadow-xl">
            <span className="bg-red-600 text-white text-[20px] items-start rounded-md p-[10px] left-0">Live Online Program</span>
            <p className="text-black text-[20px] font-[600] px-[20px] leading-7 text-center">
              Study from the comfort of your home and attend the best{" "}
              <span className="uppercase ">ONLINE COURSE</span>
            </p>
            <h2>
              Fee: <span>₹ 35,000</span>
            </h2>
            <button className="w-auto h-auto py-[10px] px-[20px] text-[15px] bg-yellow-300 text-red-600 font-bold rounded-xl cursor-pointer hover:bg-yellow-400 duration-200 ">Pay Now</button>
          </div>

          <div className="flex flex-col items-center justify-evenly rounded-xl py-[10px] px-[20px] w-[500px] h-[300px] bg-white shadow-xl">
            <span className="bg-red-600 text-white text-[20px] items-start rounded-md p-[10px] left-0">classroom Program</span>
            <p className="text-black text-[20px] font-[600] px-[20px] leading-7 text-center">
              <span className="uppercase ">classROOM</span> Mode is available for student who wants to
              study in offline center
            </p>
            <h2>
              Fee: <span>₹ 45,000</span>
            </h2>
            <button className="w-auto h-auto py-[10px] px-[20px] text-[15px] bg-yellow-300 text-red-600 font-bold rounded-xl cursor-pointer hover:bg-yellow-400 duration-200 ">Pay Now</button>
          </div>
        </div>

        <div className="flex flex-row justify-evenly items-center py-[10px] px-[20px] w-[80%] mb-[30px] ">
          <h4>Upcoming Batch Dates</h4>
          <h3 className="py-[10px] px-[20px] text-[12px] bg-red-500 text-white rounded-xl ">21st June 2023</h3>
        </div>
      </div>

      <Footer />
    </section>
  );
}
