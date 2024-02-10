import { FaStar } from "react-icons/fa";

const ReviewCard = ({ doctor }) => {
  return (
    <div className="review_list">
      <div className="stars">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </div>
      <div className="title">
        <p>
          “Good Experience With DoctorRajesh Rohomot” - <span>9 hour ago</span>
        </p>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipiscing elit ultrices, pretium
        sociosqu himenaeos a est et quam
      </p>
    </div>
  );
};

export default ReviewCard;
