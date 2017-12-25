import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import CurrencyRow from './CurrencyRow';

class Main extends Component {
    renderCurrencies() {
        return Object.values(this.props.currencies).map(item => {
            return (
                <CurrencyRow
                    key={item.code}
                    code={item.code}
                    title={item.title}
                />
            );
        });
    }

    render() {
        return (
            <View style={styles.container}>
                {this.renderCurrencies()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginTop: 30,
    },
});

const mapStateToProps = ({ currencies }) => {
    return { currencies };
};

export default connect(mapStateToProps)(Main);
