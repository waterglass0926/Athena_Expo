import Images from './images';

export default DATA = {
  SLIDES: [
    { key: 1, title: 'StarWorld', description: 'The Best & Various Types, Worldwide Platform', image: Images.ATHENA.SPLASH101, navigation: 'World' },
    // { key: 2, title: 'UpJob', description: 'Hire The Best Global Freelancers Platform', image: Images.ATHENA.SPLASH102, navigation: 'UpJobStack' },
    { key: 3, title: 'Fitness', description: 'Workout Tracker, Yoga & Planner Gym Fitness', image: Images.ATHENA.SPLASH103, navigation: 'FitnessV1' },
    // { key: 4, title: 'Foodnet', description: 'Restaurant, Food Recipe & Delivery Platform', image: Images.ATHENA.SPLASH104, navigation: 'Foodnet' },
    { key: 5, title: 'TikTok 1.0', description: 'Short Video Sharing & Social Media Platform', image: Images.ATHENA.SPLASH105, navigation: 'TikTokV1' },
    { key: 6, title: 'Tinder 1.0', description: 'Dating & Social Platform, Image Swipe Functionality', image: Images.ATHENA.SPLASH104, navigation: 'TinderV1' },
    { key: 7, title: 'Tinder 2.0', description: 'Dating & Social Platform, Image Swipe Functionality', image: Images.ATHENA.SPLASH108, navigation: 'TinderV2' },
    { key: 8, title: 'Movies 2.0', description: 'The Moviedb Clone App Version 2.0', image: Images.ATHENA.SPLASH111, navigation: 'MoviesV2' },
    { key: 9, title: 'Movies 3.0', description: 'The Moviedb Clone App Version 3.0', image: Images.ATHENA.SPLASH111, navigation: 'MoviesV3' },
    { key: 50, title: 'Movies 4.0', description: 'The Moviedb Clone App Version 4.0', image: Images.ATHENA.SPLASH111, navigation: 'MoviesV4' },
    { key: 10, title: 'Instagram 1.0', description: 'Instagram Clone App Version 1.0', image: Images.ATHENA.SPLASH109, navigation: 'InstagramV1' },
    { key: 11, title: 'Instagram 2.0', description: 'Instagram Clone App Version 2.0', image: Images.ATHENA.SPLASH110, navigation: 'InstagramV2' },
    // { key: 6, title: 'TikTok 2.0', description: 'Short Video Sharing & Social Media Platform', image: Images.ATHENA.SPLASH105, navigation: 'TikTokV2' },
    // { key: 6, title: 'Shopee', description: 'The Best Selling, Fashion & eCommerce Platform', image: Images.ATHENA.SPLASH106, navigation: 'Shopee' },
    // { key: 7, title: 'Pinterest', description: 'Images & Photos Sharing, Social Media Platform', image: Images.ATHENA.SPLASH107, navigation: 'Pinterest' },
    // { key: 8, title: 'YouTube', description: 'The Online Videos Sharing, Social Media Platform', image: Images.ATHENA.SPLASH108, navigation: 'YouTubeV1' },
    // { key: 9, title: 'StarNews', description: 'World\'s News & Topic Stories Search Platform', image: Images.ATHENA.SPLASH109, navigation: 'News' },
    // { key: 10, title: 'StarBooks', description: 'Best Books & Novels, Publishers Search Platform', image: Images.ATHENA.SPLASH110, navigation: 'Books' },
    // { key: 11, title: 'Schedule', description: 'Schedule & Booking System, Management Meetings', image: Images.ATHENA.SPLASH111, navigation: 'Schedule' },
    { key: 12, title: 'ChatGpt', description: 'Schedule & Booking System, Management Meetings', image: Images.ATHENA.SPLASH101, navigation: 'ChatGpt' },
    { key: 13, title: 'UberEats', description: 'Schedule & Booking System, Management Meetings', image: Images.ATHENA.SPLASH102, navigation: 'UberEats' },
    { key: 14, title: 'Translator', description: 'Schedule & Booking System, Management Meetings', image: Images.ATHENA.SPLASH103, navigation: 'Translator' },
    { key: 16, title: 'Paper', description: 'Phasmophobia Companion, Old Paper', image: Images.ATHENA.SPLASH105, navigation: 'Paper' },
    { key: 17, title: 'Famous', description: 'Guess Famous People Game', image: Images.ATHENA.SPLASH106, navigation: 'Famous' },
    { key: 18, title: 'BasketBall', description: 'Basketball Game', image: Images.ATHENA.SPLASH107, navigation: 'BasketBall' },
    { key: 19, title: 'Disney 2.0', description: 'Disney Clone App', image: Images.ATHENA.SPLASH107, navigation: 'DisneyV2' },
    { key: 21, title: 'Dating 1.0', description: 'Dating Version 1.0', image: Images.ATHENA.SPLASH107, navigation: 'DatingV1' },
  ],
  LANGUAGES: [
    { key: 1, country: 'United States', language: 'English', code: 'en', flag: Images.ATHENA.FLAG001 },
    { key: 2, country: 'United Arab Emirates', language: 'Arabic', code: 'ar', flag: Images.ATHENA.FLAG002 },
    { key: 3, country: 'China', language: 'Chinese', code: 'cn', flag: Images.ATHENA.FLAG003 },
    { key: 4, country: 'Germany', language: 'Deutsch', code: 'de', flag: Images.ATHENA.FLAG004 },
    { key: 5, country: 'Spain', language: 'Spainsh', code: 'es', flag: Images.ATHENA.FLAG005 },
    { key: 6, country: 'France', language: 'French', code: 'fr', flag: Images.ATHENA.FLAG006 },
    { key: 7, country: 'Italian', language: 'Italy', code: 'it', flag: Images.ATHENA.FLAG007 },
    { key: 8, country: 'Japanese', language: 'Japan', code: 'ja', flag: Images.ATHENA.FLAG008 },
    { key: 9, country: 'Russia', language: 'Russian', code: 'ru', flag: Images.ATHENA.FLAG009 },
  ],
  INSTAGRAM: {
    VIDEOS: [
      {
        video: require('@/assets/videos/instagram/v1/video1.mp4'),
        postProfile: require('@/assets/images/instagram/v1/post1.jpg'),
        title: 'Ram_Charan',
        description: 'Feel the buity of nature',
        likes: '245k',
        isLike: false,
      },
      {
        video: require('@/assets/videos/instagram/v1/video2.mp4'),
        postProfile: require('@/assets/images/instagram/v1/post2.jpg'),
        title: 'The_Groot',
        description: "It's a tea time",
        likes: '656k',
        isLike: false,
      },
      {
        video: require('@/assets/videos/instagram/v1/video3.mp4'),
        postProfile: require('@/assets/images/instagram/v1/post3.jpg'),
        title: 'loverland',
        description: 'Feel the buity of nature',
        likes: '243k',
        isLike: false,
      },
      {
        video: require('@/assets/videos/instagram/v1/video4.mp4'),
        postProfile: require('@/assets/images/instagram/v1/post4.jpg'),
        title: 'mr. bean',
        description: 'How cute it is !!',
        likes: '876k',
        isLike: false,
      },
    ],
    FRIENDS: [
      {
        name: 'Ram_Charan',
        accountName: 'Ram Charan',
        profileImage: require('@/assets/images/instagram/v1/profile4.jpg'),
        posts: 56,
        followers: 6542,
        following: 43,
        follow: false,
      },
      {
        name: 'The_Tom',
        accountName: 'Tom',
        profileImage: require('@/assets/images/instagram/v1/profile5.jpg'),
        posts: 24,
        followers: 1253,
        following: 64,
        follow: false,
      },
      {
        name: 'live_long',
        accountName: 'Live Long',
        profileImage: require('@/assets/images/instagram/v1/profile2.jpg'),
        posts: 21,
        followers: 7886,
        following: 32,
        follow: false,
      },
      {
        name: 'the_real_hero',
        accountName: 'Ram Charan',
        profileImage: require('@/assets/images/instagram/v1/post1.jpg'),
        posts: 123,
        followers: 64253,
        following: 32,
        follow: false,
      },
      {
        name: 'the_jerry',
        accountName: 'The Jerry',
        profileImage: require('@/assets/images/instagram/v1/post2.jpg'),
        posts: 56,
        followers: 6542,
        following: 43,
        follow: false,
      },
      {
        name: 'angry_bird',
        accountName: 'Angry Bird',
        profileImage: require('@/assets/images/instagram/v1/post3.jpg'),
        posts: 452,
        followers: '564k',
        following: 31,
        follow: false,
      },
      {
        name: 'mr_bean',
        accountName: 'Mr Bean',
        profileImage: require('@/assets/images/instagram/v1/post4.jpg'),
        posts: 543,
        followers: '435k',
        following: 22,
        follow: false,
      },
      {
        name: 'the_Jd',
        accountName: 'Mr JD',
        profileImage: require('@/assets/images/instagram/v1/post5.jpg'),
        posts: 234,
        followers: '763k',
        following: 332,
        follow: false,
      },
      {
        name: '_don_',
        accountName: 'Don',
        profileImage: require('@/assets/images/instagram/v1/post6.jpg'),
        posts: 111,
        followers: 11223,
        following: 1,
        follow: false,
      },
      {
        name: 'black_white',
        accountName: 'blackWhite',
        profileImage: require('@/assets/images/instagram/v1/post7.jpg'),
        posts: 121,
        followers: 43213,
        following: 21,
        follow: false,
      },
      {
        name: 'iron_man',
        accountName: 'Iron Man',
        profileImage: require('@/assets/images/instagram/v1/post8.jpg'),
        posts: 432,
        followers: '987k',
        following: 24,
        follow: false,
      },
      {
        name: 'funny_videos',
        accountName: 'Funny Video Official',
        profileImage: require('@/assets/images/instagram/v1/post9.jpg'),
        posts: '1.2k',
        followers: '1.2M',
        following: 12,
        follow: false,
      },
      {
        name: 'mr_jhon',
        accountName: 'Mr Jhony',
        profileImage: require('@/assets/images/instagram/v1/post10.jpg'),
        posts: 533,
        followers: 64322,
        following: 123,
        follow: false,
      },
    ],
    POST: [
      {
        postTitle: 'mr shermon',
        postPersonImage: require('@/assets/images/instagram/v1/userProfile.png'),
        postImage: require('@/assets/images/instagram/v1/post1.jpg'),
        likes: 765,
        isLiked: false,
      },
      {
        postTitle: 'chillhouse',
        postPersonImage: require('@/assets/images/instagram/v1/profile5.jpg'),
        postImage: require('@/assets/images/instagram/v1/post2.jpg'),
        likes: 345,
        isLiked: false,
      },
      {
        postTitle: 'Tom',
        postPersonImage: require('@/assets/images/instagram/v1/profile4.jpg'),
        postImage: require('@/assets/images/instagram/v1/post3.jpg'),
        likes: 734,
        isLiked: false,
      },
      {
        postTitle: 'The_Groot',
        postPersonImage: require('@/assets/images/instagram/v1/profile3.jpg'),
        postImage: require('@/assets/images/instagram/v1/post4.jpg'),
        likes: 875,
        isLiked: false,
      },
    ],
    SEARCHES: [
      {
        id: 0,
        images: [
          require('@/assets/images/instagram/v1/post1.jpg'),
          require('@/assets/images/instagram/v1/post2.jpg'),
          require('@/assets/images/instagram/v1/post3.jpg'),
          require('@/assets/images/instagram/v1/post4.jpg'),
          require('@/assets/images/instagram/v1/post5.jpg'),
          require('@/assets/images/instagram/v1/post6.jpg'),
        ],
      },
      {
        id: 1,
        images: [
          require('@/assets/images/instagram/v1/post7.jpg'),
          require('@/assets/images/instagram/v1/post8.jpg'),
          require('@/assets/images/instagram/v1/post9.jpg'),
          require('@/assets/images/instagram/v1/post10.jpg'),
          require('@/assets/images/instagram/v1/post11.jpg'),
          require('@/assets/images/instagram/v1/post12.jpg'),
        ],
      },
      {
        id: 2,
        images: [
          require('@/assets/images/instagram/v1/post13.jpg'),
          require('@/assets/images/instagram/v1/post14.jpg'),
          require('@/assets/images/instagram/v1/post15.jpg'),
        ],
      },
    ],
    STORIES: [
      {
        id: 1,
        name: 'Your Story',
        image: require('@/assets/images/instagram/v1/userProfile.png'),
      },
      {
        id: 0,
        name: 'Ram_Charan',
        image: require('@/assets/images/instagram/v1/profile1.jpg'),
      },
      {
        id: 0,
        name: 'Tom',
        image: require('@/assets/images/instagram/v1/profile2.jpg'),
      },
      {
        id: 0,
        name: 'The_Groot',
        image: require('@/assets/images/instagram/v1/profile3.jpg'),
      },
      ,
      {
        id: 0,
        name: 'loverland',
        image: require('@/assets/images/instagram/v1/profile4.jpg'),
      },
      ,
      {
        id: 0,
        name: 'chillhouse',
        image: require('@/assets/images/instagram/v1/profile5.jpg'),
      },
    ]
  },
  MOVIES: {
    V3: {
      genres: [{
        'id': 28,
        'name': 'Action'
      },
      {
        'id': 12,
        'name': 'Adventure'
      },
      {
        'id': 16,
        'name': 'Animation'
      },
      {
        'id': 35,
        'name': 'Comedy'
      },
      {
        'id': 80,
        'name': 'Crime'
      },
      {
        'id': 99,
        'name': 'Documentary'
      },
      {
        'id': 18,
        'name': 'Drama'
      },
      {
        'id': 10751,
        'name': 'Family'
      },
      {
        'id': 14,
        'name': 'Fantasy'
      },
      {
        'id': 36,
        'name': 'History'
      },
      {
        'id': 27,
        'name': 'Horror'
      },
      {
        'id': 10402,
        'name': 'Music'
      },
      {
        'id': 9648,
        'name': 'Mystery'
      },
      {
        'id': 10749,
        'name': 'Romance'
      },
      {
        'id': 878,
        'name': 'Science Fiction'
      },
      {
        'id': 10770,
        'name': 'TV Movie'
      },
      {
        'id': 53,
        'name': 'Thriller'
      },
      {
        'id': 10752,
        'name': 'War'
      },
      {
        'id': 37,
        'name': 'Western'
      }]
    }
  }
};