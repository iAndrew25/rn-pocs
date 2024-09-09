import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function Tabs({tabs, selectedTab, setSelectedTab}) {
  return (
    <View style={styles.menu}>
      {tabs.map(tab => (
        <Text
          key={tab}
          style={selectedTab === tab && styles.bold}
          onPress={() => setSelectedTab(tab)}>
          {tab}
        </Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  menu: {
    gap: 8,
    justifyContent: 'center',
    paddingVertical: 16,
    flexDirection: 'row',
  },
  bold: {
    fontWeight: 'bold',
  },
});

export default Tabs;
