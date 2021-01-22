import React, { useState, useEffect } from 'react';
import {
    Alert, SafeAreaView, View, FlatList, StyleSheet, Text,
    StatusBar, TouchableOpacity
} from 'react-native';
import { useNavigation } from '@react-navigation/native';


function showAlert() {
    Alert.alert("Alert!!!");
}


const Item = ({ item, onPress, style }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.description}>{item.place}</Text>
    </TouchableOpacity>
);

export default function ListOfDevices({ DATA }) {
    const [selectedId, setSelectedId] = useState(null);

    const renderItem = ({ item }) => {
        const backgroundColor = item.id === selectedId ? "grey" : "#4a148c";

        return (
            <Item
                item={item}
                onPress={() => showAlert()}
                style={{ backgroundColor }}
            />
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                extraData={selectedId}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        backgroundColor: '#7c43bd'
    },
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        alignItems: 'center',
    },
    title: {
        fontSize: 25,
        fontFamily: "Inter_700Bold",
        color: 'white'
    },
    description: {
        fontFamily: "Inter_500Medium",
        color: 'white'
    }
});