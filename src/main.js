import React, { Profiler, useState } from 'react';
import {View, ScrollView, Text, StyleSheet, SafeAreaView} from 'react-native';

import Home from './components/Home';
import IconsFont from './components/IconsFont';
import IconsSVG from './components/IconsSVG';

function Main() {
    const [route, setRoute] = useState('');

    const onRender = (id, phase, actualDuration) => {
        console.log(`${id}'s ${phase} phase: ${actualDuration}ms`);
    }

    const renderContent = () => {
        switch(route) {
            case 'IconsFont':
                return (
                    <Profiler id="IconsFont" onRender={onRender}>
                        <IconsFont />
                    </Profiler>
                );
            case 'IconsSVG':
                return (
                    <Profiler id="IconsSVG" onRender={onRender}>
                        <IconsSVG />
                    </Profiler>
                );
            default:
                return <Home />;
        }
    }

    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.menu}>
                    <Text onPress={() => setRoute('Home')}>Home</Text>                    
                    <Text>|</Text>
                    <Text onPress={() => setRoute('IconsFont')}>IconsFont</Text>
                    <Text>|</Text>
                    <Text onPress={() => setRoute('IconsSVG')}>IconsSVG</Text>
                </View>
                {renderContent()}
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    menu: {
        gap: 8,
        justifyContent: 'center',
        paddingVertical: 32,
        flexDirection: 'row',
    }
})

export default Main;