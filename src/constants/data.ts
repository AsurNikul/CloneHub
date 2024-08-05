import SCREENS from '../navigators/route';
import {showReviewPopup} from '../utils/Func';
import Images from './images';
import Share from 'react-native-share';

export const DrawerData = [
  {
    id: 5,
    name: 'Request new app',
    icon: Images.request,
    onPress: () => {
      global.navigation.navigate(SCREENS.REQUEST_NEW);
    },
  },
  {
    id: 3,
    name: 'Rate US',
    icon: Images.rate,
    onPress: () => showReviewPopup(),
  },
  {
    id: 4,
    name: 'Share app',
    icon: Images.share,
    onPress: () => {
      Share.open({
        title: 'Share CloneHub App',
        message: 'Check out this amazing app!',
        url: 'https://play.google.com/store/apps/details?id=com.clonehub',
      });
    },
  },
  {
    id: 1,
    name: 'Privacy policy',
    icon: Images.policy,
    onPress: () => {
      global.navigation.navigate(SCREENS.Terms, {from: 'policy'});
    },
  },
  {
    id: 2,
    name: 'Term of use',
    icon: Images.term,
    onPress: () => {
      global.navigation.navigate(SCREENS.Terms, {from: 'terms'});
    },
  },
];

export const FilterData = [
  {
    id: 1,
    title: 'All Launches',
  },
  {
    id: 2,
    title: 'Past Launches',
  },
  {
    id: 3,
    title: 'Upcoming Launches',
  },
  {
    id: 4,
    title: 'Latest Launch',
  },
  {
    id: 5,
    title: 'Next Launch',
  },
];
interface AppData {
  id: number;
  title: string;
  img: any;
  url: string;
}
export const appsData: AppData[] = [
  {
    id: 1,
    title: 'Facebook',
    img: Images.facebook2,
    url: 'https://www.facebook.com/login',
  },
  {
    id: 2,
    title: 'Instagram',
    img: Images.instagram,
    url: 'https://www.instagram.com/accounts/login',
  },
  {
    id: 3,
    title: 'WhatsApp',
    img: Images.whatsapp,
    url: 'https://web.whatsapp.com',
  },
  {
    id: 4,
    title: 'YouTube',
    img: Images.youtube,
    url: 'https://accounts.google.com/ServiceLogin?service=youtube',
  },
  {
    id: 5,
    title: 'TikTok',
    img: Images.tiktok,
    url: 'https://www.tiktok.com/login',
  },
  {
    id: 6,
    title: 'LinkedIn',
    img: Images.linkedin,
    url: 'https://www.linkedin.com/login',
  },
  {
    id: 7,
    title: 'Snapchat',
    img: Images.snapchat,
    url: 'https://accounts.snapchat.com/accounts/login',
  },
  {
    id: 8,
    title: 'Twitter',
    img: Images.twitter,
    url: 'https://twitter.com/login',
  },
  {
    id: 9,
    title: 'Spotify',
    img: Images.spotify,
    url: 'https://accounts.spotify.com/en/login',
  },
  {
    id: 10,
    title: 'Reddit',
    img: Images.reddit,
    url: 'https://www.reddit.com/login',
  },
  {
    id: 11,
    title: 'Pinterest',
    img: Images.pinterest,
    url: 'https://www.pinterest.com/login',
  },
  {
    id: 12,
    title: 'Netflix',
    img: Images.netflix,
    url: 'https://www.netflix.com/login',
  },
  {
    id: 13,
    title: 'Amazon',
    img: Images.amazon,
    url: 'https://www.amazon.com/ap/signin',
  },
  {
    id: 14,
    title: 'Gmail',
    img: Images.gmail,
    url: 'https://accounts.google.com/ServiceLogin?service=mail',
  },
  {
    id: 15,
    title: 'Zoom',
    img: Images.zoom,
    url: 'https://zoom.us/signin',
  },
  {
    id: 16,
    title: 'Discord',
    img: Images.discord,
    url: 'https://discord.com/login',
  },
  {
    id: 17,
    title: 'Slack',
    img: Images.slack,
    url: 'https://slack.com/signin',
  },
  {
    id: 18,
    title: 'Teams',
    img: Images.teams,
    url: 'https://www.microsoft.com/en-us/microsoft-teams/log-in',
  },
  {
    id: 19,
    title: 'Telegram',
    img: Images.telegram,
    url: 'https://web.telegram.org/#/login',
  },
  {
    id: 20,
    title: 'Skype',
    img: Images.skype,
    url: 'https://login.live.com/login.srf?wa=wsignin1.0&rpsnv=13&ct=1562720342&rver=7.3.6960.0&wp=MBI_SSL_SHARED&wreply=https%3A%2F%2Fwww.skype.com%2Fen%2F&lc=1033&id=293290',
  },
  {
    id: 21,
    title: 'Tinder',
    img: Images.tinder,
    url: 'https://tinder.com/login',
  },
];
