import React from "react";
import {  FormItem  } from 'azure-devops-ui/FormItem'
import { TextField, TextFieldWidth } from 'azure-devops-ui/TextField'

export function Input(props: any) {
    return (
        <FormItem
            className="w-[47%] mb-6"
            label={props.title} 
            message={props.description}>
            <TextField 
                className=""
                multiline
                width={TextFieldWidth.auto}
            />
        </FormItem>
        // <div className="w-[47%]">
        //     <div className="label">
        //         <span className="label-text">{props.title}</span>
        //     </div>
        //     <input type="text" placeholder="Type here" className="h-12 pl-3 rounded-lg border-gray-400 border-2 w-full" />
        //     <div className="label">
        //         <span className="label-text-alt text-gray-500">{props.description}</span>
        //     </div>
        // </div>
    )
}

export default Input;