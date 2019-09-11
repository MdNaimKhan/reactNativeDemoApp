import React, { Component } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native'


export default class App extends Component {


  constructor() {

    super();
    this.state = {}

  }

  render() {

    let rows = []
    let nums = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [0, '.', '=']]



    for (let i = 0; i < 4; i++) {
      let row = []
      for (let j = 0; j < 3; j++) {
        row.push(
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}>{nums[i][j]}</Text>
          </TouchableOpacity>


        )
      }
      rows.push(<View style={styles.row}>{row}</View>)
    }


    let operations = ['+', '-', '*', '/']

    let ops = []

    for (let i = 0; i < 4; i++) {

      ops.push(

        <TouchableOpacity style={styles.btn}>
          <Text style={[styles.btnText, styles.white]} >{operations[i]}</Text>
        </TouchableOpacity>

      )
    }


    return (
      <View style={styles.container}>
        <View style={styles.result}>

          <Text style={styles.resultText}>11</Text>


        </View>
        <View style={styles.calculation}>

          <Text style={styles.calculationText}>66</Text>

        </View>
        <View style={styles.buttons}>
          <View style={styles.numbers}>
            {rows}
          </View>




          <View style={styles.operations}>
            {ops}


          </View>
        </View>
      </View>
    );

  }



}


const styles = StyleSheet.create({

  container: {
    flex: 1
  },
  btn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch'

  },
  btnText: {

    fontSize: 30,

  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'


  },
  white: {
    color: 'white'
  },

  result: {
    flex: 2,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  resultText: {
    fontSize: 56,
    fontWeight: 'normal',
    color: 'black'
  },
  calculation: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  calculationText: {
    fontSize: 42,
    fontWeight: 'normal',
    color: 'black'

  },
  buttons: {
    flex: 7,
    flexDirection: 'row'
  },
  numbers: {
    flex: 3,
    backgroundColor: '#F5F5F5'
  },

  operations: {
    flex: 1,
    justifyContent: 'space-around',
    backgroundColor: 'black'
  }



})