"use client";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";

const RatingsModal = ({ onClose, rating }) => {
  useEffect(() => {
    const handleOutsideClick = (event) => {
      // Close the modal if the click is outside the modal content
      if (!document.getElementById("modal-content").contains(event.target)) {
        onClose();
      }
    };

    // Add the event listener
    document.addEventListener("click", handleOutsideClick);

    // Remove the event listener when the component is unmounted
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [onClose]);

  return createPortal(
    <dialog
      id="modal-content"
      role="dialog"
      open={true}
      className="modal fixed inset-0 max-w-[327px]  rounded-[15px] bg-gradient-to-b from-[#181E27] via-[#232A34] to-[#232A34] px-6 py-[34px] text-center md:max-w-[412px] md:rounded-[30px] md:px-8 md:py-[45px]"
    >
      <div className="modal-content grid place-content-center">
        <div className="mb-6 flex justify-center md:mb-8">
          <Image
            src="/illustration-thank-you.svg"
            width={144}
            height={96}
            className="block md:hidden"
            alt="Thank you illustration"
          />
          <Image
            src="/illustration-thank-you.svg"
            width={162}
            height={108}
            className="hidden md:block"
            alt="Thank you illustration"
          />
        </div>
        <div className="mb-7 rounded-full bg-clr-dark-blue px-3 py-1 md:mb-8 md:px-5">
          <p className="text-sm font-normal text-clr-orange md:text-[15px]">
            You selected {rating} out of 5
          </p>
        </div>

        <h2 className="mb-4 text-2xl font-bold text-clr-pure-white md:mb-3.5 md:text-[28px]">
          Thank you!
        </h2>
        <p className="text-sm font-normal text-clr-light-gray md:text-[15px]">
          We appreciate you taking the time to give a rating. If you ever need
          more support, don't hesitate to get in touch!
        </p>
      </div>
    </dialog>,
    document.body,
  );
};

export default RatingsModal;
