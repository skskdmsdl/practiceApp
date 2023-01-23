import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { getStatusBarHeight, getBottomSpace } from 'react-native-iphone-x-helper';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import { friendProfiles, myProfile } from "./src/data";
import Header from "./src/Header";
import MyProfile from './src/MyProfile';
import Margin from "./src/Margin";

const statusBarHeight = getStatusBarHeight(true);
const bottomSpace = getBottomSpace();

console.log(`${Platform.OS}: ${statusBarHeight}, ${bottomSpace}`);


export default function App() {
  return (
    // SafeAreaView는 상단바 영역 이후부터 View가 그려짐 (하단 탭바때문에 사용 안할 예정-react-native 라이브러리)
    <SafeAreaProvider >
    <SafeAreaView style={styles.container} edges={['right', 'bottom', 'left']}>
      <Header />

      <Margin height={10} />

      <MyProfile
        uri={myProfile.uri}
        name={myProfile.name}
        introduction={myProfile.introduction}
      />

      <Margin height={15} />
      <Division />

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
  },
});
