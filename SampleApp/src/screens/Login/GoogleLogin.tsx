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
    GoogleSignin,
    GoogleSigninButton,
    statusCodes,
} from '@react-native-google-signin/google-signin';



const GoogleLogin: () => Node = () => {

    const [userInfo, setUserInfo] = useState();
    const [user_id, setUserId] = useState();
    const [nickName, setNickName] = useState();
    // 로그인 기능.
    const signIn = async () => {
        try {
            GoogleSignin.configure();
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            setUserInfo(userInfo);
            Alert.alert("Login 완료!\nuserId : " + userInfo.user.givenName);
        } catch (error) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                // user cancelled the login flow
            } else if (error.code === statusCodes.IN_PROGRESS) {
                // operation (e.g. sign in) is in progress already
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                // play services not available or outdated
            } else {
                // some other error happened
            }
        }
    };
    // 현재 유저 정보를 받아옵니다.
    const getCurrentUser = async () => {
        const currentUser = await GoogleSignin.getCurrentUser();
        const user = currentUser.user;
        setUserId(user.id);
        setNickName(user.name);
        setUserInfo({ currentUser });
    };

    const getCurrentUserInfo = async () => {
        try {
            const userInfo = await GoogleSignin.signInSilently();
            setUserInfo({ userInfo });
        } catch (error) {
            if (error.code === statusCodes.SIGN_IN_REQUIRED) {
                // user has not signed in yet
            } else {
                // some other error
            }
        }
    };

    // 로그아웃.
    const signOut = async () => {
        try {
            await GoogleSignin.signOut();
            setUserInfo(null); // Remember to remove the user from your app's state as well
            Alert.alert("LogOut 완료!");
        } catch (error) {
            console.error(error);
        }
    };

    // 연결 해제!
    const revokeAccess = async () => {
        try {
            await GoogleSignin.revokeAccess();
            Alert.alert("연결 해제!");
            // Google Account disconnected from your app.
            // Perform clean-up actions, such as deleting data associated with the disconnected account.
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <View>
            <GoogleSigninButton
                style={{ width: 192, height: 48 }}
                size={GoogleSigninButton.Size.Wide}
                color={GoogleSigninButton.Color.Dark}
                onPress={signIn}
            />
            <Button title="Google로 로그인하기" onPress={() => {
                console.log("Google로그인 버튼 클릭!");
                
                signIn();
            }
            }
            />
            <Button title="Google 로그아웃하기" onPress={() => {
                console.log("Google 로그아웃하기 클릭됨");
                signOut();
            }} />
            <Button title="Google 연결 해제" onPress={() => {
                console.log("Google 연결 해제");
                revokeAccess();
            }} />
            <Button title="Google 프로필 정보 받기" onPress={() => {
                console.log("프로필 정보 받기 클릭됨");
                getCurrentUser();
                Alert.alert("구글 ID : " + user_id + " " + " NickName : " + nickName);
            }}
            />
            <Text>-----------------------------</Text>
        </View>
    );
};
export default GoogleLogin;

/*
UserInfo
{
    idToken: string,
    serverAuthCode: string,
    scopes: Array<string>, // on iOS this is empty array if no additional scopes are defined
    user: {
      email: string,
      id: string,
      givenName: string,
      familyName: string,
      photo: string, // url
      name: string // full name
    }
  }
  */