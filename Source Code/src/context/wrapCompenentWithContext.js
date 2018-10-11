import React, { PureComponent } from 'react';

export const wrapComponentWithContext = (Component) =>
    class extends PureComponent {
        static options (passProps) {
            if (typeof Component.options === 'function') {
                return Component.options(passProps);
            }
        }

        render () {
            return (
                <Component {...this.props} />
            );
        }
    };