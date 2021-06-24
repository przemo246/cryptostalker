import { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import { firebaseApp } from '../firebase.config';

export const UserLoginDetails = () => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    return firebase.auth().onAuthStateChanged(setToken);
  }, []);

  useEffect(() => {
    if (token === null) {
      setUser(null);
      return;
    }
    return firebase
      .firestore()
      .collection('users')
      .doc(token.uid)
      .onSnapshot((doc) => {
        setUser({ uid: token.uid, ...doc.data() });
      });
  }, [token]);

  return user;
};
