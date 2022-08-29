import React, { useRef, useEffect, useState } from 'react';
import Button from '../atoms/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGoogle,
  faFacebook,
  faGithubAlt,
} from '@fortawesome/free-brands-svg-icons';
import {
  emailValidator,
  passwordValidator,
} from '../../utils/validators/authValidators';
import useSocialsAuth from '../../utils/customHooks/useSocialsAuth';
import useLogin from '../../utils/customHooks/useLogin';
import useRegister from '../../utils/customHooks/useRegister';
import { useRouter } from 'next/router';
import Input from '../atoms/Input';
type Props = {
  path?: string;
};

const LoginForm: React.FC<Props> = ({ path }) => {
  const [correctEmail, setCorrectEmail] = useState(true);
  const [correctPassword, setCorrectPassword] = useState(true);
  const [correctConfirmPass, setCorrectConfirmPass] = useState(true);
  const [formType, setFormType] = useState('login');

  const emailRef = useRef<HTMLInputElement>(null);
  const passRef = useRef<HTMLInputElement>(null);
  const confirmPassRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);

  const { handleLogin } = useSocialsAuth();
  const { handleLoginEmailPass } = useLogin();
  const { handleSignup } = useRegister();
  const router = useRouter();
  const handleSignInWithSocial = (provider: string) => {
    handleLogin(provider).then((res) => router.push('/' + path));
  };
  const handleRegister = async () => {
    const email = emailRef.current?.value;
    const password = passRef.current?.value;
    const cPassword = confirmPassRef.current?.value;
    const userName = nameRef.current?.value;
    if (password !== cPassword) {
      if (!(email && password)) {
        if (!emailValidator(email)) {
          setCorrectEmail(false);
          if (!passwordValidator(password)) {
            setCorrectPassword(false);
          }
          return;
        } else if (!passwordValidator(password)) {
          setCorrectPassword(false);
          return;
        }
      }
      setCorrectConfirmPass(false);
      return;
    }
    handleSignup(email, password, userName).then((res) =>
      router.push('/' + path)
    );
  };
  const handleSignIn = async () => {
    const email = emailRef.current?.value;
    const password = passRef.current?.value;
    if (email && password) {
      if (!emailValidator(email)) {
        setCorrectEmail(false);
        if (!passwordValidator(password)) {
          setCorrectPassword(false);
        }
        return;
      } else if (!passwordValidator(password)) {
        setCorrectPassword(false);
        return;
      }
      handleLoginEmailPass(email, password).then((res) =>
        router.push('/' + path)
      );
      setCorrectPassword(true);
      setCorrectEmail(false);
    }
  };
  const handleAction = (action: string, modifier?: string) => {
    switch (action) {
      case 'login':
        handleSignIn();
        break;
      case 'socials':
        handleSignInWithSocial(modifier ? modifier : '');
        break;
      case 'register':
        handleRegister();
        break;
      default:
        break;
    }
  };
  const switchFormType = () => {
    formType === 'login' ? setFormType('signup') : setFormType('login');
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center transition duration-300 ease-in-out">
        <Input
          reff={nameRef}
          type="text"
          placeholder="Username"
          modifiers={`${formType === 'login' ? 'hidden' : 'block'}`}
        />
        <Input
          reff={emailRef}
          type="email"
          placeholder="Email"
          modifiers={`${correctEmail ? '' : 'border-red-500'}`}
        />
        <Input
          reff={passRef}
          type="password"
          placeholder="Password"
          modifiers={`${correctPassword ? '' : 'border-red-500'}`}
        />
        <Input
          reff={confirmPassRef}
          type="password"
          placeholder="Confirm Password"
          modifiers={`${formType === 'login' ? 'hidden' : 'block'} ${
            correctConfirmPass ? '' : 'border-red-500'
          }`}
        />
        <div className="flex flex-col w-full">
          <div className="flex items-center justify-center w-full mt-2">
            <Button
              type="primary"
              onClick={
                formType === 'login'
                  ? () => handleAction('login')
                  : switchFormType
              }
              modifiers="mr-5 w-full"
            >
              Sign In
            </Button>
            <span className="text-primary">or</span>
            <Button
              type="primary"
              onClick={
                formType === 'login'
                  ? switchFormType
                  : () => handleAction('register')
              }
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
                onClick={() => handleAction('socials', 'google')}
              />
              <FontAwesomeIcon
                icon={faFacebook}
                className="text-xl transition duration-300 ease-in-out text-primary hover:cursor-pointer hover:text-primary-light"
                onClick={() => handleAction('socials', 'facebook')}
              />
              <FontAwesomeIcon
                icon={faGithubAlt}
                className="text-xl transition duration-300 ease-in-out text-primary hover:cursor-pointer hover:text-primary-light"
                onClick={() => handleAction('socials', 'github')}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
