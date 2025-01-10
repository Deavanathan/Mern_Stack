import React, { useReducer } from "react";

// Reducer function to handle mood changes
const moodReducer = (currentMood, action) => {
  switch (action.type) {
    case "HAPPY":
      return "😁 I'm feeling Happy!";
    case "SAD":
      return "😢 I'm feeling Sad...";
    case "ANGRY":
      return "😡 I'm Angry right now!";
    case "CONFUSED":
      return "🤔 Umm, I'm Confused!";
    case "PARTY":
      return "🎉 Woohoo! It's Party Time!";
    default:
      return currentMood; // Return the same mood if the action isn't recognized
  }
};

export default function Demo() {
  // Initialize useReducer
  const [mood, dispatch] = useReducer(moodReducer, "😊 Hello! What's my mood?");

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>{mood}</h1>
      <button onClick={() => dispatch({ type: "HAPPY" })}>Make me Happy</button>
      <button onClick={() => dispatch({ type: "SAD" })}>Make me Sad</button>
      <button onClick={() => dispatch({ type: "ANGRY" })}>Make me Angry</button>
      <button onClick={() => dispatch({ type: "CONFUSED" })}>Confuse me</button>
      <button onClick={() => dispatch({ type: "PARTY" })}>Party Mode!</button>
    </div>
  );
}
