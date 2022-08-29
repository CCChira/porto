import { useDispatch, useSelector } from 'react-redux';
import {
  setActiveUser,
  setUserLogout,
  selectUserEmail,
  selectUserName,
} from '../../store/slices/userSlice';
import React, { useState, useEffect } from "react";
import { GithubAuthProvider, GoogleAuthProvider, FacebookAuthProvider, signInWithPopup } from "firebase/auth";
import {auth, facebookLoginProvider, githubLoginProvider, googleLoginProvider} from '../../firebase/firebaseConfig';
import {User} from '../../store/slices/userSlice';
const useSocialsAuth = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState(<User>{});
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    dispatch(setActiveUser(user));
  }, [user]);
  const handleLogin = async (provider: string) => { 
    const authProvider = provider === 'google' ? googleLoginProvider : 'facebook' ? facebookLoginProvider : githubLoginProvider;
    setErr(false);
    setLoading(true);
    try {
      const result = await signInWithPopup(auth, authProvider);
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
  return {handleLogin, err, loading};
}
export default useSocialsAuth;