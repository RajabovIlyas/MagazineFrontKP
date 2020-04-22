import React from "react";
import classes from './FormsControls.module.css'

export const TextBox = ({input, meta, ...props}) => {
    const hasError=meta.touched && meta.error;
    return (
        <div className={hasError?classes.error:""}>
            <input  {...input} {...props}/>
            {hasError &&
            <span><br/>{meta.error}</span>}
        </div>
    )
};
