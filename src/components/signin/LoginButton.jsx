import React from "react";
import { useNavigate } from "react-router-dom";

const LoginButton = ({ img, text }) => {
  const navigate = useNavigate();
  return (
    <div
      className="flex sm:w-[446px] w-[376px] py-4 justify-center items-center gap-4 border border-1 border-[#D8DAE5] rounded-lg mb-4 hover:cursor-pointer"
      onClick={() => {
        navigate("/dashboard");
      }}
    >
      <img src={img} alt="" />
      <div>{text}</div>
    </div>
  );
};

export default LoginButton;
