'use strict';

var React = require('react-native');

var {
    View,
    Text,
    StyleSheet,
    Image
} = React;

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 64
    }
});

var messageView = React.createClass({
    componentWillMount: function(){
    },
    render: function(){
        var user = this.props.user;
        return (
            <View style={styles.container}>
                <Text>Chat with {user.firstName} {user.lastName}</Text>
            </View>
        );
    }
});

module.exports = messageView;
