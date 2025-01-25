import React from "react";

function Page() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <h1 style={{ fontSize: 32 }}>
        <b>Hi, </b>
      </h1>
      <p style={{ fontSize: 24 }}>You've been registered for the Smash Raffle!</p>
      <p>
        <span>Be sure to follow us on Instagram </span>
        <a href="https://www.instagram.com/smashgolfplay/" target="_blank" rel="noreferrer">
          @smashgolfplay
        </a>
        <span>to hear when we announce the winner!</span>
      </p>
      <button
        style={{
          width: "fit-content",
          backgroundColor: "#3FA3FA",
          paddingBlock: 10,
          paddingInline: 20,
          color: "white",
          fontWeight: "bold",
        }}
      >
        Follow Us
      </button>
    </div>
  );
}

export default Page;
