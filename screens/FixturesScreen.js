import React from 'react';
import {Text, View, Button, StyleSheet, Image, ScrollView} from 'react-native';

import MK_Dons from '../assets/images/MK_DONS_LOGO.png';
import Stanley from '../assets/images/STANLEY_LOGO.png';
import AFC from '../assets/images/AFC_WIMBLEDON_LOGO.png';

class Match extends React.Component {
    render(){
        return (
            <View style={styles.outerContainer}>
                <Text style={styles.league}>{this.props.date} | {this.props.league}</Text>
                <View style={styles.innerContainer}>
                    <Image style={styles.BoltonLogo} source={require('../assets/images/BWFC_LOGO.png')}/>
                    <Text style={styles.kickOff}>{this.props.kickOffTime}</Text>
                    <Image style={styles.opponentLogo} source={this.props.opponentLogo} />
                </View>
                <View style={styles.text}>
                    <Text>Bolton Wanderers</Text>
                    <Text>{this.props.opponent}</Text>
                </View>
            </View>
        )
    }
}


export default function FixturesScreen(){
    return(
        <ScrollView>
            <Match date="Sat 16/11" league="Football League One" kickOffTime="15:00" opponentLogo={MK_Dons} opponent="MK Dons" />
            <Match date="Sat 23/11" league="Football League One" kickOffTime="15:00" opponentLogo={Stanley} opponent="Stanley" />
            <Match date="Thurs 07/12" league="Football League One" kickOffTime="15:00" opponentLogo={AFC} opponent="AFC Wimbledon" />
        </ScrollView>
    );
} 

FixturesScreen.navigationOptions = {
    title: 'Fixtures'
}

const styles = StyleSheet.create({
    outerContainer : {
        padding: 15,
        backgroundColor: '#CDCDCD',
        borderColor: '#fff',
        borderStyle: 'solid',
        borderWidth: 10,
    },
    innerContainer : {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    BoltonLogo : {
        width: 50,
        height: 50,
    },
    opponentLogo : {
        width: 50, 
        height: 50,
    },
    text : {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    kickOff : {
        padding: 15,
        backgroundColor: '#fff',
        margin: 10,
    },
    league : {
        margin:8,
        fontWeight: 'bold',

    }
});