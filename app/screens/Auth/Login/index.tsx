import auth from '@react-native-firebase/auth';
import firestore, {
  FirebaseFirestoreTypes
} from '@react-native-firebase/firestore';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import NextButton from '../../../components/buttons/NextButton';
import TextFormInput from '../../../components/FormInputs/TextI';
import NavigationLinkComponent from '../../../components/navigationLink';
import { setProfileUser } from '../../../redux/actions/postProfile';
import styles from './styles';

// interface LoginScreenProps {
//   curInput: any;
//   setCurInput: React.Dispatch<React.SetStateAction<string | undefined>>;
// }

const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const onChangeInputHandler = (
    propertyName: string,
    propertyValue: string
  ) => {
    if (propertyName === 'email') {
      setEmail(propertyValue);
    } else if (propertyName === 'password') {
      setPassword(propertyValue);
    }
    console.log(email, password);
  };
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <View style={styles.createAccountView}>
          <NavigationLinkComponent
            navigateTo="CreateAccount"
            textColor="mediumvioletred"
            linkText="Create Account"
          />
        </View>
        <View style={styles.headerView}>
          <Text style={styles.headerText}>Log In</Text>
        </View>
        <View style={styles.contentView}>
          <View>
            <TextFormInput
              labelText="Email Address"
              placeholderText="enter your email"
              propertyName="email"
              onChangeHandler={onChangeInputHandler}
              inputValue={email}
            />
          </View>
          <View>
            <TextFormInput
              labelText="Password"
              placeholderText="enter your password"
              propertyName="password"
              onChangeHandler={onChangeInputHandler}
              inputValue={password}
            />
          </View>
          <View style={styles.forgotContainer}>
            <NavigationLinkComponent
              navigateTo="Forgot Password"
              textColor="mediumvioletred"
              linkText="Forgot Password"
            />
          </View>
        </View>
        <View style={styles.loginBtn}>
          <NextButton
            buttonText="Login"
            onPressHandler={() => {
              console.log('login btn');
              // TODO  firebase login code
              auth()
                .signInWithEmailAndPassword(email, password)
                .then((userAuth) => {
                  console.log('User signed in!', userAuth.user.uid);
                  firestore()
                    .collection('Users')
                    .doc(userAuth.user?.uid)
                    .get()
                    .then(
                      (
                        firebaseUser: FirebaseFirestoreTypes.DocumentSnapshot<FirebaseFirestoreTypes.DocumentData>
                      ) => {
                        // @ts-ignore
                        // eslint-disable-next-line no-underscore-dangle
                        console.log('User got!', firebaseUser._data);
                        // @ts-ignore
                        // eslint-disable-next-line no-underscore-dangle
                        const loginUser = firebaseUser._data;
                        dispatch(
                          setProfileUser({
                            uid: loginUser.uid,
                            name: loginUser.name,
                            email: loginUser.email,
                            phone: loginUser.phone,
                            birthday: loginUser.birthday,
                            pictures: loginUser.pictures,
                            isSignedUp: loginUser.isSignedUp
                          })
                        );
                      }
                    );
                })
                .catch((error) => {
                  if (error.code === 'auth/invalid-email') {
                    console.log('That email address is invalid!');
                  }
                  if (error.code === 'auth/email-already-in-use') {
                    console.log('Email & password combination is incorrect!');
                  }
                  console.error(error);
                });
            }}
            isDisabled={false}
          />
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
