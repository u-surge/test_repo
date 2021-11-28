
// LogIn 관련 기능 다 이쪽에서 관리하면 되지 않을까 하는 생각.
import React, {useState} from 'react';
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
    Image,
} from 'react-native';
import {
    KakaoOAuthToken,
    KakaoProfile,
    getProfile as getKakaoProfile,
    login,
    logout,
    unlink,
  } from '@react-native-seoul/kakao-login';
  import { Modal, ModalContent, ModalPortal } from 'react-native-modals';

const KakaoLogin: () => Node = () => {
    return (
        <View>
            <LogInSection/>
            <Text>-----------------------------</Text>
        </View>
    );
};

const LogInSection = ({ }): React.ReactElement => {
    const [result, setResult] = useState<string>('');
    
    //State를 이용하여 Modal을 제어함
    const [modalVisible, setModalVisible] = useState<boolean>(false);
    //Output을 State로 받아서 화면에 표출하거나 정보 값으로 활용
    const [modalOutput, setModalOutput] = useState<string>("Open Modal");
  
    
    const [user_id, setUserId] = useState();
    const [nickName, setNickName] = useState();
    
    const signInWithKakao = async (): Promise<void> => {
      const token: KakaoOAuthToken = await login();
  
      setResult(JSON.stringify(token));
    };
  
    const signOutWithKakao = async (): Promise<void> => {
      const message = await logout();
      setUserId("");
      setNickName("");
  
      setResult(message);
    };
  
    const getProfile = async (): Promise<void> => {
      const profile: KakaoProfile = await getKakaoProfile();
  
      setUserId(profile.id);
      setNickName(profile.nickname);
  
      setResult(JSON.stringify(profile));
    };
  
    const unlinkKakao = async (): Promise<void> => {
      const message = await unlink();
  
      setResult(message);
    };
  
    return (
      <View style={styles.sectionContainer}>
        <Modal
          visible={modalVisible}
          style={{alignItems: 'center'}}
          onTouchOutside={() => {
            setModalVisible(false);
          }}
        >
          <ModalContent
            style={{
              flex: 1,
              backgroundColor: 'fff',
            }}
          >
            <Text>
              {modalOutput}
            </Text>
          </ModalContent>
        </Modal>
  
        <Text>
          LogIn 화면
        </Text>
        <Button
          onPress={() => {
          console.log("로그인 버튼 Clicked!");
          signInWithKakao();
          getProfile()
          }}
          title={"카카오로 로그인하기 버튼"}
        ></Button>
        <Button
          onPress={() => {
          console.log("로그아웃 버튼 Clicked!");
          signOutWithKakao();
          }}
          title={"카카오로 로그아웃하기 버튼"}
        ></Button>
        <Button
          onPress={() => {
          console.log("btn Clicked!");
          unlinkKakao();
          }}
          title={"연결 끊기 버튼"}
        ></Button>
        <Button
          onPress={() => {
          console.log("btn Clicked!");
          getProfile()
          console.log(result);
          //setModalOutput("카카오 프로필 조회 : id=" + user_id + ", nickname=" + nickName);
          //setModalVisible(true);
          Alert.alert("카카오 프로필 조회 : id=" + user_id + ", nickname=" + nickName)
          }}
          title={"카카오 프로필 받기 버튼"}
        ></Button>
      </View>
    )
  }

  const styles = StyleSheet.create({
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
    },
    highlight: {
      fontWeight: '700',
    },
  });
  
export default KakaoLogin;
