import React from "react";

function TeamMember({
  name,
  role,
  photo,
  primaryColor,
  textColor,
  subtextColor,
  backgroundColor,
  shadowColor,
}) {
  return (
    <div
      className="team-member"
      style={{
        backgroundColor: backgroundColor,
        boxShadow: `0 4px 8px ${shadowColor}`,
        borderRadius: "12px",
        overflow: "hidden",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        textAlign: "center",
      }}
    >
      <div
        className="member-photo"
        style={{
          borderColor: primaryColor,
          transition: "border-color 0.3s ease",
        }}
      >
        <img src={photo} alt={name} loading="lazy" />
      </div>
      <h3 style={{ color: textColor, fontSize: "1.25rem", fontWeight: 500, marginTop: "1rem" }}>
        {name}
      </h3>
      <p style={{ color: subtextColor, fontSize: "1rem", marginTop: "0.5rem" }}>
        {role}
      </p>
    </div>
  );
}

export default TeamMember;