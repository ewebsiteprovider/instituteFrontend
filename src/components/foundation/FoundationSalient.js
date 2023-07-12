import SalientFeaturesCard from "./SalientFeaturesCard";
import Groups3Icon from '@mui/icons-material/Groups3';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import SaveAsIcon from '@mui/icons-material/SaveAs';
import SchoolIcon from '@mui/icons-material/School';

function FoundationSalient() {
  return (
    <div className="pt-10 pb-8 bg-yellow-200 bg-opacity-80">
      <div className="text-2xl md:text-[30px] font-bold pb-5">Salient Features</div>
      <div className="p-5  rounded-xl grid grid-cols-1 sm:grid-col-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">

        <SalientFeaturesCard logo={<Groups3Icon sx={{ fontSize: '60px' }} />} heading="Regular PTMs (Parents-Teacher Meetings)" title="PTMs is a short meeting or conference between the parents and teachers of students to discuss a child's progress  and find solutions to academic or behavioral problems." />

        <SalientFeaturesCard logo={<SaveAsIcon sx={{ fontSize: '60px' }} />} heading="Assessment" title="Regular skill based tests and board type papers as per latest blueprints of STATE/CBSE/ICSE." />

        <SalientFeaturesCard logo={<AutoStoriesIcon sx={{ fontSize: '60px' }} />} heading="Course Content" title="Focused and concise course materials developed by some of the most experienced professionals in the field of competitive training." />

        <SalientFeaturesCard logo={<SchoolIcon sx={{ fontSize: '60px' }} />} heading="Class frequency-6 days a week" title="We conduct classes from Monday to Saturday. TImings are form 8:00 AM to 1:15 PM." />

      </div>
    </div>
  );
}

export default FoundationSalient;
