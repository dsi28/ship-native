import * as React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import StepIndicator from 'react-native-step-indicator';

const stepIndicatorStyles = {
  stepIndicatorSize: 30,
  currentStepIndicatorSize: 40,
  separatorStrokeWidth: 3,
  currentStepStrokeWidth: 5,
  stepStrokeCurrentColor: '#fe7013',
  separatorFinishedColor: '#fe7013',
  separatorUnFinishedColor: '#aaaaaa',
  stepIndicatorFinishedColor: '#fe7013',
  stepIndicatorUnFinishedColor: '#aaaaaa',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 15,
  currentStepIndicatorLabelFontSize: 15,
  stepIndicatorLabelCurrentColor: '#000000',
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: 'rgba(255,255,255,0.5)',
  labelColor: '#666666',
  labelSize: 15,
  currentStepLabelColor: '#fe7013',
  marginBottom: 50
};

const dummyData = {
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
    backgroundColor: '#ffffff'
  },
  stepIndicator: {
    marginVertical: 50,
    paddingHorizontal: 20
  },
  rowItem: {
    flex: 3,
    paddingVertical: 20,
    marginBottom: 30
  },
  title: {
    flex: 1,
    fontSize: 20,
    color: '#333333',
    paddingVertical: 16,
    fontWeight: '600'
  },
  body: {
    flex: 1,
    fontSize: 15,
    color: '#606060',
    lineHeight: 24,
    marginRight: 8
  }
});

const VerticalStepIndicator = () => {
  const [currentPage, setCurrentPage] = React.useState<number>(0);
  const viewabilityConfig = React.useRef({ itemVisiblePercentThreshold: 40 })
    .current;

  const renderPage = () => (
    // rowData: any
    // const { item } = rowData;
    <View style={styles.rowItem} />
  );
  const onViewableItemsChanged = React.useCallback(({ viewableItems }) => {
    const visibleItemsCount = viewableItems.length;
    if (visibleItemsCount !== 0) {
      setCurrentPage(viewableItems[visibleItemsCount - 1].index);
    }
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.stepIndicator}>
        <StepIndicator
          customStyles={stepIndicatorStyles}
          stepCount={6}
          direction="vertical"
          currentPosition={currentPage}
          labels={dummyData.data.map((item: any) => item.title)}
        />
      </View>
      <FlatList
        style={{ flexGrow: 1 }}
        data={dummyData.data}
        renderItem={renderPage}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
      />
    </View>
  );
};

export default VerticalStepIndicator;
