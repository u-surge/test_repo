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

const GoogleLogin: () => Node = () => {
    return (
        <View>
            <Button title="Google로 로그인하기"/>
            <Button title="Google 로그아웃하기"/>
            <Button title="Google 연결 해제"/>
            <Button title="Google 프로필 정보 받기"/>
            <Text>-----------------------------</Text>
        </View>
    );
};
export default GoogleLogin;
