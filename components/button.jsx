const Button = ({ text }) => {
  return (
    <div className="mt-6 grid place-content-center rounded-full bg-clr-orange py-3 text-clr-pure-white transition duration-150 ease-in-out hover:bg-clr-pure-white hover:text-clr-orange">
      <button
        type="submit"
        className="text-sm font-bold uppercase md:text-[15px]"
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
