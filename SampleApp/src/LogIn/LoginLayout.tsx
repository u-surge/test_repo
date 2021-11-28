
import React, { useState } from 'react';
import type {
    Node
} from 'react';
import {
    Text,
    useColorScheme,
    View,
} from 'react-native';
import KakaoLogin from './KakaoLogin';
import NaverLogin from './NaverLogin';
import GoogleLogin from './GoogleLogin';

const LoginLayout: () => Node = () => {
    return (
        <View>
            <Text>Main화면</Text>
            <KakaoLogin/>
            <NaverLogin/>
            <GoogleLogin/>
        </View>
    );
};
export default LoginLayout;