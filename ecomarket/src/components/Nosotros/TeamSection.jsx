import React from "react";
import TeamMember from "./TeamMember";
import { useTheme } from "../context/ThemeContext";
import "./TeamSection.css";

import angie from "../../assets/team/angie.jpg";
import cristobal from "../../assets/team/cristobal.jpg";
import daniela from "../../assets/team/daniela.jpg";
import gabriel from "../../assets/team/gabriel.jpg";
import nicolas from "../../assets/team/nicolas.jpg";

const teamMembers = [
  {
    id: 1,
    name: "Angie Hinojosa",
    role: "Desarrolladora Full Stack",
    photo: angie,
  },
  {
    id: 2,
    name: "Cristobal Gavilan",
    role: "Desarrollador Full Stack",
    photo: cristobal,
  },
  {
    id: 3,
    name: "Daniela Somadevilla",
    role: "Desarrolladora Full Stack",
    photo: daniela,
  },
  {
    id: 4,
    name: "Gabriel Navarro",
    role: "Desarrollador Full Stack",
    photo: gabriel,
  },
  {
    id: 5,
    name: "Nicolas Briones",
    role: "Desarrollador Full Stack",
    photo: nicolas,
  },
];

function TeamSection() {
  const { colors } = useTheme();

  return (
    <section className="team-section">
      <h2>Conoce a Nuestro Equipo</h2>

      <div className="team-grid">
        {teamMembers.map((member) => (
          <TeamMember
            key={member.id}
            name={member.name}
            role={member.role}
            photo={member.photo}
            primaryColor={colors.primary}
            textColor={colors.text}
            subtextColor={colors.subtext}
            backgroundColor={colors.background}
            shadowColor={colors.shadow}
          />
        ))}
      </div>
    </section>
  );
}

export default TeamSection;