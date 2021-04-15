import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {StyleSheet} from 'react-native'
import EmailJoinScreen from '../pages/Login/EmailJoinScreen'
import SendEmailScreen from '../pages/Login/SendEmailScreen'
import StartScreen from '../pages/Login/StartScreen'
import TypePasswordScreen from '../pages/Login/TypePasswordScreen'

const Stack = createStackNavigator();


function Login() {

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Start" component={StartScreen} options={{
                    title: ' ',
                    headerStyle: styles.headerStyle,
                }} />
                <Stack.Screen name="EmailJoin" component={EmailJoinScreen} options={{
                    title: ' ',
                    headerStyle: styles.headerStyle,
                }} />
                <Stack.Screen name="SendEmail" component={SendEmailScreen} options={{
                    title: ' ',
                    headerStyle: styles.headerStyle,
                }} />
                <Stack.Screen name="TypePassword" component={TypePasswordScreen} options={{
                    title: ' ',
                    headerStyle: styles.headerStyle,
                }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
const styles = StyleSheet.create({
    headerStyle: {
        backgroundColor: '#333333', shadowColor: 'transparent',
    },
})
export default Login;