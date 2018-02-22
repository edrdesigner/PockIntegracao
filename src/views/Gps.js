import React, {Component} from 'react';
import {ActivityIndicator, Button, View, Text, StyleSheet} from 'react-native';


/**
 * @author Eduardo Reichert <eduardo.reichert@wssim.com.br>
 * @package PockApp
 * @description Test Gps 
 */
class Gps extends Component {

    static navigationOptions = {
        title: 'GPS Integration',
    };

    constructor(props) {
        super(props);

        this.state = {
            latitude: null,
            longitude: null,
            error: null
        }
    }

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({
                    latitude: parseFloat(position.coords.latitude),
                    longitude: parseFloat(position.coords.longitude),
                    error: null,
                });
            },
            (error) => this.setState({error: error.message}),
            {enableHighAccuracy: false, timeout: 7000, maximumAge: 1000}
        );
    }

    renderGpsView = () => {
        const {latitude, longitude, error} = this.state;
        if (!latitude && !error) {
            return (
                <View style={styles.text}>
                    <ActivityIndicator size="large" />
                </View>
            );
        } else {
            return (
                <View style={styles.text}>
                    <Text>Latitude: {latitude}</Text>
                    <Text>Longitude: {longitude}</Text>
                    {error ? <Text>Error: {error}</Text> : null}
                </View>
            );
        }
    }

    render() {
        const {navigation} = this.props;
        const {latitude, longitude, error} = this.state;
        return (
            <View style={styles.container}>
                 <Text style={styles.title}>Gps test</Text>
                 <Text style={styles.text}>This is the gps test</Text>
                 {this.renderGpsView()}
                 <Button
                    title="Go back home"
                    onPress={() => navigation.goBack()}
                  />
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
    title: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },
    text: {
        marginBottom: 15
    }
});

export default Gps;