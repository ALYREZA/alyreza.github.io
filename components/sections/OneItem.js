const OneItem = ({ label, description }) => {
  return (
    <div className="flex w-11/12 m-auto flex-wrap h-64 items-center justify-center my-8">
      <div className="w-2/5 h-full text-4xl pl-8">{label}</div>
      <div className="w-3/5 h-full text-xl pt-4">{description}</div>
    </div>
  );
};

OneItem.defaultProps = {
  label: "sample",
  description: "sample description"
};

export default OneItem;
