/**
 * M-tronome Open Source App
 * https://github.com/everton0991/m-tronome
 *
 * @format
 * @flow
 */
import React, { Component } from 'react'
import { SafeAreaView } from 'react-native'
import styles from './styles'
import Metronome from './screens/Metronome'

type Props = {}

export default class App extends Component<Props> {
  componentDidMount() {
    console.log('Mounted')
  }

  render() {
    return (
      <SafeAreaView style={styles.main}>
        <Metronome />
      </SafeAreaView>
    )
  }
}
