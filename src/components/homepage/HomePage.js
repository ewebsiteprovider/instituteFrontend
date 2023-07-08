import { Link } from 'react-router-dom';
import BatchCard from "./BatchCard";
import Footer from "../footer";
import LottieAnimation from "../LottieAnimation";

function HomePage() {
  const jeeBatchDetails = [
    {
      name: "Foundation Batch",
      class: "Class 11th Students",
      duration: "Batch Date - 21 Jun 2023",
      target: "Target Year - 2025",
      source: "https://img.jagranjosh.com/imported/images/E/Articles/IITJEE_foundation_course.jpg",
    },
    {
      name: "12th Batch",
      class: "Class 11th Students",
      duration: "Batch Date - 21 Jun 2023",
      target: "Target Year - 2025",
      source: "https://www.aimit.edu.in/wp-content/uploads/2022/11/aimit-i-year-it-students-foundation-classes-09.jpg",
    },
    {
      name: "JEE + NEET Batch",
      class: "Class 11th Students",
      duration: "Batch Date - 21 Jun 2023",
      target: "Target Year - 2025",
      source: "https://vishalinstitute.com/media/assets/images/portflio/4.jpg",
    },
  ];

  return (
    <div className="h-[calc(100%_-_60px)] w-screen overflow-x-hidden bg-yellow-200 bg-opacity-80">

      <div className="w-screen h-screen lg:h-screen bg-gradient-to-b from-yellow-500" styl={{
        backgroundImage: `url('https://static.vecteezy.com/system/resources/thumbnails/001/828/520/small/abstract-yellow-gradient-background-vector.jpg')`,
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}>

        <div className="w-screen min-h-max lg:h-screen flex flex-col xl:flex-row items-center justify-evenly md:space-x-5 p-4 bg-yellow-00 bg-opacity-90">
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

            <div className="space-x-5">
              <button className="p-3 text-xl bg-[red] bg-opacity-80 rounded-xl text-white font-bold"><Link to='/Scholarship'>Scholarship test</Link></button>
              <button className="p-3 text-xl bg-[red] bg-opacity-80 rounded-xl text-white font-bold"><Link to='/enquiry'>Enquiry Now</Link></button>
            </div>

          </div>

          <LottieAnimation animationUrl="https://assets5.lottiefiles.com/packages/lf20_1a8dx7zj.json" />
          
          {/* <LottieAnimation animationUrl="https://assets3.lottiefiles.com/packages/lf20_rbowzham.json" /> */}

        </div>

      </div>

      {/* <div className="flex flex-col items-center py-16 px-5">
        <div className="text-[30px] sm:text-3xl font-bold text-[red]-700">
          Best Selection Ratio
        </div>
        <div className="text-[15px] sm:text-lg pt-5 text-center">
          Patna Science Academy results reflect the passion, hard work and efforts of our
          students, so far, we have acquired remarkable selection ratios in
          competitive exams.
        </div>
      </div> */}

      <div className="px-5 flex flex-col items-center text-center">
        <div className="text-[30px] sm:text-3xl font-bold text-[red]-700">
          Learn from Patna's Best & Most Experienced Faculties
        </div>
        <div className="text-[15px] sm:text-lg py-5 w-[1300px text-center -mb-8">
          Every student is our top priority. To provide the best education we
          have various Classroom Courses available in Patna for JEE, NEET &
          Foundation. These courses include a thorough learning process
          targeting school as well as competitive exams
        </div>

        <div className="py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[100%] text-start px-[16px] gap-[16px]">
          {jeeBatchDetails.map((ele, index) => (
            <BatchCard props={ele} key={index} />
          ))}
        </div>
      </div>

      {/* <img
        src="https://Patna Science Academy.ac.in/storage/uploads/banner/1677222215360073.jpg"
        alt=""
        className="w-full pt-20"
      /> */}

      <div className="px-5 flex flex-col items-center pt-20 pb-10 text-center">
        <div className="text-[30px] sm:text-3xl font-bold text-[red]-700">
          Latest Announcements
        </div>
        <div className="text-[15px] sm:text-lg py-5">
          Get the latest update regarding JEE, NEET, NTSE, CBSE & Olympiad Exams
          and stay ahead with all-round performance in your chosen stream
        </div>
        <div className="flex items-center justify-center">
          <div className="px-3 py-2 mx-1 border-2 border-black bg-yellow-400 cursor-default rounded-xl">
            New Courses & Announcement
          </div>
          <div className="px-3 py-2 mx-1 border-2 border-black hover: hover:bg-yellow-400 cursor-default duration-300 rounded-xl">
            Previous Year Ques. & Answer
          </div>
        </div>
      </div>

      {/* <div className="flex items-center justify-center">
        <div className="border-2 px-5 py-3 mx-2 rounded-xl border-2 border-black hover:bg-yellow-400 hover:duration-100">
          <div className="font-bold">NEET Prayas Batch</div>
          <div className="py-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In,
            voluptates?
          </div>
        </div>
        <div className="border-2 px-5 py-3 mx-2 rounded-xl border-2 border-black hover:bg-yellow-400 hover:duration-100">
          <div className="font-bold">NEET Prayas Batch</div>
          <div className="py-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In,
            voluptates?
          </div>
        </div>
        <div className="border-2 px-5 py-3 mx-2 rounded-xl border-2 border-black hover:bg-yellow-400 hover:duration-100">
          <div className="font-bold">NEET Prayas Batch</div>
          <div className="py-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In,
            voluptates?
          </div>
        </div>
      </div> */}

      <div className="p-5 my-8 bg-yellow-300">
        <div className="px-5">
          <div className="font-bold text-[30px] sm:text-3xl md:leading-[70px]">
            Curious to know what makes us unique?
          </div>
          <div>
            <ul className="list-disc">
              <li className="leading-[60px] text-lg">
                16+ Year of legacy in JEE/NEET Coaching
              </li>
              <li className="leading-[60px] text-lg">
                16+ Year of legacy in JEE/NEET Coaching
              </li>
              <li className="leading-[60px] text-lg">
                16+ Year of legacy in JEE/NEET Coaching
              </li>
              <li className="leading-[60px] text-lg">
                16+ Year of legacy in JEE/NEET Coaching
              </li>
              <li className="leading-[60px] text-lg">
                16+ Year of legacy in JEE/NEET Coaching
              </li>
              <li className="leading-[60px] text-lg">
                16+ Year of legacy in JEE/NEET Coaching
              </li>
            </ul>
          </div>
        </div>
        <img
          src="https://Patna Science Academy.ac.in/website/images/image_Curious.png"
          alt=""
          className="w-[700px]"
        />
      </div>

      {/* <div className="px-5 flex flex-col items-center text-center py-14">
        <div className="text-[30px] sm:text-3xl font-bold text-[red]-700">
          Our Latest Sessions Will Motivate You!!
        </div>
        <div className="text-[15px] sm:text-lg py-5 -mb-14">
          Patna Science Academy ensures to provide quality education for the optimum results
          and success of students, so far, we have acquired remarkable selection
          ratios in competitive exams.
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[100%] text-start px-[16px] gap-[16px]">
        {jeeBatchDetails.map((ele, index) => (
          <BatchCard props={ele} key={index} />
        ))}
      </div> */}

      <div className="px-5 flex flex-col items-center py-16 text-center">
        <div className="text-[30px] sm:text-3xl font-bold text-[red]-700">
          Performance Booster Courses
        </div>
        <div className="text-[15px] sm:text-lg py-5 -mb-14">
          For long-term success, stay up to date on short-term courses. Find out
          what new initiatives will help you all perform better on exams as
          well.
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[100%] text-start px-[16px] gap-[16px]">
        {jeeBatchDetails.map((ele, index) => (
          <BatchCard props={ele} key={index} />
        ))}
      </div>

      <div className="h-[100px]"></div>

      <Footer />
    </div>
  );
}

export default HomePage;
