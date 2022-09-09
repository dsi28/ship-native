import * as React from 'react';
import { useEffect, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import StepIndicator from 'react-native-step-indicator';

const stepIndicatorStyles = {
  stepIndicatorSize: 30,
  currentStepIndicatorSize: 30,
  separatorStrokeWidth: 3,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: '#87CEEB',
  separatorFinishedColor: '#87CEEB',
  separatorUnFinishedColor: '#aaaaaa',
  stepIndicatorFinishedColor: '#87CEEB',
  stepIndicatorUnFinishedColor: '#aaaaaa',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 0,
  currentStepIndicatorLabelFontSize: 0,
  stepIndicatorLabelCurrentColor: '#000000',
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: 'rgba(255,255,255,0.5)',
  labelColor: '#666666',
  labelSize: 17,
  currentStepLabelColor: '#87CEEB'
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    // backgroundColor: '#ffffff'
    backgroundColor: '#f3f5fa'
  },
  stepIndicator: {
    marginVertical: 20,
    paddingHorizontal: 20,
    // backgroundColor: '#f3f5fa',
    width: '100%'
  },
  rowItem: {
    flex: 3,
    paddingVertical: 20,
    marginBottom: 30
  }
});

interface StepIndicatorProps {
  // route: any;
  currentStep: number;
  stepNames: {
    data: {
      title: string;
    }[];
  };
}

const VerticalStepIndicator: React.FC<StepIndicatorProps> = ({
  currentStep,
  stepNames
}) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [stepsDone, setStepsDone] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [currentPage, setCurrentPage] = React.useState<number>(currentStep);
  const viewabilityConfig = React.useRef({ itemVisiblePercentThreshold: 40 })
    .current;

  const renderPage = () => (
    // rowData: any
    // const { item } = rowData;
    <View style={styles.rowItem} />
  );

  useEffect(() => {
    if (currentStep === 8) {
      setStepsDone(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.stepIndicator}>
        <StepIndicator
          customStyles={stepIndicatorStyles}
          stepCount={8}
          direction="vertical"
          currentPosition={currentStep <= 7 ? currentStep : 8}
          labels={stepNames.data.map((item: any) => item.title)}
        />
      </View>
      <FlatList
        style={{ flexGrow: 1 }}
        data={stepNames.data}
        renderItem={renderPage}
        onViewableItemsChanged={null}
        viewabilityConfig={viewabilityConfig}
      />
    </View>
  );
};

export default VerticalStepIndicator;
