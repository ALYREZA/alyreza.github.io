const Detail = ({ label, description, options = {} }) => {
  return (
    <div className="flex flex-wrap w-3/5 justify-between m-auto">
      <div className={options["label"]}> {label} </div>
      <div className={options["description"]}> {description} </div>
    </div>
  );
};
Detail.defaultProps = {
  label: "label",
  description: "description",
  options: {
    label: "text-purple-300",
    description: "text-black"
  }
};

export default Detail;
