"use client";
import React from "react";

function Header() {
  return (
    <div>
      <video
        src="https://www.dropbox.com/scl/fi/5ho9ph3qgknhbumrm4r1f/Final-Comp_5-1.mp4?rlkey=8a3fp07moq2ujbg8r8agmn3va&st=3ep5agc7&raw=1"
        autoPlay
        loop
        muted
        playsInline
        style={{ width: "100vw", height: "auto", objectFit: "cover" }}
      />
    </div>
  );
}

export default Header;
