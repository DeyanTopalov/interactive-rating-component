"use client";
import RatingsInput from "./ratings-input";
import { useState } from "react";

const Form = () => {
  const [selected, setSelected] = useState(null);
  const handleRatingChange = (event) => {
    setSelected(Number(event.target.value));
  };

  const genarateRatingInputs = () => {
    const ratings = [1, 2, 3, 4, 5];

    return ratings.map((rating) => {
      return (
        <RatingsInput
          key={rating}
          id={rating}
          value={rating}
          label={rating.toString()}
          onChange={handleRatingChange}
          isSelected={rating === selected}
        />
      );
    });
  };

  return (
    <form>
      <fieldset>
        <legend className="sr-only">Please select a rating</legend>
        <div className="flex justify-between">{genarateRatingInputs()}</div>
      </fieldset>
    </form>
  );
};

export default Form;
