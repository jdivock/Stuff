'use strict';

var React = require('react-native');

var {
    View,
    Text,
    ActivityIndicatorIOS,
    StyleSheet,
    TouchableHighlight,
    Image
} = React;

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    loading: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    loadingText: {
        fontSize: 14,
        marginBottom: 20
    },
    header: {
        height: 50,
        backgroundColor: '#760004',
        paddingTop: 20,
        alignItems: 'center'
    },
    headerText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold'
    },
    person: {
        flex: 1,
        margin: 10,
        borderRadius: 3,
        overflow: 'hidden'
    },
    personInfo: {
        backgroundColor: '#fff',
        borderLeftColor: 'rgba(0,0,0,0.1)',
        borderLeftWidth: 1,
        borderRightColor: 'rgba(0,0,0,0.1)',
        borderRightWidth: 1,
        borderBottomColor: 'rgba(0,0,0,0.1)',
        borderBottomWidth: 1,
        padding: 10,
        alignItems: 'center',
        flexDirection: 'row'
    },
    personImage: {
        flex: 1,
        height: 200
    },
    personName: {
        fontSize: 18,
        flex: 1,
        paddingLeft: 5
    },
    personScore: {
        flex: 0.25,
        alignItems: 'center'
    },
    personScoreHeader: {
        color: 'rgba(0,0,0,0.3)',
        fontSize: 10,
        fontWeight: 'bold'
    },
    personScoreValue: {
        color: 'rgba(0,0,0,0.6)',
        fontSize: 16
    },
    won: {
        color: '#93C26D'
    },
    lost: {
        color: '#dd4b39'
    },
    noMoreContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    noMoreText: {
        flex: 1,
        fontSize: 20,
        fontWeight: 'bold'
    }

});

var Person = React.createClass({
    onPress: function(){
        this.props.onPress(this.props.person.userID);
    },
    render: function(){
        var person = this.props.person;

        return (
            <View style={styles.person}>
                <Image style={styles.personImage} source={ {uri: person.picture} } />
                <TouchableHighlight onPress={this.onPress} >
                    <View style={styles.personInfo}>
                        <Text style={styles.personName}>
                            {person.firstName} {person.lastName}
                        </Text>
                        <View style={styles.personScore}>
                            <Text style={styles.personScoreHeader}>
                                WON
                            </Text>
                            <Text style={[styles.personScoreValue,
                                          styles.won]}>
                                {person.won}
                            </Text>
                        </View>
                        <View style={styles.personScore}>
                            <Text style={styles.personScoreHeader}>
                                LOST
                            </Text>
                            <Text style={[styles.personScoreValue,
                                          styles.lost]}>
                                {person.won}
                            </Text>
                        </View>
                        <View style={styles.personScore}>
                            <Text style={styles.personScoreHeader}>
                                SCORE
                            </Text>
                            <Text style={styles.personScoreValue}>
                                {person.score}
                            </Text>
                        </View>
                    </View>
                </TouchableHighlight>
            </View>
        );
    }
});

var facemashTab = React.createClass({
    getInitialState: function(){
        return {
            list: [],
            currentIndex: 0
        };
    },
    componentWillMount: function(){
        fetch('http://localhost:8882/rest/mash')
            .then(res => res.json())
            .then(res => this.setState({ list:res }));
    },
    onPersonPress: function(userID){
        console.log(userID);
        fetch('http://localhost:8882/rest/mash', {
            method: 'PUT',
            headers: {
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                userID: userID
            })
        }).then(res => console.log(res));

        this.setState({
            currentIndex: this.state.currentIndex + 1
        });
    },
    render: function() {
        var contents;
        if(!this.state.list.length){
            contents = (
                <View style={styles.loading}>
                    <Text style={styles.loadingText}>Loading</Text>
                    <ActivityIndicatorIOS/>
                </View>
            );
        } else if(this.state.currentIndex >= this.state.list.length){
            contents = (
                <View style={styles.noMoreContainer}>
                    <Text style={styles.noMoreText}>
                        That's it champ, no more females
                    </Text>
                </View>
            );
        } else {
            var {list, currentIndex} = this.state;

            var record = list[currentIndex];

            var people = record.users.map(
                person => <Person person={person}
                                  onPress={this.onPersonPress}/>
            );

            contents = (
                <View style={styles.content}>
                    {people}
                </View>
            );
        }

        return (
            <View style={ styles.container }>
                <View style={ styles.header }>
                    <Text style={styles.headerText}>
                        FaceMash
                    </Text>
                </View>
                {contents}
            </View>
        );
    }
});

module.exports = facemashTab;
