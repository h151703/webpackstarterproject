import React, { useState } from 'react';
import Button from './src/components/button/button';
import { BtnTypes } from './src/components/button/button.types';
function App() {
    var _a = useState(BtnTypes.primary), typeButton = _a[0], setTypeButton = _a[1];
    var _b = React.useState('default text'), myText = _b[0], setMyText = _b[1];
    function onClick() {
        if (typeButton === BtnTypes.primary) {
            setTypeButton(BtnTypes.success);
            setMyText('Clicked');
        }
        else {
            setTypeButton(BtnTypes.primary);
        }
    }
    return (React.createElement("div", null,
        React.createElement(Button, { typeButton: typeButton, onClick: onClick, text: myText })));
}
export default App;
//# sourceMappingURL=app.js.map