import React, { PureComponent } from 'react';

export const wrapComponentWithContext = (Component) =>
    class extends PureComponent {
        static options () {
            if (typeof Component.options === 'function') {
                return Component.options();
            }
        }

        render () {
            return (
                <Component {...this.props} />
            );
        }
    };