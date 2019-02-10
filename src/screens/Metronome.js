/**
 * @flow
 */
import React, { Component } from 'react'
import { Text } from 'react-native'
import { Wrapper, Container, Divider } from '../common'

type Props = {}

class Metronome extends Component<Props> {
  componentDidMount() {
    console.log('Metronome Container')
  }

  render() {
    return (
      <Wrapper>
        <Container>
          <Text>
            Frequency
          </Text>
        </Container>
        <Divider />
        <Container>
          <Text>
            Tempo
          </Text>
        </Container>
        <Divider />
        <Container>
          <Text>
            BPM
          </Text>
        </Container>
        <Divider />
        <Container>
          <Text>
            Play
          </Text>
        </Container>
      </Wrapper>
    )
  }
}

export default Metronome
