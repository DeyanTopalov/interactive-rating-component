const RatingsInput = ({
  id,
  value,
  label,
  onChange,
  isSelected,
  previousSelected,
}) => {
  return (
    <label
      htmlFor={id}
      className={`flex h-[2.625rem] w-[2.625rem] cursor-pointer items-center justify-center rounded-full font-bold md:h-[3.1875rem]  md:w-[3.1875rem] ${
        isSelected
          ? "text-clr-white bg-clr-orange"
          : previousSelected
            ? "bg-clr-medium-gray text-clr-pure-white"
            : "bg-clr-dark-blue text-clr-medium-gray hover:bg-clr-medium-gray hover:text-clr-pure-white"
      } 
      } `}
    >
      <input
        type="radio"
        name="rating"
        id={id}
        value={value}
        onChange={onChange}
        className="hidden appearance-none"
        checked={isSelected}
      />
      {label}
    </label>
  );
};

export default RatingsInput;
