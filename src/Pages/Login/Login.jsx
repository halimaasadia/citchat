import React, {useState} from 'react';
import login from '../../assets/login.png';
import google from '../../assets/google.png';
import { FcGoogle } from 'react-icons/fc';

const Login = () => {
  const [email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [emailerr, setEmailerr] = useState('');
  const [passworderr, setPassworderr] = useState('');
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setEmailerr('');
  }
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setPassworderr('');
  }
  const handleSubmit = () => {
    if (!email) {
      setEmailerr("email is required");
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setEmailerr("email is invalid");
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
  }

  return (
    <div className="flex">
      <div className="w-1/2 flex justify-end">
        <div className="mt-[225px] mr-[69px]">
          <h1 className="text-[#03014C] font-Open Sans ">
            Login to your account!
          </h1>
          <div className="flex">
          <FcGoogle />
            <h2 className="text-[#03014C] font-open sans text-sm font-semibold ml-[9.77px]"> Login with  </h2>

          </div>

          <div className="relative mt-[60px] w-96">
            <input
              type="email"
              onChange={handleEmail}
              className="w-full py-[26px] px-[50px] border-b border-[#11175D] outline-none"
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
        <div className="w-1/2">
           <img className="w-full h-screen object-cover" src={login} alt="" />
        </div>
      </div>
      </div>
      </div>  
  )
  }
export default Login;
