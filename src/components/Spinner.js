import React from "react";

const Spinner = () => {
  return (
    <div className="text-center">
      <svg
        className="spinner-border"
        style={{
          width: "25px",
          height: "auto",
          color: "#343a40",
          marginTop: "310px",
        }}
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          stroke-width="4"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8v8a8 8 0 01-16 0z"
        />
      </svg>
      <p style={{ marginBottom: "310px" }}>Loading...</p>
    </div>
  );
};

export default Spinner;
