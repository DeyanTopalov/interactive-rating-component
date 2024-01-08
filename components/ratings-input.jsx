const RatingsInput = ({ id, value, label, onChange, isSelected }) => {
  const selectedStyle = `bg-[--orange] text-white`;
  const unselectedStyle = `bg-[--dark-blue] text-[--medium-gray]`;

  return (
    <label
      htmlFor={id}
      className={`w-[2.625rem] md:w-[3.1875rem] h-[2.625rem] md:h-[3.1875rem] rounded-full flex items-center justify-center cursor-pointer  font-bold ${
        isSelected
          ? "bg-[--orange] text-white"
          : "bg-[--dark-blue] text-[--medium-gray]"
      }
      } `}
    >
      <input
        type="radio"
        name="rating"
        id={id}
        value={value}
        onChange={onChange}
        className="appearance-none hidden"
        checked={isSelected}
      />
      {label}
    </label>
  );
};

export default RatingsInput;
