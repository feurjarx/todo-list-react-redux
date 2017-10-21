import React from 'react';

let store;
class Provider extends React.Component {
    constructor(props) {
        super();
        store = props.store;
        store.subscribe(() => {
            this.forceUpdate();
        });
    }
    render() {
        return React.cloneElement(this.props.children);
    }
}

export function connect(mapStateToProps, mapDispatchToProps) {
    return (WrappedComponent) => (
        class ProxyPropsHOC extends React.Component {
            render() {
                let injectedProps = {
                    ...mapStateToProps(store.getState()),
                    ...mapDispatchToProps(store.dispatch)
                };
                return (
                    <WrappedComponent
                        {...this.props}
                        {...injectedProps}
                    />
                )
            }
        }
    );
}

export default Provider;