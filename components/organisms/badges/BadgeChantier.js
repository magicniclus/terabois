import React from "react";

const BadgeChantier = () => {
  return (
    <div className="absolute -top-16 -right-5 bg-white rounded-full shadow-xl p-6">
      <h2 className="text-3xl font-bold tracking-tight text-blue text-center">
        +3000
      </h2>
      <p className="text-lg font-semibold tracking-tight text-gray-600 text-center">
        Chantiers <br /> réalisés
      </p>
    </div>
  );
};

export default BadgeChantier;
