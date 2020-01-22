import Header from "../components/sections/Header";
import Details from "../components/sections/Details";
import OneItem from "../components/sections/OneItem";
import MultiItems from "../components/sections/MultiItems";

const Resume = () => {
  return (
    <>
      <h1 className="text-lg text-gray-500"> this is resume of mine </h1>
      <div className="flex flex-wrap justify-center">
        <div className="w-9/12 rounded-sm min-h-screen bg-white shadow-2xl p-6 mb-64">
          <Header />
          <Details />
          <OneItem />
          <OneItem label={"shoma"} description={"somthing"} />
          <MultiItems />
        </div>
      </div>
    </>
  );
};

export default Resume;
