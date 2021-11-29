import React from 'react';
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

import { NaverLogin, getProfile } from '@react-native-seoul/naver-login';

const iosKeys = {
  kConsumerKey: "MCRuiP0Cqt7aJGJNIW8F",
  kConsumerSecret: "tDiHJdSerQ",
  kServiceAppName: "kjs",
  kServiceAppUrlScheme: "testapp" // only for iOS
};

const androidKeys = {
  kConsumerKey: "MCRuiP0Cqt7aJGJNIW8F",
  kConsumerSecret: "tDiHJdSerQ",
  kServiceAppName: "kjs"
};

const initials = Platform.OS === "ios" ? iosKeys : androidKeys;

const naverLogin = () => {
  const [naverToken, setNaverToken] = React.useState(null);

  const signInWithNaver = props => {
    return new Promise((resolve, reject) => {
        NaverLogin.login(props, (err, token) => {
        console.log(`\n\n  Token is fetched  :: ${token} \n\n`);
        setNaverToken(token);
        if (err) {
          reject(err);
          return;
        }
        resolve(token);
      });
    });
  };

  const naverLogout = () => {
    NaverLogin.logout();
    setNaverToken("");
  };

  const getUserProfile = async () => {
    const profileResult = await getProfile(naverToken.accessToken);
    if (profileResult.resultcode === "024") {
      Alert.alert("로그인 실패", profileResult.message);
      return;
    }
    console.log("profileResult", profileResult);
    console.log(profileResult.response);
    Alert.alert("email : " + profileResult.response.email + " name : " + profileResult.response.name +  " id : " + profileResult.response.id);
  };

  return (
    <SafeAreaView style={styles.sectionContainer}>
      <Button
        title="네이버 아이디로 로그인하기"
        onPress={() => {
            signInWithNaver(initials);
            console.log("로그인 버튼 Clicked!");
        }}
      />
      <Button title="로그아웃하기" onPress={naverLogout} />

      <Button title="회원정보 가져오기" onPress={getUserProfile} />
      
      <Text>-----------------------------</Text>
    </SafeAreaView>
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

export default naverLogin;
