"use client";
import RatingsInput from "./ratings-input";
import Button from "./button";
import RatingsModal from "./ratings-modal";
import { useState } from "react";
import RatingError from "./ratingerror";

const Form = () => {
  const [selected, setSelected] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false); // Add state for tracking the error

  const handleRatingChange = (event) => {
    setSelected(Number(event.target.value));
    setError(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selected === null) {
      setError(true);
    } else {
      setShowModal(true); // Show the modal when the user clicks the submit button
      setSubmitted(true); // Set the submitted state to true
    }
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
          previousSelected={rating < selected}
        />
      );
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend className="sr-only">Please select a rating</legend>
        <div className="flex justify-between">{genarateRatingInputs()}</div>
      </fieldset>
      <Button text="Submit" className="flex" />
      {showModal && (
        <RatingsModal onClose={() => setShowModal(false)} rating={selected} />
      )}
      {error && <RatingError />}
    </form>
  );
};

export default Form;
