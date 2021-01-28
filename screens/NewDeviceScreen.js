import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export default function NewDeviceScreen({ navigation }) {
    const [name, setName] = useState();
    const [place, setPlace] = useState();
    const [command, setCommand] = useState();

    const [device, setDevice] = useState(
        {
            name: '',
            place: '',
            command: ''
        }
    );

    function addDevice(name, place, command) {
        // console.log(name);
        setDevice({ name: name, place: place, command: command });
        console.log(device);

        navigation.navigate('Devices', { device: device })
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>New Device{device.name}</Text>
            </View>
            <View style={styles.listContainer}>
                <TextInput style={styles.input}
                    onChangeText={text => setName(text)}
                    placeholder="Name">
                </TextInput>

                <TextInput style={styles.input}
                    onChangeText={text => setPlace(text)}
                    placeholder="Place">
                </TextInput>

                <TextInput style={styles.input}
                    onChangeText={text => setCommand(text)}
                    placeholder="Command">
                </TextInput>

                <TouchableOpacity style={styles.button}
                    // onPress={() => addDevice(name, place, command)}>
                    // onPress={() => console.log("!!" + name)}>
                    onPress={() => navigation.navigate('Devices',
                        { name: name, place: place, command: command })}>
                    <Text style={styles.title}>Save</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}
                // onPress={() => navigation.navigate('Devices')}>
                >
                    <Text style={styles.title}>Cancel</Text>
                </TouchableOpacity>
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
    },
    input: {
        borderWidth: 1,
        borderColor: 'black',
        alignSelf: 'stretch',
        margin: 10,
        height: 64,
        paddingHorizontal: 16,
        fontSize: 20,
        fontFamily: "Inter_900Black",
    },
    button: {
        backgroundColor: '#4a148c',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'stretch',
        paddingVertical: 12,
        paddingHorizontal: 32,
        margin: 10,
        borderRadius: 6,
    },
});