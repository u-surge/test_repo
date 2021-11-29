/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, { useState } from 'react';
import {
  View,
  Text,
}from 'react-native';
import Routes from './src/routes';
import { ModalPortal } from 'react-native-modals';

const App: () => Node = () => {
  return (
    <Routes/>
  );
};


export default App;
