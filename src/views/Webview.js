import React, {Component} from 'react';
import {WebView, View, Text} from 'react-native';

const REMOTE_URL = 'https://github.com/facebook/react-native';

/**
 * @author Eduardo Reichert <eduardo.reichert@wssim.com.br>
 * @package PockApp
 * @description Test WebView
 */
class Webview extends Component {

    static navigationOptions = {
        title: 'Webview Integration',
    };

    constructor(props) {
        super(props);
        this.state = {
            error: false
        };
    }

    _handleError = () => {
        this.setState({error: true});
    }

    render() {
        const {navigation} = this.props;
        const {error} = this.state;
        if (!error) {
            return (
                <WebView
                    startInLoadingState
                    scalesPageToFit
                    onError={this._handleError}
                    source={{uri: REMOTE_URL}}
                />
            );
        } else {
            return (
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <Text>An error ocurred!</Text>
                </View>
            );
        }
    }
}

export default Webview;
