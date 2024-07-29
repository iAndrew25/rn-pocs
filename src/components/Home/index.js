import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function Home() {
    return (
        <View>
            <Text style={styles.title}>Font Icons vs SVG Icons</Text>
            <View style={styles.wrapper}>
                <View>
                    <Text style={StyleSheet.compose(styles.p, styles.bold)}>Font Icons: </Text>
                    <Text style={styles.p}>1. 141 kb font + 14 kb unicode map</Text>
                    <Text style={styles.p}>2. ~200ms rendering all the fonts</Text>
                    <Text style={styles.p}>3. ~1757ms rendering all the fonts x10</Text>
                    <Text style={styles.p}>4. More consistent icons (some are duplicate), better organized SVGs - a single folder only with icons</Text>
                    <Text style={styles.p}>6. No need for two imports when using Icon</Text>
                    <Text style={styles.p}>{`<Icon name="" size="" color="" />`}</Text>
                    <Text style={styles.p}> ----- </Text>
                    <Text style={styles.p}>1. Font must be generated and linked everytime we add a new icon. </Text>
                    <Text style={styles.p}>2. SVGs must be cleaned.</Text>
                    <Text style={styles.p}>3. SVGs must have a single color.</Text>
                </View>
                <View>
                    <Text style={StyleSheet.compose(styles.p, styles.bold)}>SVG Icons: </Text>
                    <Text style={styles.p}>1. 2.3 mb all svgs</Text>
                    <Text style={styles.p}>2. ~590ms rendering all the fonts</Text>
                    <Text style={styles.p}>3. ~5382ms rendering all the fonts x10</Text>
                    <Text style={styles.p}>4. Multiple imports needed for using the Icon (Icon + SVG for each icon)</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        padding: 16,
        gap: 16
    },
    title: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
    },
    p: {
        fontSize: 17
    },
    bold: {
        fontWeight: 'bold'
    }
});

export default Home;