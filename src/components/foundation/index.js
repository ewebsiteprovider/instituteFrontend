import Footer from "../footer";
import FoundationSalient from "./FoundationSalient";
import FoundationTable from "./FoundationTable";

function Foundation() {
  return (
    <div className="h-[calc(100vh_-_60px)] overflow-auto text-center">
      <div className="bg-[rgb(253,_224,_71,_0.3)] min-h-full flex flex-col items-center justify-center">
        <div className="h-full w-full">
          <div className="py-14 font-bold text-2xl  tracking-wider">
            PATNA SCIENCE ACADEMY PROGRAM DETAILS
          </div>

          <div className="flex items-center justify-center">
            <div className="mx-2 p-4 bg-white text-black rounded-xl">
              <div className="p-2 text-sm">Batch Date</div>
              <div className="font-bold w-[150px] p-3 text-sm">
                5th April, 2023
              </div>
            </div>
            <div className="mx-2 p-4 bg-white text-black rounded-xl">
              <div className="p-2 text-sm">Eligibility</div>
              <div className="font-bold w-[150px] p-3 text-sm">
                Minimum qualification class 10th
              </div>
            </div>
            <div className="mx-2 p-4 bg-white text-black rounded-xl">
              <div className="p-2 text-sm">Mode</div>
              <div className="font-bold w-[150px] p-3 text-sm">
                Offline 2023-24
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-20 pt-14 pb-12">
        <div className="text-xl font-bold text-red-800 pb-5">
          WHAT CAN BE A BETTER STEP THAN A WELL-PLANNED EARLY START!
        </div>
        <div className="text-md leading-6">
          Patna Science Academy prepares students for various competitive
          examinations for classes 11th & 12th. We focus on developing
          intelligence quotient (IQ), mathematical aptitude, scientific
          approach, logical thinking, reasoning skills & problem-solving skills
          through classroom programs. Our comprehensive approach ensures that
          students of class 11th to 12th achieve success in their school exams,
          Boards, JEE, NEET, POLYTECHNIQUE & PARAMEDICAL.
        </div>
      </div>

      <div className="pt-10 pb-8 bg-[rgb(253,_224,_71,_0.3)]">
        <FoundationSalient />
      </div>

      <div className="pt-10">
        <FoundationTable />
      </div>

      <div className="p-12 bg-[rgb(253,_224,_71,_0.3)]">
        <div className="">
          <div className="text-2xl  font-bold">OUR CENTER</div>
          <div className="flex items-center justify-center p-4 ">
            <div className="mx-2 rounded-xl overflow-hidden shadow-[0_0_60px_-26px_rgba(255,255,255,1)]">
              <div>
                <img
                  src="https://t4.ftcdn.net/jpg/02/81/89/73/360_F_281897358_3rj9ZBSZHo5s0L1ug7uuIHadSxh9Cc75.jpg"
                  alt=""
                />
              </div>
              <div className="bg-white">
                <div className="py-5 font-bold text-lg">
                  Patna Science Academy
                </div>
                <div className="pb-10 text-[15px]">
                  Near Girja Apartment, Bazaar Samiti, Saketpuri, Patna-16
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Foundation;
