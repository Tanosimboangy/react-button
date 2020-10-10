import React from "react";
import './index.css';

function Button(props) {
    let classUsed = "";
    if (props.default) {
        classUsed = `${props.default}`
    } else if(props.variant) {
        classUsed = `${props.variant}` 
    } else if(props.disableShadow) {
        classUsed = `${props.disableShadow}`
    } else if(props.disabled) {
        classUsed = `${props.disabled}`
    } else if(props.variant) {
        classUsed = `${props.variant}`
    } else if(props.startIcon && props.color) {
        classUsed = `${props.startIcon} && ${props.color}`
    } else if(props.endIcon && props.color) {
        classUsed = `${props.endIcon}  && ${props.color}`
    } else if(props.sm && props.color) {
        classUsed = `${props.sm} && ${props.color}`
    } else if(props.md && props.color) {
        classUsed = `${props.md} && ${props.color}`
    } else if(props.lg && props.color) {
        classUsed = `${props.lg} && ${props.color}`
    } else if(props.default_color) {
        classUsed = `${props.default_color}`
    } else if(props.primary && props.color) {
        classUsed = `${props.primary} && ${props.color}`
    } else if(props.secondary) {
        classUsed = `${props.secondary}`
    } else if(props.danger) {
        classUsed = `${props.danger}`
    }
    return <button className={classUsed}>{props.children}</button>
}

export default Button;