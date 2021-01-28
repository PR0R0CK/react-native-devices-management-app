import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import ListOfDevices from '../components/ListOfDevices';

let DATA = [
    {
        name: 'LAMPA',
        place: 'Kuchnia',
        command: 'asdf'
    },
    {
        name: 'ROLETA',
        place: 'Salon',
        command: 'fghrty'
    },
    {
        name: 'TV',
        place: 'Salon',
        command: 'cvbcv'
    }
];

export default function DevicesScreen({ navigation, route }) {
    let name = route.name;
    let place = route.place;
    let command = route.command;

    console.log("@@" + name);
    let device = {
        name: name,
        place: place,
        command: command
    };
    // let { device } = route.params?.device;

    // console.log("###");
    console.log("###" + device.name);
    DATA.push(device);
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title} >Devices</Text>
                {/* <Button
                onPress={() => navigation.navigate('Notifications')}
                title="Go to notifications"
            /> */}
            </View>
            <View style={styles.listContainer}>
                <ListOfDevices DATA={DATA}></ListOfDevices>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#7c43bd'
    },
    header: {
        flex: 1,
        // height: 80,
        paddingTop: 38,
        backgroundColor: '#4a148c',
    },
    title: {
        textAlign: 'center',
        fontSize: 25,
        fontFamily: "Inter_800ExtraBold",
        color: 'white'
    },
    listContainer: {
        flex: 14,
        justifyContent: 'center'
    }
});