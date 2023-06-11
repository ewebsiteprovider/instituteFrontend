function BatchCard({ props }) {
  return (
    <div className="p-5 border-2 rounded-xl h-[500px]">
      <div className="w-full h-[290px] bg-red-200 rounded-xl"></div>
      <div className="py-2 text-lg font-bold">{props.name}</div>
      <div className="text-sm">{props.class}</div>
      <div className="text-sm">{props.duration}</div>
      <div className="text-sm">Target Year - {props.target}</div>
      <div className="px-2 py-2 mt-4 text-white bg-yellow-500 w-[120px] rounded-lg">
        Explore More
      </div>
    </div>
  );
}
export default BatchCard;
