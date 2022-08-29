import { useDispatch, useSelector } from 'react-redux';
import {
  setActiveUser,
  setUserLogout,
  selectUserEmail,
  selectUserName,
} from '../../store/slices/userSlice';
import React, { useState, useEffect } from "react";
import {auth, facebookLoginProvider, githubLoginProvider, googleLoginProvider} from '../../firebase/firebaseConfig';
import {User} from '../../store/slices/userSlice';
import { emailValidator, passwordValidator } from '../validators/authValidators';
import { signInWithEmailAndPassword } from 'firebase/auth';
const useLogin = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState(<User>{});
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    dispatch(setActiveUser(user));
  }, [user]);
  const handleLoginEmailPass = async (email: string, password: string) => { 
    if(!emailValidator(email)) {
      setErr(true);
      return;
    }
    if(!passwordValidator(password)) {
      setErr(true);
      return;
    }
    setErr(false);
    setLoading(false);
    try {
      const result = await(signInWithEmailAndPassword(auth, email, password));
      console.log(result);
      if(!result) throw new Error('Something went wrong');
      setUser({
        userEmail: result.user.email,
        userName: result.user.displayName,
      });
      setLoading(false);
    } catch (error) {
      setErr(true);
      setLoading(false);
    }

    
  }
  return {handleLoginEmailPass, err, loading};
}
export default useLogin;