import "./jee.css";
import Footer from "../components/footer";
import SchoolIcon from "@mui/icons-material/School";
import BarChartIcon from "@mui/icons-material/BarChart";
import PrintIcon from "@mui/icons-material/Print";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import QuizIcon from "@mui/icons-material/Quiz";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import LottieAnimation from '../components/LottieAnimation'

export default function JeeApp() {
  return (
    <section className="main-section">
      <div className="bg-[rgb(253,_224,_71,_0.3)] h-[100%] py-5 ">
        <div className="flex justify-evenly h-[100%] items-center">
          <div className="">
            <div className="text-4xl font-bold leading-[70px]">
              <div>
                <span className="text-yellow-300">Patna Science Academy</span>{" "}
                Hai To
              </div>
              <div>
                <span className="text-yellow-300">Bharosa</span> Hai
              </div>
            </div>
            <div className="text-2xl pt-[80px] font-bold">
              JEE (Main + Advanced) | NEET | NTSE | Boards | Olympiads
            </div>
          </div>
          <LottieAnimation animationUrl="https://assets3.lottiefiles.com/packages/lf20_rbowzham.json" />
        </div>
      </div>
      <div className="container">
        <h2>JEE (Main+Advanced)-2025</h2>
        <p>
          WE ensures to provide quality education for the optimum results and
          success of students, so far, we have acquired remarkable selection
          ratios in competitive exams.
        </p>
      </div>
      <div className="section-parts">
        <div className="select">
          <a href="#course-highlights">
            <button>Course Description</button>
          </a>
          <a href="#planner">
            <button>Planner</button>
          </a>
          <a href="#fees-structure">
            <button>Fees Structure</button>
          </a>
          {/* <a href="#">
            <button>Teaching Methodologies</button>
          </a>
          <a href="#">
            <button>Results & Testimonials</button>
          </a> */}
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
      <div className="planner" id="planner">
        <div>
          <h4>Planner</h4>
        </div>
        <div className="planner-list">
          <SchoolIcon sx={{ color: "#fff" }} />
          <p>
            <span>590+</span> Online & Offline classes (Physics 170+, Chemistry
            170+ & Mathematics 220+) with Lecture of 90 Minute Each.
          </p>
        </div>
        <div className="planner-list">
          <QuestionAnswerIcon sx={{ color: "#fff" }} />
          <p>
            <span>8000+ </span> of Questions Solve Online & Offline Mode.
          </p>
        </div>
        <div className="planner-list">
          <QuizIcon sx={{ color: "#fff" }} />
          <p>
            <span>20+</span> Test Papers Will Conduct for Practice.
          </p>
        </div>
        <div className="planner-list">
          <LocalLibraryIcon sx={{ color: "#fff" }} />
          <p>
            <span>Free Acess of Learning App </span>which contain Live class &
            Recorded Video Lectures, Video Solutions, PYQ'S & Others Support.
          </p>
        </div>
        <div className="button">
          <button>Enroll Now</button>
          <button>
            <img src="assets/planner/download-pdf.png" alt="pdf" />
            Planner
          </button>
        </div>
      </div>
      <div className="fees-structure" id="fees-structure">
        <h2>Course Fee for 11th class- Targeting JEE 2025</h2>
        <h5>Available in classroom & Online (Live Mode)</h5>
        <div className="fees-type">
          <div className="type">
            <span>Live Online Program</span>
            <p>
              Study from the comfort of your home and attend the best{" "}
              <span>ONLINE COURSE</span>
            </p>
            <h2>
              Fee: <span>₹ 35,000</span>
            </h2>
            <button>Pay Now</button>
          </div>
          <div className="type">
            <span>classroom Program</span>
            <p>
              <span>classROOM</span> Mode is available for student who wants to
              study in offline center
            </p>
            <h2>
              Fee: <span>₹ 45,000</span>
            </h2>
            <button>Pay Now</button>
          </div>
        </div>
        <div className="news">
          <h4>Upcoming Batch Dates</h4>
          <h3>21st June 2023</h3>
        </div>
      </div>
      <Footer />
    </section>
  );
}
