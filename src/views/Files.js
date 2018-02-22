import React, {Component} from 'react';
import {Button, View, Text, StyleSheet} from 'react-native';

class Files extends Component {

    static navigationOptions = {
        title: 'FilesSystem Integration',
    };

    render() {
        const {navigation} = this.props;
        return (
            <View style={styles.container}>
                 <Text style={styles.title}>Files test</Text>
                 <Text style={styles.text}>This is the Files test</Text>
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
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5
    }
});

export default Files;