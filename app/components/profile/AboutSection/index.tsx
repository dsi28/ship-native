import React from 'react';
import { Text, View } from 'react-native';
// @ts-ignore
import HomeIcon from 'react-native-vector-icons/Entypo';
// @ts-ignore
import CheckIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import ReadMoreComponent from '../../readMore';
import styles from './styles';

interface AboutProps {
  userProfile?: any; // TODO remove question mark when we have data to pass to this comp
}

const AboutSection: React.FC<AboutProps> = () => (
  <View style={{ ...styles.sectionContatiner, ...styles.addSectionContainer }}>
    <View style={styles.marginBottom40}>
      <Text style={styles.aboutSectionTitle}>About</Text>
    </View>
    <View>
      <View>
        {/* TODO get about profile description */}
        {/* TODO add pressable at end of ... that says read more to show full text */}
        <ReadMoreComponent
          fullText="Decription test\nsdafadsf lkjlas kjalsdf kt lkjasfd kal
          asdfa lkjka lw asdfsal lkadsfj sdfdas adafa adfdas blah blah
          blah Decription test Decription test1 Decription test2 Decription test Decription test Decription test\nsdafadsf lkjlas kjalsdf kt lkjasfd kal
          asdfa lkjka lw asdfsal lkadsfj sdfdas adafa adfdas blah blah
          blah Decription test Decription test1 Decription test2 Decription test Decription test Decription test\nsdafadsf lkjlas kjalsdf kt lkjasfd kal
          asdfa lkjka lw asdfsal lkadsfj sdfdas adafa adfdas blah blah
          blah Decription test Decription test1 Decription test2 Decription test Decription test"
          maxLength={300}
        />
      </View>
      <View style={styles.marginTop30}>
        <View style={styles.reviewRow}>
          <View style={styles.iconView}>
            <HomeIcon name="home" size={30} color="black" />
          </View>
          <View>
            {/* TODO get last location */}
            <Text style={styles.aboutIconText}>Lives in Miami Beach, FL</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.iconView}>
            <CheckIcon name="comment" size={30} color="black" />
          </View>
          <View>
            {/* TODO decide what to do with this - might be good for tourists */}
            <Text style={styles.aboutIconText}>Speaks English, Spanish</Text>
          </View>
        </View>
      </View>
    </View>
  </View>
);
export default AboutSection;
