'use strict';

var React = require('react-native'),
    MessageView = require('./MessageView.ios');

var {
    View,
    Text,
    StyleSheet,
    PixelRatio,
    Image,
    NavigatorIOS,
    TouchableHighlight,
    ListView
} = React;

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    row: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
        flexDirection: 'row',
        padding: 10
    },
    textContainer: {
        flex: 1
    },
    cellImage: {
        height: 60,
        borderRadius: 30,
        marginRight: 10,
        width: 60
    },
    time: {
        position: 'absolute',
        top: 0,
        right: 0,
        fontSize: 12,
        color: '#cccccc'
    },
    name: {
        flex: 1,
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 2
    },
    lastMessage: {
        color: '#999999',
        fontSize: 12
    },
    cellBorder: {
        backgroundColor: '#f2f2f2',
        height: 1 / PixelRatio.get(),
        marginLeft: 4
    }

});

function prettyTime(timestamp){
    var createdDate = new Date(timestamp);
    var distance = Math.round( (+new Date() - timestamp) / 60000);

    var hours = ( '0' + createdDate.getHours()).slice(-2);
    var minutes = ( '0' + createdDate.getMinutes()).slice(-2);
    var month = ( '0' + createdDate.getMonth()).slice(-2);
    var date = ( '0' + createdDate.getDate()).slice(-2);
    var year = createdDate.getFullYear();

    var string;

    if(distance < 1440){
        string = [hours, minutes].join(':');
    } else if (distance < 2879) {
        string = 'yesterday';
    } else {
        string = [date, month, year].join('/');
    }

    return string;
}

var messageList = React.createClass({
    componentWillMount: function(){
        fetch('http://localhost:8882/rest/messages')
            .then(res => res.json())
            .then(res => this.updateDataSource(res));
    },
    getInitialState: function(){
        return {
            dataSource: new ListView.DataSource({
                rowHasChanged: (r1, r2) => r1 !== r2
            })
        };
    },
    openChat: function(user){
        this.props.navigator.push({
            title: `${user.firstName} ${user.lastName}`,
            component: MessageView,
            passProps: {user}
        });
    },
    renderRow: function(person){
        var time = prettyTime(person.lastMessage.timestamp);
        return (
            <View>
                <TouchableHighlight onPress={this.openChat.bind(this, person.user)}>
                    <View>
                        <View style={styles.row}>
                            <Image source={{uri: person.user.picture}}
                                   style={styles.cellImage}/>
                            <View style={styles.textContainer}>
                                <Text style={styles.name} numberOfLines={1}>
                                    {person.user.firstName} {person.user.lastName}
                                </Text>
                                <Text style={styles.time} numberOfLines={1}>
                                    {time}
                                </Text>
                                <Text style={styles.lastMessage} numberOfLines={1}>
                                    {person.lastMessage.contents}
                                </Text>
                            </View>
                        </View>
                        <View style={styles.cellBorder}/>
                    </View>
                </TouchableHighlight>
            </View>
        );
    },
    updateDataSource: function(data){
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(data)
        });
    },
    render: function(){
        return (
            <View style={styles.container}>
                <ListView dataSource={this.state.dataSource}
                          renderRow={this.renderRow}/>
            </View>
        );
    }
});

var messagesTab = React.createClass({
    render: function(){
        return (
            <NavigatorIOS style={styles.container}
                          initialRoute={
                                        {
                                            title: 'Messages',
                                            component: messageList
                                        }
                                        }
            />
        );
    }
});

module.exports = messagesTab;
