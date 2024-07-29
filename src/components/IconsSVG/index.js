import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import * as icons from './icons'

const iconsList = Object.entries(icons);

function IconsFont() {
    return (
        <View style={styles.wrapper}>
            {iconsList.map(([key, Component]) => (
                <View key={key} style={styles.iconWrapper}>
                    {Component(styles.iconWrapper)}
                </View>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        padding: 16,
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 8
    },
    iconWrapper: {
        width: 32,
        height: 32,
    }
})

export default IconsFont;