import React, { Component } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { Button } from 'react-native-elements';

class Main extends Component {
    state = {
        fetching: false,
        isError: false
    };

    fetchDoge = () => {
        this.setState({fetching: true});
        fetch('https://btc-trade.com.ua/api/trades/buy/doge_uah')
            .then(response => response.json())
            .then(buyResult => {
                fetch('https://btc-trade.com.ua/api/trades/sell/doge_uah')
                    .then(response1 => response1.json())
                    .then(sellResult => {
                        this.setState({
                            fetching: false,
                            isError: false,
                            buyResult,
                            sellResult,
                        });
                    })
                    .catch(error => {
                        console.log(error);
                        this.setState({
                            isError: true,
                        })
                    });
            })
            .catch(error => {
                console.log(error);
                this.setState({
                    isError: true,
                })
            });

    };

    componentWillMount() {
        this.fetchDoge();
    }
    componentWillReceiveProps(next) {
        console.log('update props');
        console.log(next);
    }

    renderResults() {
        if (this.state.fetching) {
            return <ActivityIndicator size='large' />;
        }

        if (this.state.isError) {
            return <Text>Error. Please try again later.</Text>
        }

        return (
            <View>
                <Text>Buy - {this.state.buyResult.max_price}</Text>
                <Text>Sell - {this.state.sellResult.min_price}</Text>
            </View>
        )
    }

    render() {
        console.log('render');
        console.log(this.state);
        return (
            <View>
                <Text style={{ marginBottom: 10, textAlign: 'center' }}>Doge</Text>
                <View style={{ marginBottom: 10}}>
                    {this.renderResults()}
                </View>
                <Button
                    title="Refresh"
                    icon={{ name: 'refresh' }}
                    // backgroundColor: '#4496EC'
                    onPress={this.fetchDoge}
                />
            </View>
        );
    }
}

export default Main;
