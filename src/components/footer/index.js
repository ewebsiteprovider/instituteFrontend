import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import pattern from "./pattern.jpg";

function Footer() {
  return (
    <div
      className=" leading-10 mt-2"
      style={{
        backgroundImage: `url(${pattern})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
      }}>
      <div className="bg-[rgb(253,_224,_71,_0.7)] flex justify-center p-14 text-left">
        <div className="mx-10">
          <div className="font-bold text-xl">About Us</div>
          <div className="cursor-pointer text-sm my-4">Introduction</div>
          <div className="cursor-pointer text-sm my-4">About SK Sir</div>
        </div>

        <div className="mx-10">
          <div className="font-bold text-xl">About Exam</div>
          <div className="cursor-pointer text-sm my-4">
            <a href="https://jeemain.nta.nic.in/about-jeemain-2023/">
              JEE Mains
            </a>
          </div>
          <div className="cursor-pointer text-sm my-4">
            <a href="https://jeeadv.ac.in/">JEE Advance</a>
          </div>
          <div className="cursor-pointer text-sm my-4">
            <a href="https://neet.nta.nic.in/information-bulletin/">NEET</a>
          </div>
          <div className="cursor-pointer text-sm my-4">Registration form</div>
          <div className="cursor-pointer text-sm my-4">Admission Open</div>
        </div>

        <div className="mx-10">
          <div className="font-bold text-xl">Contact Us</div>
          <div className="cursor-pointer text-sm my-4">Contact Us</div>
          <div className="cursor-pointer text-sm my-4">Feedback</div>
        </div>

        <div className="mx-10">
          <div className="font-bold text-xl">Useful Links</div>
        </div>

        <div className="mx-10">
          <div className="font-bold text-xl">Corporate Office</div>
          <div className="text-sm my-4">
            <LocationOnIcon className="mr-1" />
            Near Girja Apartment, Bazaar Samiti, Saketpuri, Patna-16
          </div>
          <div className="text-sm my-4">
            <LocalPhoneIcon className="mr-1" />
            (+91) 7370884033 / (+91) 7370884066
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
