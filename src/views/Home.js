import React, {Component} from 'react';
import {TouchableNativeFeedback, View, Text, StyleSheet, Platform} from 'react-native';

class Home extends Component {

    static navigationOptions = {
        title: 'Home',
        /* No more header config here! */
    };

    render() {
        const {navigation} = this.props;
        const touchableBg = Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : '';
        return (
            <View style={styles.container}>
                 <Text style={styles.textInfo}>Select a integration to test:</Text>
                 <TouchableNativeFeedback
                    onPress={() => navigation.navigate('CameraTest')}
                    background={touchableBg}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>
                            Camera
                        </Text>
                    </View>
                </TouchableNativeFeedback>

                 <TouchableNativeFeedback
                    onPress={() => navigation.navigate('GalleryRoll')}
                    background={touchableBg}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>
                            Camera Roll
                        </Text>
                    </View>
                </TouchableNativeFeedback>

                <TouchableNativeFeedback
                    onPress={() => navigation.navigate('Files')}
                    background={touchableBg}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>
                            FileSystem
                        </Text>
                    </View>
                </TouchableNativeFeedback>

                <TouchableNativeFeedback
                    onPress={() => navigation.navigate('Gps')}
                    background={touchableBg}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>
                            GPS
                        </Text>
                    </View>
                </TouchableNativeFeedback>

                <TouchableNativeFeedback
                    onPress={() => navigation.navigate('Notifications')}
                    background={touchableBg}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>
                            Notifications
                        </Text>
                    </View>
                </TouchableNativeFeedback>

                 <TouchableNativeFeedback
                    onPress={() => navigation.navigate('Printer')}
                    background={touchableBg}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>
                            Printer
                        </Text>
                    </View>
                </TouchableNativeFeedback>

                <TouchableNativeFeedback
                    onPress={() => navigation.navigate('Webview')}
                    background={touchableBg}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>
                            Webview
                        </Text>
                    </View>
                </TouchableNativeFeedback>

            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    button: {
        marginBottom: 15,
        width: 260,
        alignItems: 'center',
        backgroundColor: '#2196F3',
    },
    buttonText: {
        padding: 15,
        color: 'white'
    },
    textInfo: {
        marginBottom: 20
    }
});

export default Home;