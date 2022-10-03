import * as React from 'react';
import styles from './button.module.scss';
var Button = function (props) {
    return (React.createElement(React.Fragment, null,
        React.createElement("button", { className: styles[props.typeButton], onClick: props.onClick }, props.text)));
};
export default Button;
//# sourceMappingURL=button.js.map