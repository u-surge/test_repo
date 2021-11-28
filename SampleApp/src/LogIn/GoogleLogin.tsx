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
    const user;
    const [user_id, setUserId] = useState();
    const [nickName, setNickName] = useState();
    // 로그인 기능.
    const signIn = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            this.setState({ userInfo });
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
        this.setState({ currentUser });
    };

    const getCurrentUserInfo = async () => {
        try {
            const userInfo = await GoogleSignin.signInSilently();
            this.setState({ userInfo });
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
            this.setState({ user: null }); // Remember to remove the user from your app's state as well
        } catch (error) {
            console.error(error);
        }
    };

    // 연결 해제!
    const revokeAccess = async () => {
        try {
            await GoogleSignin.revokeAccess();
            // Google Account disconnected from your app.
            // Perform clean-up actions, such as deleting data associated with the disconnected account.
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <View>
            <Button title="Google로 로그인하기" onPress={() => {
                console.log("Google로그인 버튼 클릭!");
                GoogleSignin.configure();
                signIn();
            }
            }
            />
            <Button title="Google 로그아웃하기" onPress={() => {
                console.log("Google 로그아웃하기 클릭됨");
                signOut();
            }} />
            <Button title="Google 연결 해제" onPress={() => {
                console.log("Google 로그아웃하기 클릭됨");
                signOut();
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
