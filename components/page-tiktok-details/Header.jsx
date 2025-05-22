"use client";
import React from "react";

function Header() {
  return (
    <div>
      <video
        src="https://www.dropbox.com/scl/fi/wdk6cy3c9sl6i8rho3hn5/Final-Comp.mp4?rlkey=atjxt60murhv72v34unmhoowr&st=uxzrje15&raw=1"
        autoPlay
        loop
        muted
        playsInline
        style={{ width: "100vw", height: "45vw", objectFit: "cover" }}
      />
    </div>
  );
}

export default Header;
