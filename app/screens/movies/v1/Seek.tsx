import React, { Component } from 'react';
import {
  Dimensions,
  Text,
  View,
  Button,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native';
import Swiper from 'react-native-swiper';

import { MOVIEDB_API_KEY } from '@env';
import { Ranking } from './Ranking';

const movieInfo = 'https://api.douban.com/v2/movie';

const start = 0;
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

export class Seek extends Component {
  constructor(props) {
    super(props);
    this.state = {
      top250: [],
      weekly: [],
      us_box: [],
      new_movies: [],
      ready: true,
      activeTab: 0,
      tabs: [
        { key: 'top250', title: 'Top250' },
        { key: 'weekly', title: '口碑榜' },
        { key: 'us_box', title: '北美票房榜' },
        { key: 'new_movies', title: '新片榜' }
      ]
    };
  };

  static navigationOptions = {
    header: null
  };

  _fetchData = (s = 0, type = 'top250') => {
    let formData = new FormData();
    formData.append('apikey', MOVIEDB_API_KEY,)
    formData.append('city', '北京',)
    formData.append('client', 'something',)
    formData.append('udid', 'dddddddddddddddddddddd');

    return fetch(`${movieInfo}/${type}?start=${s}`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'multipart/form-data',
      },
      body: formData
    })
      .then(response => response.json())
      .then(data => {
        this.setState({
          ready: false,
        });
        return data.subjects;
      })
  };

  async componentDidMount() {
    const json = await this._fetchData();
    this.setState({
      top250: json,
    });
  };

  _changeData = async (index) => {
    let type = '';
    switch (index) {
      case 0:
        type = 'top250';
        break;
      case 1:
        type = 'weekly';
        break;
      case 2:
        type = 'us_box';
        break;
      case 3:
        type = 'new_movies';
        break;
    };

    if (this.state[type].length !== 0) return;
    this.setState({
      ready: true,
    });
    const json = await this._fetchData(0, type);
    this.setState({
      [type]: json,
      activeTab: index
    });
  };

  _fetchMore = async () => {
    start++;
    const json = await this._fetchData(start * 20);
    this.setState({
      top250: this.state.top250.concat(json),
    });
  };

  render() {
    const { navigate } = this.props.navigation;
    const { top250, weekly, us_box, new_movies, ready, activeTab, tabs } = this.state;

    const data = activeTab === 0 ? top250 :
      activeTab === 1 ? weekly :
        activeTab === 2 ? us_box : new_movies;

    return (
      <View style={{ width: width, height: height, paddingTop: 25, backgroundColor: '#fff' }}>

        <Swiper style={styles.wrapper} showsButtons={false} height={150} autoplay={true} autoplayTimeout={2.5}>
          <View style={styles.slide1}>
            <Image
              style={{ width: width, height: 150 }}
              resizeMode='stretch'
              source={require('@/assets/images/movies/v1/qqq.png')}
            />
          </View>
          <View style={styles.slide2}>
            <Image
              style={{ width: width, height: 150 }}
              resizeMode='stretch'
              source={require('@/assets/images/movies/v1/eee.jpg')}
            />
          </View>
          <View style={styles.slide3}>
            <Image
              style={{ width: width, height: 150 }}
              resizeMode='stretch'
              source={{ uri: 'https://img6.pplive.cn/2012/05/23/17330380811.jpg' }}
            />
          </View>
        </Swiper>

        <CustomTabs
          tabs={tabs}
          activeTab={activeTab}
          onTabPress={this._changeData}
        />

        {ready ? (
          <ActivityIndicator size='large' style={{ marginTop: 100 }} />
        ) : (
          <FlatList
            data={data}
            onEndReached={this._fetchMore}
            onEndReachedThreshold={0.5}
            renderItem={({ item, index }) => {
              const { title, id, rating, directors, casts, images } = item.subject || item;
              return (
                <Ranking
                  navigation={this.props.navigation}
                  title={title}
                  average={rating.average}
                  star={rating.stars}
                  directors={directors[0].name}
                  casts={casts}
                  index={index}
                  image={images.large}
                  id={id}
                />
              )
            }}
            keyExtractor={(item, index) => index.toString()}
          />
        )}
      </View>
    );
  };
};

const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: '#F3F3F3',
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
