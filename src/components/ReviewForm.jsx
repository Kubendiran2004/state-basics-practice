import { useState } from "react";

const ReviewForm = () => {
  const [name, setName] = useState("");
  const [rating, setRating] = useState("");
  const [comment, setComment] = useState("");
  const [reviews, setReviews] = useState([]);

  const submitReview = (e) => {
    e.preventDefault();

    const newReview = { name, rating, comment };
    setReviews((prev) => [...prev, newReview]);

    setName("");
    setRating("");
    setComment("");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Institute Review Form</h1>

      <form
        onSubmit={submitReview}
        style={{
          width: "280px",
          padding: "20px",
          border: "1px solid grey",
          borderRadius: "10px",
        }}
      >
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
          required
        />

        <label>Rating (1–5):</label>
        <input
          type="number"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
          min="1"
          max="5"
          required
        />

        <label>Comment:</label>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          style={{ width: "100%", padding: "8px" }}
          required
        ></textarea>

        <button
          style={{
            marginTop: "15px",
            padding: "10px",
            background: "blue",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Submit Review
        </button>
      </form>

      <h2 style={{ marginTop: "30px" }}>All Reviews:</h2>
      {reviews.map((r, i) => (
        <div
          key={i}
          style={{
            border: "1px solid black",
            padding: "10px",
            borderRadius: "8px",
            width: "350px",
            marginTop: "10px",
          }}
        >
          <h3>{r.name}</h3>
          <p>⭐ Rating: {r.rating}</p>
          <p>{r.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default ReviewForm;
