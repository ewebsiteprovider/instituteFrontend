import BatchCard from "./BatchCard";
import Footer from "../footer";

function HomePage() {
  const jeeBatchDetails = [
    {
      name: "JEE Mega Nurture Batch",
      class: "Class 11th Students",
      duration: "Batch Date - 21 Jun 2023",
      target: "Target Year - 2025",
    },
    {
      name: "JEE Mega Nurture Batch",
      class: "Class 11th Students",
      duration: "Batch Date - 21 Jun 2023",
      target: "Target Year - 2025",
    },
    {
      name: "JEE Mega Nurture Batch",
      class: "Class 11th Students",
      duration: "Batch Date - 21 Jun 2023",
      target: "Target Year - 2025",
    },
  ];

  return (
    <div className="h-[calc(100%_-_60px)] overflow-auto">
      <div className="bg-[rgba(45,0,0,1)] h-[100%] py-5 ">
        <div className="flex justify-evenly h-[100%] min-h-[500px] items-center">
          <div className="text-white">
            <div className="text-6xl font-bold leading-[70px]">
              <div>
                <span className="text-yellow-300">Motion</span> Hai To
              </div>
              <div>
                <span className="text-yellow-300">Bharosa</span> Hai
              </div>
            </div>
            <div className="text-2xl pt-[80px] font-bold">
              JEE (Main + Advanced) | NEET | NTSE | Boards | Olympiads
            </div>
          </div>
          <img
            src="https://motion.ac.in/storage/uploads/banner/1678948512815731.png"
            alt=""
          />
        </div>
      </div>

      <div className="flex flex-col items-center py-16">
        <div className="text-3xl font-bold text-red-700">
          Best Selection Ratio
        </div>
        <div className="text-lg py-5">
          Motion results reflect the passion, hard work and efforts of our
          students, so far, we have acquired remarkable selection ratios in
          competitive exams.
        </div>
        <img
          src="https://motion.ac.in/storage/uploads/banner/1669785977699141.jpg"
          alt=""
          className="w-[800px]"
        />
      </div>

      <div className="flex flex-col items-center">
        <div className="text-3xl font-bold text-red-700">
          Learn from Kota's Best & Most Experienced Faculties
        </div>
        <div className="text-lg py-5  w-[1300px] text-center">
          Every student is our top priority. To provide the best education we
          have various Classroom Courses available in Kota for JEE, NEET &
          Foundation. These courses include a thorough learning process
          targeting school as well as competitive exams
        </div>
        <div className="flex items-center">
          <div className="px-5 py-2 border-2 rounded-xl mx-2 bg-red-700 text-white">
            JEE
          </div>
          <div className="px-5 py-2 border-2 rounded-xl mx-2">NEET</div>
          <div className="px-5 py-2 border-2 rounded-xl mx-2">Foundation</div>
          <div className="px-5 py-2 border-2 rounded-xl mx-2">MyBizKid</div>
        </div>

        <div className="py-10 grid grid-cols-3 w-[100%] px-[16px] gap-[16px]">
          {jeeBatchDetails.map((ele, index) => (
            <BatchCard props={ele} key={index} />
          ))}
        </div>
      </div>

      <img
        src="https://motion.ac.in/storage/uploads/banner/1677222215360073.jpg"
        alt=""
        className="w-full pt-20"
      />

      <div className="flex flex-col items-center py-16">
        <div className="text-3xl font-bold text-red-700">
          Performance Booster Courses
        </div>
        <div className="text-lg py-5">
          For long-term success, stay up to date on short-term courses. Find out
          what new initiatives will help you all perform better on exams as
          well.
        </div>
      </div>

      <div className="grid grid-cols-3 w-[100%] px-[16px] gap-[16px]">
        {jeeBatchDetails.map((ele, index) => (
          <BatchCard props={ele} key={index} />
        ))}
      </div>

      <div className="flex flex-col items-center py-16">
        <div className="text-3xl font-bold text-red-700">
          Latest Announcements
        </div>
        <div className="text-sm py-5">
          Get the latest update regarding JEE, NEET, NTSE, CBSE & Olympiad Exams
          and stay ahead with all-round performance in your chosen stream
        </div>
        <div className="flex items-center justify-center">
          <div className="px-3 py-2 mx-1 border-2 bg-red-700 text-white rounded-xl">
            New Courses & Announcement
          </div>
          <div className="px-3 py-2 mx-1 border-2 hover:text-white hover:bg-red-700 duration-300 rounded-xl">
            Previous Year Ques. & Answer
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <div className="border-2 px-5 py-3 mx-2 rounded-xl hover:bg-red-700 hover:text-white duration-100">
          <div className="font-bold">NEET Prayas Batch</div>
          <div className="py-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In,
            voluptates?
          </div>
        </div>
        <div className="border-2 px-5 py-3 mx-2 rounded-xl hover:bg-red-700 hover:text-white duration-100">
          <div className="font-bold">NEET Prayas Batch</div>
          <div className="py-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In,
            voluptates?
          </div>
        </div>
        <div className="border-2 px-5 py-3 mx-2 rounded-xl hover:bg-red-700 hover:text-white duration-100">
          <div className="font-bold">NEET Prayas Batch</div>
          <div className="py-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In,
            voluptates?
          </div>
        </div>
      </div>

      <div className="p-5 my-10 bg-[rgba(45,0,0,1)] flex justify-evenly">
        <div className="text-white">
          <div className=" font-bold text-3xl leading-[70px]">
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
          src="https://motion.ac.in/website/images/image_Curious.png"
          alt=""
          className="w-[700px]"
        />
      </div>

      <div className="flex flex-col items-center py-16">
        <div className="text-3xl font-bold text-red-700">
          Our Latest Sessions Will Motivate You!!
        </div>
        <div className="text-lg py-5">
          Motion ensures to provide quality education for the optimum results
          and success of students, so far, we have acquired remarkable selection
          ratios in competitive exams.
        </div>
      </div>

      <div className="grid grid-cols-3 w-[100%] px-[16px] gap-[16px]">
        {jeeBatchDetails.map((ele, index) => (
          <BatchCard props={ele} key={index} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
