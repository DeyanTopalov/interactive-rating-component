import Star from "./star";
import Form from "./form";

const RatingsCard = () => {
  return (
    <div className="max-w-[327px] md:max-w-[412px] h-[360px] md:h-[416px] px-6 md:px-8 pt-6 md:pt-8 pb-8 bg-gradient-to-b from-[#181E27] via-[#232A34] to-[#232A34] rounded-[15px] md:rounded-[30px]">
      <Star />
      <h2
        className="text-[--pure-white] text-2xl md:text-2.5xl font-bold
       mb-2.5 md:mb-[7px]"
      >
        How did we do?
      </h2>
      <p className="font-normal text-sm md:text-[15px] text-[--light-gray] mb-6 ">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <Form />
    </div>
  );
};

export default RatingsCard;

// bg-gradient-to-b from-[#181E27] via-[#232A34] to-[#232A34]
