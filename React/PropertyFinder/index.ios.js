'use strict';

var React = require('react-native'),
    SearchPage = require('./SearchPage');

var {
    Text,
    NavigatorIOS,
    StyleSheet,
    Component,
    AppRegistry
} = React;

var styles = StyleSheet.create({
    text: {
        color: 'black',
        backgroundColor: 'white',
        fontSize: 30,
        margin: 80
    },
    container: {
        flex: 1
    }
});


class HelloWorld extends Component {
    render(){
        return (
            <Text style={styles.text}>
                Hello World (again)
            </Text>
        );
    }
}

class PropertyFinderApp extends Component {
    render() {
        return (
            <NavigatorIOS style={styles.container}
                          initialRoute={{
                                        title: 'Property Finder',
                                        component: SearchPage
                                        }}/>
        );
    }
}


AppRegistry.registerComponent('PropertyFinder', function() { return PropertyFinderApp });
