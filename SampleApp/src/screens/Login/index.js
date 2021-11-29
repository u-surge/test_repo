
import React, { useState } from 'react';
import type {
    Node
} from 'react';
import {
    Text,
    useColorScheme,
    View,
} from 'react-native';
import KakaoLogin from '../Login/KakaoLogin';
import NaverLogin from '../Login/NaverLogin';
import GoogleLogin from '../Login/GoogleLogin';

const LoginLayout: () => Node = () => {
    return (
        <View style={{
            alignItems: 'center',
            backgroundColor: 'gray',
            borderColor : 'blue'
        }
        }>
            <Text>LoginLayout</Text>
            <KakaoLogin />
            <NaverLogin />
            <GoogleLogin />
        </View>
    );
};
export default LoginLayout;