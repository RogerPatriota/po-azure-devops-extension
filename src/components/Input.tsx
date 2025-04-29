import React from "react";

import { FormItem } from 'azure-devops-ui/FormItem';
import { TextField, TextFieldWidth } from 'azure-devops-ui/TextField';
import { ObservableValue } from "azure-devops-ui/Core/Observable";

import { useSolution } from "../context/SolutionContext";

export function Input(props: any) {
    const { solution, updateSolution } = useSolution();
    const { currentStep, updateCurrentStep } = useSolution();

    const currentValue = solution[currentStep]?.[props.title] ?? "";
    const observable = new ObservableValue<string | undefined>(currentValue);

    function onChangeInput(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, value: string) {
        observable.value = value;

        updateSolution(currentStep, {
            [props.title]: value
        });
    }

    return (
        <FormItem
            className="w-[47%] mb-6"
            label={props.title}
            message={props.description}
        >
            <TextField
                value={observable}
                onChange={onChangeInput}
                multiline
                rows={props.row}
                width={TextFieldWidth.auto}
            />
        </FormItem>
    );
}

export default Input;