
import React, { useState } from 'react';
import type {
    Node
} from 'react';
import {
    Text,
    useColorScheme,
    View,
} from 'react-native';
import LoginLayout from './LogIn/LoginLayout';

const Main: () => Node = () => {
    return (
        <View>
            <Text>Main화면</Text>
            <LoginLayout/>
        </View>
    );
};
export default Main;