import React, { Component } from 'react';
import { Dimensions, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { HotList } from './HotList';
import { SoonList } from './SoonList';
import { SearchInput } from './SearchInput';

const { width, height } = Dimensions.get('window');

const CustomTabs = ({ tabs, activeTab, onTabPress }) => {
  return (
    <View style={styles.tabContainer}>
      {tabs.map((tab, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.tab,
            activeTab === index && styles.activeTab
          ]}
          onPress={() => onTabPress(index)}
        >
          <Text style={[
            styles.tabText,
            activeTab === index && styles.activeTabText
          ]}>
            {tab.title}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export class PlayList extends Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0,
      tabs: [
        { key: 'hot', title: '正在热映', component: <HotList navigation={this.props.navigation} /> },
        { key: 'soon', title: '即将上映', component: <SoonList navigation={this.props.navigation} /> }
      ]
    };
  };

  handleTabPress = (index) => {
    this.setState({ activeTab: index });
  };

  render() {
    const { activeTab, tabs } = this.state;
    const ActiveComponent = tabs[activeTab].component;

    return (
      <View style={{ width: width, height: height, paddingTop: 25, backgroundColor: '#fff' }}>
        <SearchInput city={true} navigation={this.props.navigation} />
        <CustomTabs
          tabs={tabs}
          activeTab={activeTab}
          onTabPress={this.handleTabPress}
        />
        <View style={{ flex: 1 }}>
          {ActiveComponent}
        </View>
      </View>
    );
  };
};

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0'
  },
  tab: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center'
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#000'
  },
  tabText: {
    fontSize: 14,
    color: '#959595'
  },
  activeTabText: {
    color: '#000'
  }
});