jest.mock('react-native-vector-icons', () => {
    const ActualTabBarIOS = require.requireActual('TabBarIOS');
    const React = require('react');

    return {
        createIconSet: () => {
            const Icon = class extends React.Component {
                render() {
                    return jest.fn();
                }
            };

            Icon.TabBarItem = ActualTabBarIOS.Item;
            return Icon;
        },

        createIconSetFromFontello: () => {
            return {
                TabBarItem: ActualTabBarIOS.Item
            }
        },

        createIconSetFromIcoMoon: jest.fn(),
    }
});