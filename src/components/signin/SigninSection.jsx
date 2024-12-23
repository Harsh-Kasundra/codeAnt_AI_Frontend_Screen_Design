import React, { useState } from "react";
import LoginButton from "./LoginButton";

const SigninSection = () => {
  const [value, setValue] = useState(false);
  const toggleValue = () => {
    setValue((prev) => !prev);
  };
  return (
    <div className="bg-[#FAFAFA] flex flex-col justify-center items-center p-6">
      <div className="bg-[#ffffff] w-[408px] h-[582px]  sm:w-[627px] sm:h-[602px] rounded-xl border border-1 border-[#E9EAEB]">
        <div className="py-9 px-6 border-b border-[#D5D7DA] flex flex-col items-center ">
          <div className="flex items-center gap-3">
            <img src="/assets/logo.png" alt="CodeAnt AI Logo" />
            <div className="text-[#181d27] text-3xl font-normal font-satoshi">
              CodeAnt AI
            </div>
          </div>
          <div className="text-[#181d27] sm:text-3xl text-2xl font-semibold mt-9 mb-5">
            Welcome to CodeAnt AI
          </div>
          <div className=" sm:h-[60px] sm:w-[570px] h-[52px] w-[376px]flex items-center justify-center border border-1 border-[#E9EAEB] bg-[#FAFAFA] rounded-lg hover:cursor-pointer">
            <div className="flex w-full">
              {!value && (
                <>
                  <div className=" sm:w-[287px] sm:h-[60px] w-[159px] h-[52px] rounded-lg flex justify-center items-center bg-[#1570EF] text-white text-xl font-semibold">
                    SAAS
                  </div>
                  <div
                    className="sm:w-[287px] sm:h-[60px] w-[159px] h-[52px] rounded-lg flex justify-center items-center text-xl font-medium text-[#414651]"
                    onClick={toggleValue}
                  >
                    Self Hosted
                  </div>
                </>
              )}
            </div>
            <div className="flex w-full">
              {value && (
                <>
                  <div
                    className="sm:w-[287px] sm:h-[60px] w-[159px] h-[52px] rounded-lg flex justify-center items-center text-xl font-semibold text-[#414651]"
                    onClick={toggleValue}
                  >
                    SAAS
                  </div>
                  <div className="sm:w-[287px] sm:h-[60px] w-[159px] h-[52px] rounded-lg flex justify-center items-center bg-[#1570EF] text-white text-xl font-medium">
                    Self Hosted
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
        {!value && (
          <div className="flex flex-col items-center py-6">
            <LoginButton
              text={"Sign in with Github"}
              img={"/assets/image1.png"}
            />
            <LoginButton
              text={"Sign in with Bitbucket"}
              img={"/assets/image2.png"}
            />
            <LoginButton
              text={"Sign in with Azure Devops"}
              img={"/assets/image.png"}
            />
            <LoginButton
              text={"Sign in with GitLab"}
              img={"/assets/image3.png"}
            />
          </div>
        )}
        {value && (
          <div className="flex flex-col items-center py-6">
            <LoginButton
              text={"Self Hosted GitLab"}
              img={"/assets/image3.png"}
            />
            <LoginButton text={"Sign in with SSO"} img={"/assets/Icon.png"} />
          </div>
        )}
      </div>
      <div className="text-base font-light mt-8">
        By signing up you agree to the{" "}
        <span className="font-bold hover:cursor-pointer">Privacy Policy.</span>
      </div>
    </div>
  );
};

export default SigninSection;
