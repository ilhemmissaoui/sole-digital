import React from "react";

function Map() {
  return (
    <div
      className="google-maps"
      style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}
    >
      {/* Location 1: Sousse */}
      <iframe
        title="Sousse Office"
        width="100%"
        height="450"
        style={{ border: 0, flex: "1 1 45%" }}
        loading="lazy"
        allowFullScreen
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1429.8955035107379!2d10.59548187347998!3d35.83896214465623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd8a5fddb29dbb%3A0x7d47baa72181ea5d!2sRHQW%2BGMX%2C%20Sousse!5e1!3m2!1sfr!2stn!4v1747841737597!5m2!1sfr!2stn"
      />

      {/* Location 2: Mississauga */}
      <iframe
        title="Mississauga Office"
        width="100%"
        height="450"
        style={{ border: 0, flex: "1 1 45%" }}
        loading="lazy"
        allowFullScreen
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2646.476705063579!2d-79.72973526891491!3d43.53828367089082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b426d34dc55fd%3A0xd30f807b0d2e1b29!2s3465%20Platinum%20Dr%20%23208%2C%20Mississauga%2C%20ON%20L5M%202S1%2C%20Canada!5e1!3m2!1sfr!2stn!4v1747845224368!5m2!1sfr!2stn"
      />
    </div>
  );
}

export default Map;
