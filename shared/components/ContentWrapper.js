import React from 'react';
import {View, StyleSheet} from 'react-native';

export const ContentWrapper = ({horizontal, flex, center, children}) => {
  return (
    <View
      style={[
        horizontal ? styles.contentWrapperHorizontal : styles.contentWrapper,
      ]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  contentWrapper: {
    flex: 1,
    padding: 11,
    width: '100%',
  },
  contentWrapperHorizontal: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 11,
    // borderWidth: 1,
  },
  contentWrapperCenter: {
    alignItems: 'center',
  },
});
