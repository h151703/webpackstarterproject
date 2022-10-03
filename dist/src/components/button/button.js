import * as React from 'react';
import styles from './button.module.css';
var Button = function (props) {
    var type = props.type;
    var styletype = styles.type;
    return (React.createElement("button", { className: styletype, onClick: props.onClick }, props.text));
};
export default Button;
//# sourceMappingURL=button.js.map