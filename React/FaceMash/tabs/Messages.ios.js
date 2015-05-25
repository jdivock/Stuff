'use strict';

var React = require('react-native');

var {
    View,
    Text,
    StyleSheet,
    ListView
} = React;

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    }
});

var messagesTab = React.createClass({
    getInitialState: function(){
        return {
            dataSource: new ListView.DataSource({
                rowHasChanged: (r1, r2) => r1 !== r2
            })
        };
    },
    render: function(){
        return (
            <View style={styles.container}>
                <Text>Messages!</Text>
            </View>
        );
    }
});



module.exports = messagesTab;
