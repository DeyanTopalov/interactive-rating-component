import { createPortal } from "react-dom";

const RatingsModal = ({ onClose, rating }) => {
  return createPortal(
    <div className="modal">
      <div className="modal-content">
        <h2>Thank you for your rating!</h2>
        <p>You have rated this product {rating} out of 5.</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>,
    document.body,
  );
};

export default RatingsModal;
