import Star from "./star";
import Form from "./form";

const RatingsCard = () => {
  return (
    <div className=" max-w-[327px] rounded-[15px] bg-gradient-to-b from-[#181E27] via-[#232A34] to-[#232A34] px-6 pb-8 pt-6 md:max-w-[412px] md:rounded-[30px] md:px-8 md:pt-8">
      <Star />
      <h2
        className="mb-2.5 text-2xl font-bold text-clr-pure-white
       md:mb-[7px] md:text-[1.75rem]"
      >
        How did we do?
      </h2>

      <p className="mb-6 text-sm font-normal text-clr-light-gray md:text-[15px] ">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <Form />
    </div>
  );
};

export default RatingsCard;
