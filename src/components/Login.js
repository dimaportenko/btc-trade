import React, { Component } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { auth } from '../actions';
import QRCodeScanning from './common/QRCodeScanner';

const SCREEN_WIDTH = Dimensions.get('window').width;

class Login extends Component {

    state = {
        publicKey: '',
        privateKey: '',
        scanning: false
    };

    onChangePublic = (text) => {
        this.setState({publicKey: text});
    };

    onChangePrivate = (text) => {
        this.setState({privateKey: text});
    };

    onSubmitPress = () => {
        this.props.auth(this.state.publicKey, this.state.privateKey);
    };

    startPublicScan = () => {
        this.startScan('publicKey');
    };

    startPrivateScan = () => {
        this.startScan('privateKey');
    };

    startScan = (key) => {
        this.setState({ scanKey: key, scanning: true });
    };

    onScanResult = (text) => {
        console.log('on Result');
        console.log({ [this.state.scanKey]: text, scanning: false });
        this.setState({ [this.state.scanKey]: text, scanning: false });
    };

    render() {
        if (this.state.scanning) {
            return (
                <QRCodeScanning
                    resultKey={this.state.scanKey}
                    onScanResult={this.onScanResult}
                />
            );
        }

        return (
            <View style={styles.container}>
                <FormLabel>Public API Key</FormLabel>
                <FormInput
                    value={this.state.publicKey}
                    onChangeText={this.onChangePublic}
                />
                <Button
                    backgroundColor="rgba(0, 0, 0, 0)"
                    icon={{ name: 'qrcode-scan', color: 'gray', type: 'material-community' }}
                    onPress={this.startPublicScan}
                />
                <FormLabel>Privat API Key</FormLabel>
                <FormInput
                    value={this.state.privateKey}
                    onChangeText={this.onChangePrivate}
                />
                <Button
                    backgroundColor="rgba(0, 0, 0, 0)"
                    icon={{ name: 'qrcode-scan', color: 'gray', type: 'material-community' }}
                    onPress={this.startPrivateScan}
                />
                <Button
                    title='Submit'
                    buttonStyle={styles.buttonStyle}
                    onPress={this.onSubmitPress}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 40,
    },
    buttonStyle: {
        marginTop: 20
    },
    rowStyle: {
        // width: SCREEN_WIDTH * 0.5,
        // flex: 1,
        // flexDirection: 'row'
    }
});

export default connect(null, { auth })(Login);
