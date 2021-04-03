import React from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import WideButton from '../../../../components/buttons/WideButton';
import JobDetails from '../../../../components/job/Details';
import { AppState } from '../../../../redux/store/configureStore';
import styles from './styles';

// interface NameInputProps {
//   curInput: any;
//   setCurInput: React.Dispatch<React.SetStateAction<string | undefined>>;
// }

const NewJobConfirm: React.FC = () => {
  const jobState = useSelector((state: AppState) => state.job.newJob);
  const dispatch = useDispatch();

  // const [nameInput, setNameInput] = useState(userPostProfile.name);
  return (
    <ScrollView style={styles.container}>
      <View style={styles.subContainer}>
        <JobDetails job={jobState} />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <WideButton
              buttonText="Post Job"
              onPressHandler={() => {
                console.log('job posted');
                // clear new job
                // add job to user's job
              }}
              isSelected
              btnBackgoundColor="orange"
              btnBorderColor="orange"
              btnTextColor="white"
            />
          </View>
          <View>
            <WideButton
              buttonText="Cancel"
              onPressHandler={() => {
                console.log('cancel job');
                // clear new job
              }}
              isSelected
              btnBackgoundColor="white"
              btnBorderColor="orange"
              btnTextColor="orange"
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
export default NewJobConfirm;
