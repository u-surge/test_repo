/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, { useState } from 'react';
import type {
  Node
} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  Alert,
  Image
} from 'react-native';
import {
  KakaoOAuthToken,
  KakaoProfile,
  getProfile as getKakaoProfile,
  login,
  logout,
  unlink,
} from '@react-native-seoul/kakao-login';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { BOOLEAN_UNARY_OPERATORS } from '@babel/types';

const signInWithKakao = async (): Promise<void> => {
  const token: KakaoOAuthToken = await login();
  setResult(JSON.stringify(token));
};

const signOutWithKakao = async (): Promise<void> => {
  const message = await logout();

  setResult(message);
};

const getProfile = async (): Promise<void> => {
  const profile: KakaoProfile = await getKakaoProfile();

  setResult(JSON.stringify(profile));
};

const unlinkKakao = async (): Promise<void> => {
  const message = await unlink();

  setResult(message);
};

const LogInSection = ({ }): Node => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <View style={styles.sectionContainer}>
      <Text>
        LogIn 화면
      </Text>
      <Button
        onPress={() => {
          setIsLoggedIn(true);
          console.log("로그인 버튼 Clicked!");
          signInWithKakao();
        }}
        title={"카카오로 로그인하기 버튼"}
      ></Button>
            <Button
        onPress={() => {
          setIsLoggedIn(true);
          console.log("로그아웃 버튼 Clicked!");
          signOutWithKakao();
        }}
        title={"카카오로 로그아웃하기 버튼"}
      ></Button>
            <Button
        onPress={() => {
          setIsLoggedIn(true);
          console.log("btn Clicked!");
          unlinkKakao();
        }}
        title={"연결 끊기 버튼"}
      ></Button>
            <Button
        onPress={() => {
          setIsLoggedIn(true);
          console.log("btn Clicked!");
          console.log(getProfile());
        }}
        title={"카카오 프로필 받기 버튼"}
      ></Button>
    </View>
  )
}

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"

        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Step One">
            Edit <Text style={styles.highlight}>App.js</Text> to change this
            screen and then come back to see your edits.
          </Section>
          <Section title="See Your Changes">
            <ReloadInstructions />
          </Section>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
          <Button
        //버튼의 타이틀을 정의하는 속성
        title="Press Me"
        //클릭시 어떤 함수를 실행할건지
        onPress={() => Alert.alert("Simple Button pressed")}
      />
      <Button
        //버튼의 타이틀을 정의하는 속성
        title="Push Me"
        //클릭시 어떤 함수를 실행할건지
        onPress={() => Alert.alert("PushMe Button pressed")}
      />
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
          <LearnMoreLinks />
        </View>
>>>>>>> 17da9ab652b7809e4921b2a41c5e985604782cc9
      </ScrollView>
    </SafeAreaView >
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});


export default App;
