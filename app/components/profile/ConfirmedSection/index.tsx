import React from 'react';
import { Text, View } from 'react-native';
// @ts-ignore
import FontAwe5Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './styles';
// @ts-ignore

interface ConfirmedSectionProps {
  userProfile?: any; // remove ? when we pass user here
}

const ConfirmedSection: React.FC<ConfirmedSectionProps> = () => (
  <View style={{ ...styles.sectionContatiner, ...styles.addSectionContainer }}>
    <View style={styles.marginBottom40}>
      <Text style={styles.aboutSectionTitle}>Confirmed</Text>
    </View>
    <View>
      <View>
        <View style={styles.reviewRow}>
          <View
            style={{
              ...styles.reviewRow,
              ...{ flex: 1 }
            }}
          >
            <View style={styles.iconView}>
              <FontAwe5Icon name="check" size={20} color="black" />
            </View>
            <View>
              {/* TODO set identity */}
              <Text style={styles.aboutIconText}>Identity</Text>
            </View>
          </View>
          <View
            style={{
              ...styles.reviewRow,
              ...{
                flex: 1
              }
            }}
          >
            <View
              style={{
                ...styles.iconView,
                ...{ alignContent: 'flex-start' }
              }}
            >
              <FontAwe5Icon name="check" size={20} color="black" />
            </View>
            {/* TODO email verification? */}
            <View>
              <Text style={styles.aboutIconText}>Email address</Text>
            </View>
          </View>
        </View>

        <View style={styles.reviewRow}>
          <View style={styles.iconView}>
            <FontAwe5Icon name="check" size={20} color="black" />
          </View>
          <View>
            {/* TODO Phone verification ? */}
            <Text style={styles.aboutIconText}>Phone number</Text>
          </View>
        </View>
      </View>
    </View>
  </View>
);
export default ConfirmedSection;
