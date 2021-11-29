
import React, { useState } from 'react';
import type {
    Node
} from 'react';
import {
    Text,
    useColorScheme,
    View,
} from 'react-native';
import LoginLayout from '../screens/Login';

const Routes: () => Node = () => {
    return (
        <View style={{
            backgroundColor: '#AAA5FF'
        }}>
            <Text>Main화면</Text>
            <LoginLayout/>
        </View>
    );
};
export default Routes;