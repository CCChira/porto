import React, { useRef, useEffect, useState } from 'react';
import Button from '../atoms/Button';
import {
  auth,
  githubLoginProvider,
  facebookLoginProvider,
  googleLoginProvider,
} from '../../firebase/firebaseConfig';
import { useDispatch, useSelector } from 'react-redux';
import {
  setActiveUser,
  setUserLogout,
  selectUserEmail,
  selectUserName,
} from '../../store/slices/userSlice';
import { signInWithPopup } from 'firebase/auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGoogle,
  faFacebook,
  faGithubAlt,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
type Props = {};

const LoginForm: React.FC<Props> = ({}) => {
  const [formType, setFormType] = useState('login');
  const emailRef = useRef<HTMLInputElement>(null);
  const passRef = useRef<HTMLInputElement>(null);
  const confirmPassRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  const userEmail = useSelector(selectUserEmail);
  const handleSignInWithSocial = async (
    provider:
      | typeof googleLoginProvider
      | typeof githubLoginProvider
      | typeof facebookLoginProvider
  ) => {
    try {
      const res = await signInWithPopup(auth, provider);
      dispatch(
        setActiveUser({
          userName: res.user.displayName,
          userEmail: res.user.email,
        })
      );
    } catch (error) {
      console.log(error);
    }
  };
  const handleSignUp = async () => {};
  const handleSignIn = async () => {
    // const email = emailRef.current?.value;
    // const password = emailRef.current?.value;
    // try {
    //   const res = await emailPassLoginProvider(email, password);
    //   dispatch(
    //     setActiveUser({
    //       userName: res.user.displayName,
    //       userEmail: res.user.email,
    //     })
    //   );
    // } catch (error) {
    //   console.log(error);
    // }
  };
  const switchFormType = () => {
    formType === 'login' ? setFormType('signup') : setFormType('login');
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center transition duration-300 ease-in-out">
        <input
          ref={nameRef}
          type="text"
          placeholder="Username"
          className={`mx-5 my-2 w-full rounded-full border-2 border-transparent p-2 px-4 placeholder-primary shadow-md outline-none transition ease-in-out focus:border-primary  ${
            formType === 'login' ? 'hidden' : 'block'
          }`}
        />
        <input
          ref={emailRef}
          type="Email"
          placeholder="Email"
          className="w-full p-2 px-4 mx-5 my-2 transition ease-in-out border-2 border-transparent rounded-full shadow-md outline-none placeholder-primary focus:border-primary"
        />
        <input
          ref={passRef}
          type="password"
          placeholder="Password"
          className="w-full p-2 px-4 mx-5 my-2 transition ease-in-out border-2 border-transparent rounded-full shadow-md outline-none placeholder-primary focus:border-primary"
        />
        <input
          ref={confirmPassRef}
          type="password"
          placeholder="Confirm Password"
          className={`mx-5 my-2 w-full rounded-full border-2 border-transparent p-2 px-4 placeholder-primary shadow-md outline-none transition ease-in-out focus:border-primary  ${
            formType === 'login' ? 'hidden' : 'block'
          }`}
        />

        <div className="flex flex-col w-full">
          <div className="flex items-center justify-center w-full mt-2">
            <Button
              type="primary"
              onClick={formType === 'login' ? handleSignIn : switchFormType}
              modifiers="mr-5 w-full"
            >
              Sign In
            </Button>
            <span className="text-primary">or</span>
            <Button
              type="primary"
              onClick={formType === 'login' ? switchFormType : handleSignUp}
              modifiers="ml-5 w-full"
            >
              Sign Up
            </Button>
          </div>

          <div className="flex flex-col items-center justify-around w-full mt-2">
            <span className="text-primary">Or authenticate with socials</span>
            <div className="flex items-center justify-center w-full gap-4 mt-2">
              <FontAwesomeIcon
                icon={faGoogle}
                className="text-xl transition duration-300 ease-in-out text-primary hover:cursor-pointer hover:text-primary-light"
                onClick={() => handleSignInWithSocial(googleLoginProvider)}
              />
              <FontAwesomeIcon
                icon={faFacebook}
                className="text-xl transition duration-300 ease-in-out text-primary hover:cursor-pointer hover:text-primary-light"
                onClick={() => handleSignInWithSocial(facebookLoginProvider)}
              />
              <FontAwesomeIcon
                icon={faGithubAlt}
                className="text-xl transition duration-300 ease-in-out text-primary hover:cursor-pointer hover:text-primary-light"
                onClick={() => handleSignInWithSocial(githubLoginProvider)}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
