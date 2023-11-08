import React, { useState } from "react";
import registration from "../../assets/registration.png";

const Registration = () => {
  const [email, setEmail] = useState("");
  const [fullName, setfullName] = useState("");
  const [Password, setPassword] = useState("");

  const [emailerr, setEmailerr] = useState("");
  const [fullNameerr, setfullNameerr] = useState("");
  const [passworderr, setPassworderr] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setEmailerr("");
  };
  const handlefullName = (e) => {
    setfullName(e.target.value);
    setfullNameerr("");
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setPassworderr("");
  };

  const handleSubmit = () => {
    if (!email) {
      setEmailerr("email is required");
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setEmailerr("email is invalid");
    }
    if (!fullName) {
      setfullNameerr("fullName is required");
    }

    if (!Password) {
      setPassworderr("password is required");
    } else if (!/(?=.*[a-z])/.test(Password)) {
      setPassworderr("at least 1 lowercase alphabetical character");
    } else if (!/(?=.*[A-Z])/.test(Password)) {
      setPassworderr("at least 1 uppercase alphabetical character");
    } else if (!/(?=.*[0-9])/.test(Password)) {
      setPassworderr("at least 1 numeric character");
    } else if (!/(?=.*[!@#$%^&*])/.test(Password)) {
      setPassworderr("at least one special character");
    } else if (!/(?=.{8,})/.test(Password)) {
      setPassworderr("The string must be eight characters or longer");
    }
  };

  
  return (
    <div className="flex">
      <div className="w-1/2 flex justify-end">
        <div className="mt-[225px] mr-[69px]">
          <h1 className="font-nunito font-bold text-[34px] text-[#11175D] mb-[13px]">
            Get started with easily register
          </h1>
          <p className="font-nunito text-[20px] text-[#808080] mr-[247px]">
            Free register and you can enjoy it
          </p>
          <div className="relative mt-[60px] w-96">
            <input
              type="email"
              onChange={handleEmail}
              className="w-full py-[26px] px-[50px] border-2 border-[#11175D] rounded-lg"
            />
            <p className="absolute top-[-8px] left-[32px] font-nunito semibold text-[13px] tracking-[1px] px-[18px] bg-white">
              Email Address
            </p>
            {emailerr && (
              <p className="font-nunito text-[16px] bg-red-500 text-white pt-1 rounded mt-1">
                {emailerr}
              </p>
            )}
          </div>
          <div className="relative mt-[60px] w-96">
            <input
              type="Fullname"
              onChange={handlefullName}
              className="w-full py-[26px] px-[50px] border-2 border-[#11175D] rounded-lg"
            />
            <p className="absolute top-[-8px] left-[32px] font-nunito semibold text-[13px] tracking-[1px] px-[18px] bg-white">
              Full name
            </p>
            {fullNameerr && (
              <p className="font-nunito text-[16px] bg-red-500 text-white pt-1 rounded mt-1">
                {fullNameerr}
              </p>
            )}
          </div>
          <div className="relative mt-[60px] w-96">
            <input
              type="password"
              onChange={handlePassword}
              className="w-full py-[26px] px-[50px] border-2 border-[#11175D] rounded-lg"
            />
            <p className="absolute top-[-8px] left-[32px] font-nunito semibold text-[13px] tracking-[1px] px-[18px] bg-white">
              Password
            </p>
            {passworderr && (
              <p className="font-nunito text-[16px] bg-red-500 text-white pt-1 rounded mt-1">
                {passworderr}
              </p>
            )}
          </div>
          <div className="mt-[50px]">
            <div className="bg-[#5F35F5] w-96 py-[20px] text-center rounded-full mt-[50px]">
              <button
                onClick={handleSubmit}
                className="font-nunito text-xl font-semibold text-white"
              >
                Sign up
              </button>
            </div>
            <div className="mt-[35px] ml-[75px] mr-[75px] mb-[117px]">
              <p className="font-sans text-[#03014C] font-normal text-[13px]">
                Already have an account ?{" "}
                <span className="text-[#EA6C00] font-sans font-bold text-[13px]">
                  Sign In
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/2">
        <img
          className="w-full h-screen object-cover"
          src={registration}
          alt=""
        />
      </div>
    </div>
  );
};

export default Registration;
