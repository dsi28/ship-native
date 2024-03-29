import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import NextButton from '../../../components/buttons/NextButton';
import TextFormInput from '../../../components/FormInputs/TextI';
import NavigationLinkComponent from '../../../components/navigationLink';
import { setOwnerTravlerJobs } from '../../../redux/actions/job';
import { newUserAction } from '../../../redux/actions/user';
import { loginWithEmailAndPassword } from '../../../services/auth';
import { getUserOwnJob, getUserTravelerJobs } from '../../../services/jobs';
import styles from './styles';

// interface LoginScreenProps {
//   curInput: any;
//   setCurInput: React.Dispatch<React.SetStateAction<string | undefined>>;
// }

const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passEmpty, setPassEmpty] = useState(true);
  const [userEmpty, setUserEmpty] = useState(true);

  const dispatch = useDispatch();

  const onChangeInputHandler = (
    propertyName: string,
    propertyValue: string
  ) => {
    if (propertyName === 'email') {
      setEmail(propertyValue);
      if (!propertyValue || propertyValue.length === 0) {
        setUserEmpty(true);
      } else {
        setUserEmpty(false);
      }
    } else if (propertyName === 'password') {
      setPassword(propertyValue);
      if (!propertyValue || propertyValue.length === 0) {
        setPassEmpty(true);
      } else {
        setPassEmpty(false);
      }
    }
  };

  const onLoginHandler = async () => {
    const loginUser = await loginWithEmailAndPassword(email, password);

    console.warn('test login', loginUser);
    if (typeof loginUser !== 'undefined' && typeof loginUser !== 'string') {
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
      const travelerJobs = await getUserTravelerJobs(loginUser.uid);
      // // @ts-ignore
      // dispatch(setOwnerJobs(ownerjobs));
      // // @ts-ignore
      // dispatch(setTravlerJobs(travelerJobs));
      dispatch(
        setOwnerTravlerJobs({
          ownerJobs: ownerjobs,
          travelerJobs
        })
      );
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
            textColor="#FFC100"
            linkText="Create Account"
            linkDisabled={false}
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
              isPassword={false}
            />
          </View>
          <View>
            <TextFormInput
              labelText="Password"
              placeholderText="enter your password"
              propertyName="password"
              onChangeHandler={onChangeInputHandler}
              inputValue={password}
              isPassword
            />
          </View>
          <View style={styles.forgotContainer}>
            <NavigationLinkComponent
              navigateTo="Forgot Password"
              textColor="#87CEEB"
              linkText="Forgot Password"
              linkDisabled={false}
            />
          </View>
        </View>
        <View style={styles.loginBtn}>
          <NextButton
            buttonText="Login"
            onPressHandler={onLoginHandler}
            isDisabled={passEmpty || userEmpty}
          />
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
