import * as React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import StepIndicator from 'react-native-step-indicator';

const stepIndicatorStyles = {
  stepIndicatorSize: 30,
  currentStepIndicatorSize: 30,
  separatorStrokeWidth: 3,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: '#fe7013',
  separatorFinishedColor: '#fe7013',
  separatorUnFinishedColor: '#aaaaaa',
  stepIndicatorFinishedColor: '#fe7013',
  stepIndicatorUnFinishedColor: '#aaaaaa',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 0,
  currentStepIndicatorLabelFontSize: 0,
  stepIndicatorLabelCurrentColor: '#000000',
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: 'rgba(255,255,255,0.5)',
  labelColor: '#666666',
  labelSize: 15,
  currentStepLabelColor: '#fe7013'
};

const stepNames = {
  data: [
    {
      title: 'Searching for traveler'
    },
    {
      title: 'Item shipped to traveler'
    },
    {
      title: 'Item confirmed by traveler'
    },
    {
      title: 'Traveler is on the way to the destination'
    },
    {
      title: 'Traveler delivered the item'
    },
    {
      title: 'Receiver collected the item'
    },
    {
      title: 'Item confirmed by receiver'
    },
    {
      title: 'Payment is made'
    }
  ]
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
}

const VerticalStepIndicator: React.FC<StepIndicatorProps> = ({
  currentStep
}) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [currentPage, setCurrentPage] = React.useState<number>(currentStep);
  const viewabilityConfig = React.useRef({ itemVisiblePercentThreshold: 40 })
    .current;

  const renderPage = () => (
    // rowData: any
    // const { item } = rowData;
    <View style={styles.rowItem} />
  );
  //   const onViewableItemsChanged = React.useCallback(({ viewableItems }) => {
  //     const visibleItemsCount = viewableItems.length;
  //     if (visibleItemsCount !== 0) {
  //       setCurrentPage(viewableItems[visibleItemsCount - 1].index);
  //     }
  //   }, []);

  return (
    <View style={styles.container}>
      <View style={styles.stepIndicator}>
        <StepIndicator
          customStyles={stepIndicatorStyles}
          stepCount={8}
          direction="vertical"
          currentPosition={currentPage}
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
