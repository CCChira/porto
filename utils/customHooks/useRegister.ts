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
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
const useRegister = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState(<User>{});
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    dispatch(setActiveUser(user));
  }, [user]);
  const handleSignup = async (email: string | undefined, password: string | undefined, userName: string | undefined) => { 

    setErr(false);
    setLoading(false);
    try {
      const result = await(createUserWithEmailAndPassword(auth, email ? email: '', password ? password : ''));
      console.log(result);
      if(!result) throw new Error('Something went wrong');
      setUser({
        userEmail: result.user.email,
        userName: userName ? userName : '',
      });
      setLoading(false);
    } catch (error) {
      setErr(true);
      setLoading(false);
    }

    
  }
  return { handleSignup, err, loading };
}
export default useRegister;