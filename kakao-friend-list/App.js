import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { getStatusBarHeight, getBottomSpace } from 'react-native-iphone-x-helper';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import { friendProfiles, myProfile } from "./src/data";
import Header from "./src/Header";
import Profile from './src/Profile';
import Margin from "./src/Margin";
import FriendSection from './src/FriendSection';

const statusBarHeight = getStatusBarHeight(true);
const bottomSpace = getBottomSpace();

console.log(`${Platform.OS}: ${statusBarHeight}, ${bottomSpace}`);


export default function App() {
  const [isOpened, setIsOpened] = useState(true);

  const onPressArrow = () => {
    setIsOpened(!isOpened);
  }

  return (
    // SafeAreaView는 상단바 영역 이후부터 View가 그려짐 (하단 탭바때문에 사용 안할 예정-react-native 라이브러리)
    <SafeAreaProvider >
    <SafeAreaView style={styles.container} edges={['right', 'bottom', 'left']}>
      <Header />

      <Margin height={10} />

      <Profile
        uri={myProfile.uri}
        name={myProfile.name}
        introduction={myProfile.introduction}
      />

      <Margin height={15} />

      <Division />

      <Margin height={12} />

      <FriendSection
        friendProfileLen={friendProfiles.length} 
        onPressArrow={onPressArrow}
        isOpened={isOpened}
      />

      <FriendList data={friendProfiles} isOpened={isOpened} />

    </SafeAreaView>
    </SafeAreaProvider>
    
    // <View style={styles.container}>
    //   <Header />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: statusBarHeight,
    backgroundColor: '#fff',
    paddingHorizontal: 15,
  },
});
