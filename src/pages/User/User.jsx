import React from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const { name } = useParams();
  return (
    <div className="bg-orange-500 text-black text-3xl text-center">
      User: {name}
    </div>
  );
};

export default User;
