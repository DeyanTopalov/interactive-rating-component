const Button = ({ text }) => {
  return (
    <div className="mt-6 flex cursor-pointer justify-center rounded-full bg-clr-orange  text-clr-pure-white transition duration-150 ease-in-out hover:bg-clr-pure-white hover:text-clr-orange">
      <button
        type="submit"
        className="h-full w-full py-3 text-sm font-bold uppercase md:text-[15px]"
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
