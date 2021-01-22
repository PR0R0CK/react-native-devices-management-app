import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function ConnectionScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Connection</Text>
                {/* <Button
                onPress={() => navigation.navigate('Notifications')}
                title="Go to notifications"
            /> */}
            </View>
            <View style={styles.listContainer}>
                <Text>DevicesScreen!!</Text>
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