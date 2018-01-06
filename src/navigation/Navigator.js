import { TabNavigator } from 'react-navigation';

import Account from '../components/Account';
import Main from '../components/Main';

export const Navigator = TabNavigator({
    account: { screen: Account },
    main: { screen: Main },
}, {
    lazy: true,
    tabBarOptions: {
        activeTintColor: 'white',
        indicatorStyle: {
            backgroundColor: '#aaa',
        },
        labelStyle: {
            fontSize: 12,
        },
        style: {
            backgroundColor: 'gray',
        },
    }
});
