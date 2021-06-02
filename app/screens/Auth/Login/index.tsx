import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import NextButton from '../../../components/buttons/NextButton';
import TextFormInput from '../../../components/FormInputs/TextI';
import NavigationLinkComponent from '../../../components/navigationLink';
import { setOwnerJobs } from '../../../redux/actions/job';
import { newUserAction } from '../../../redux/actions/user';
import { loginWithEmailAndPassword } from '../../../services/auth';
import { getUserOwnJob } from '../../../services/jobs';
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

  const onLoginHandler = async () => {
    console.log('login btn');
    const loginUser = await loginWithEmailAndPassword(email, password);

    console.warn('test login', loginUser);
    if (typeof loginUser !== 'undefined' && typeof loginUser !== 'string') {
      console.warn('test dispatch: ', loginUser);
      dispatch(
        newUserAction({
          uid: loginUser.uid,
          name: loginUser.name,
          email: loginUser.email,
          phone: loginUser.phone,
          birthday: loginUser.birthday,
          pictures: loginUser.pictures
        })
      );

      // @ts-ignore
      const ownerjobs = await getUserOwnJob(loginUser.uid);
      console.log('OWner Jobs after login!!!!!!!1 ', ownerjobs);
      // @ts-ignore
      dispatch(setOwnerJobs(ownerjobs));
    } else {
      console.log('Error logging in');
    }
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
            onPressHandler={onLoginHandler}
            isDisabled={false}
          />
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
