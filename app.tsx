import React, { useState } from 'react'
import Button from './src/components/button/button'
import { BtnTypes } from './src/components/button/button.types'
function App() {
  const [typeButton, setTypeButton] = useState(BtnTypes.primary)
  const [myText, setMyText] = React.useState('default text')

  function onClick() {
    if (typeButton === BtnTypes.primary) {
      setTypeButton(BtnTypes.success)
      setMyText('Clicked')
    } else {
      setTypeButton(BtnTypes.primary)
    }
  }

  return (
    <div>
      <Button typeButton={typeButton} onClick={onClick} text={myText} />
    </div>
  )
}
export default App
