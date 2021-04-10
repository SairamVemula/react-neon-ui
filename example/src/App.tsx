import React from 'react'

import { Button, Text, A } from 'react-neon-ui'
import 'react-neon-ui/dist/index.css'

const App = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', flex: 1, minHeight: '100vh', justifyContent: 'space-around', alignItems: 'center', background: '#031321', fontFamily: 'consolas' }}>
      <div style={{ display: 'flex', width: '100%', justifyContent: 'space-around', alignItems: 'center', background: '#031321', fontFamily: 'consolas' }}>
        <Button color="Blue" />
        <Button color="Lime" background='fill' />
        <Button color="Green" background='outlined' />
      </div>
      <Text text="This Neon Text" color='Red' style={{ fontSize: '6rem' }} />
      <div style={{ display: 'flex', width: '100%', justifyContent: 'space-around', alignItems: 'center', background: '#031321', fontFamily: 'consolas' }}>
        <A />
        <A color="Carrot" underline />
      </div>
    </div >
  )
}

export default App
