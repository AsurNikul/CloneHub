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
    url: 'https://www.facebook.com',
  },
  {
    id: 2,
    title: 'Instagram',
    img: Images.instagram,
    url: 'https://www.instagram.com',
  },
  {
    id: 3,
    title: 'WhatsApp',
    img: Images.whatsapp,
    url: 'https://www.whatsapp.com',
  },
  {
    id: 4,
    title: 'YouTube',
    img: Images.youtube,
    url: 'https://www.youtube.com',
  },
  {
    id: 5,
    title: 'TikTok',
    img: Images.tiktok,
    url: 'https://www.tiktok.com',
  },
  {
    id: 6,
    title: 'LinkedIn',
    img: Images.linkedin,
    url: 'https://www.linkedin.com',
  },
  {
    id: 7,
    title: 'Snapchat',
    img: Images.snapchat,
    url: 'https://www.snapchat.com',
  },
  {
    id: 8,
    title: 'Twitter',
    img: Images.twitter,
    url: 'https://www.twitter.com',
  },
  {
    id: 9,
    title: 'Spotify',
    img: Images.spotify,
    url: 'https://www.spotify.com',
  },
  {
    id: 10,
    title: 'Reddit',
    img: Images.reddit,
    url: 'https://www.reddit.com',
  },
  {
    id: 11,
    title: 'Pinterest',
    img: Images.pinterest,
    url: 'https://www.pinterest.com',
  },
  {
    id: 12,
    title: 'Netflix',
    img: Images.netflix,
    url: 'https://www.netflix.com',
  },
  {
    id: 13,
    title: 'Amazon',
    img: Images.amazon,
    url: 'https://www.amazon.com',
  },
  {
    id: 14,
    title: 'Gmail',
    img: Images.gmail,
    url: 'https://www.gmail.com',
  },
  {
    id: 15,
    title: 'Zoom',
    img: Images.zoom,
    url: 'https://www.zoom.us',
  },
  {
    id: 16,
    title: 'Discord',
    img: Images.discord,
    url: 'https://www.discord.com',
  },
  {
    id: 17,
    title: 'Slack',
    img: Images.slack,
    url: 'https://www.slack.com',
  },
  {
    id: 18,
    title: 'Teams',
    img: Images.teams,
    url: 'https://www.microsoft.com/en-us/microsoft-teams/group-chat-software',
  },
  {
    id: 19,
    title: 'Telegram',
    img: Images.telegram,
    url: 'https://www.telegram.org',
  },
  {
    id: 20,
    title: 'Skype',
    img: Images.skype,
    url: 'https://www.skype.com',
  },
  {
    id: 21,
    title: 'Tinder',
    img: Images.tinder,
    url: 'https://www.tinder.com',
  },
];
