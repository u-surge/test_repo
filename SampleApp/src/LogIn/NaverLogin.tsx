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

const NaverLogin: () => Node = () => {
    return (
        <View>
            <Button title="Naver로 로그인하기"/>
            <Button title="Naver 로그아웃하기"/>
            <Button title="Naver 연결 해제"/>
            <Button title="Naver 프로필 정보 받기"/>
            <Text>-----------------------------</Text>
        </View>
    );
};
export default NaverLogin;
