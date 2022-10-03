import * as React from 'react';
import styles from './button.module.css';
var Button = function (props) {
    return (React.createElement("button", { className: styles.btn1, onClick: props.onClick }, props.title));
};
export default Button;
//# sourceMappingURL=button.js.map