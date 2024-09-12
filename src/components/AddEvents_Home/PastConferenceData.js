import React from 'react';

// Data component for paragraphs
const PastConferenceData = ({ selected, onSelect }) => {
  // Define paragraphs for each link
  const paragraphs = {
    stripe2024: "",

    stripe2023: "This is the paragraph for Stripe 2023.",

    stripe: "This is the paragraph for Stripe.",

    stripe2021: "This is the paragraph for Stripe 2021."
  };

  return (
    <div className="past-conference-content-box">
      {selected && <p>{paragraphs[selected]}</p>}
    </div>
  );
};

export default PastConferenceData;
