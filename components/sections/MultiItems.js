const Item = ({ label, description }) => (
  <div className="flex w-11/12 m-auto flex-wrap h-64 items-center justify-center my-8">
    <div className="w-2/5 h-full text-base pl-8">
      <h1 className="text-base bg-indigo-300">{label}</h1>
      <h2 className="text-base">{label.toUpperCase()}</h2>
    </div>
    <div className="w-3/5 h-full text-base">
      <h1 className="text-3xl bg-blue-500">{description}</h1>
      <h2 className="text-xl text-gray-600">{label}</h2>
      <h3>{description}</h3>
    </div>
  </div>
);

const MultiItems = ({ label, description }) => {
  return (
    <>
      <div className="flex w-11/12 m-auto flex-wrap">
        <div className="w-2/5 h-full text-4xl pl-8">{label}</div>
      </div>
      <Item label={label} description={description} />
    </>
  );
};

MultiItems.defaultProps = {
  label: "sample",
  description: "sample description"
};

export default MultiItems;
