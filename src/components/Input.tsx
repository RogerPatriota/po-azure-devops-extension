import React from "react";

import { FormItem } from 'azure-devops-ui/FormItem';
import { TextField, TextFieldWidth } from 'azure-devops-ui/TextField';
import { ObservableValue } from "azure-devops-ui/Core/Observable";

import { useSolution } from "../context/SolutionContext";

export function Input(props: any) {
    const { solution, updateSolution } = useSolution();
    const { currentStep } = useSolution();

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
            className={`mb-5 pl-1 ${(props.fullW) ? `w-full pr-10` : 'w-[47%]'}`}
            label={props.title}
            message={props.description}
        >
            <TextField
                className="rounded-md"
                value={observable}
                onChange={onChangeInput}
                multiline
                rows={props.row ?? '1'}
                width={TextFieldWidth.auto}
            />
        </FormItem>
    );
}

export default Input;