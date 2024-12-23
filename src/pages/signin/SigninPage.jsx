import React from "react";
import SigninSection from "../../components/signin/SigninSection";
import LeftSection from "../../components/signin/LeftSection";

const SigninPage = () => {
  return (
    <div>
      <div className="grid xl:grid-cols-2 grid-cols-1 h-screen">
        <LeftSection />
        <SigninSection />
      </div>
    </div>
  );
};

export default SigninPage;
