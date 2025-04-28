import React from "react";
import {  FormItem  } from 'azure-devops-ui/FormItem'
import { TextField, TextFieldWidth } from 'azure-devops-ui/TextField'
import { ObservableValue } from "azure-devops-ui/Core/Observable";

const simpleObservable = new ObservableValue<string>("");

export function Input(props: any) {

    function onChangeInput(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, value: string) {
        simpleObservable.value = value
    }

    return (
        <FormItem
            className="w-[47%] mb-6"
            label={props.title} 
            message={props.description}>
            <TextField 
                className=""
                value={simpleObservable.value}
                onChange={onChangeInput}
                multiline
                width={TextFieldWidth.auto}
            />
        </FormItem>
    )
}

export default Input;