import React from "react";

function Map() {
  return (
    <div className="google-map">
      <iframe
        id="gmap_canvas"
        width="100%"
        height="450"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1429.8955035107379!2d10.59548187347998!3d35.83896214465623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd8a5fddb29dbb%3A0x7d47baa72181ea5d!2sRHQW%2BGMX%2C%20Sousse!5e1!3m2!1sfr!2stn!4v1747841737597!5m2!1sfr!2stn"
      />
    </div>
  );
}

export default Map;
