import React from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';

class Match extends React.Component {
    render(){
        return (
            <View style={styles.container}>
                <Text>{this.props.date} | {this.props.league}</Text>
                <Text>Bolton Wanderers {this.props.kickOffTime} {this.props.opponent}</Text>
            </View>
        )
    }
}


export default function FixturesScreen(){
    return(
        <View>
            <Match date="Sat 16/11" league="Football League One" kickOffTime="15:00" opponent="MK Dons" />
            <Match date="Sat 23/11" league="Football League One" kickOffTime="15:00" opponent="Stanley" />
            <Match date="Thurs 07/12" league="Football League One" kickOffTime="15:00" opponent="AFC Wimbledon" />
        </View>
    );
} 

FixturesScreen.navigationOptions = {
    title: 'Fixtures'
}

const styles = StyleSheet.create({
    container : {
        padding: 15,
        backgroundColor: '#CDCDCD',
        borderColor: '#fff',
        borderStyle: 'solid',
        borderWidth: 10,
        textAlign: 'right',
    },
});