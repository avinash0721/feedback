import { useState } from "react";

const FeedbackItem = () => {
  const [rating, setRating] = useState(7);
  const [text, setText] = useState("feedback example comment");

  return (
    <div className="card">
      <div className="num-display">{rating}</div>
      <div className="text-display"> {text}</div>
    </div>
  );
};

export default FeedbackItem;
