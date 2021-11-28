
// LogIn 관련 기능 다 이쪽에서 관리하면 되지 않을까 하는 생각.
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

const KakaoLogin: () => Node = () => {
    return (
        <View>
            <Button title="Kakao로 로그인하기"/>
            <Button title="Kakao 로그아웃하기"/>
            <Button title="Kakao 연결 해제"/>
            <Button title="Kakao 프로필 정보 받기"/>
            <Text>-----------------------------</Text>
        </View>
    );
};
export default KakaoLogin;
