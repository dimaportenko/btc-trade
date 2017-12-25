import React, { Component } from 'react';
import { ScrollView, View, StyleSheet, RefreshControl } from 'react-native';
import { connect } from 'react-redux';
import { sellBuyFetch } from '../actions';
import CurrencyRow from './CurrencyRow';

class Main extends Component {
    state = {
        refreshing: false
    };

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

    onRefresh = () => {
        Object.values(this.props.currencies).map(item => {
            this.props.sellBuyFetch(item.code);
        });
    };

    render() {
        return (
            <View style={{flex: 7, backgroundColor: '#F8F4FC'}}>
                <ScrollView
                    style={styles.container}
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.refreshing}
                            onRefresh={this.onRefresh}
                        />
                    }
                >
                    {this.renderCurrencies()}
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 30,
    },
});

const mapStateToProps = ({ currencies }) => {
    return { currencies };
};

export default connect(mapStateToProps, { sellBuyFetch })(Main);
