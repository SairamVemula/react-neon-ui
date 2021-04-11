# react-neon-ui

> This is React UI Library with neon Theme

[![NPM](https://img.shields.io/npm/v/react-neon-ui.svg)](https://www.npmjs.com/package/react-neon-ui) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-neon-ui
```

## Usage

```tsx
import React from 'react'

import { Button, Text, A, Checkbox, Select } from 'react-neon-ui'
import 'react-neon-ui/dist/index.css'

const App = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', flex: 1, minHeight: '100vh', justifyContent: 'space-around', alignItems: 'center', background: '#031321', fontFamily: 'consolas' }}>
      <div style={{ display: 'flex', width: '100%', justifyContent: 'space-around', alignItems: 'center', background: '#031321', fontFamily: 'consolas' }}>
        <Select color="Magenta" />
        <Select color="Carrot" />
      </div>
      <div style={{ display: 'flex', width: '100%', justifyContent: 'space-around', alignItems: 'center', background: '#031321', fontFamily: 'consolas' }}>
        <Button color="Blue" />
        <Button color="Lime" background='fill' />
        <Button color="Green" background='outlined' />
      </div>
      <Text text="This Neon Text" color='Red' style={{ fontSize: '6rem' }} />
      <div style={{ display: 'flex', width: '100%', justifyContent: 'space-around', alignItems: 'center', background: '#031321', fontFamily: 'consolas' }}>
        <A />
        <A color="Carrot" underline />
        <Checkbox color="Lime" />
      </div>
    </div >
  )
}

export default App
```

## License

MIT © [https://github.com/SairamVemula](https://github.com/https://github.com/SairamVemula)
