import React, { useRef, useEffect } from "react";

import { FormItem } from 'azure-devops-ui/FormItem';
import { TextField, TextFieldWidth } from 'azure-devops-ui/TextField';
import { ObservableValue } from "azure-devops-ui/Core/Observable";

import { useSolution } from "../context/SolutionContext";

export function Input(props: any) {
    const { solution, updateSolution } = useSolution();
    const { currentStep } = useSolution();

    const observableRef = useRef<ObservableValue<string | undefined>>(
        new ObservableValue<string | undefined>("")
    );

    useEffect(() => {
        const currentValue = solution[currentStep]?.[props.title] ?? "";
        
        if (props.persona) {
            const personaValue = solution[currentStep]?.[props.persona]?.[props.title] ?? "";
            if (observableRef.current.value !== personaValue) {
                observableRef.current.value = personaValue;
            }
        } else if (observableRef.current.value !== currentValue) {
            observableRef.current.value = currentValue;
        }
    }, [solution, currentStep, props.title, props.persona]);

    function onChangeInput(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, value: string) {
        observableRef.current.value = value;

        if (props.persona) {
            updateSolution(currentStep, {
                [props.persona]: {
                    [props.title]: value
                }
            });
        } else {
            updateSolution(currentStep, {
                [props.title]: value
            });
        }
    }

    return (
        <FormItem
            className={`mb-5 pl-1 ${(props.fullW) ? `w-full pr-10` : 'w-[47%]'}`}
            label={props.title}
            message={props.description}
        >
            <TextField
                className="rounded-lg"
                value={observableRef.current}
                onChange={onChangeInput}
                multiline
                rows={props.row ?? '1'}
                width={TextFieldWidth.auto}
            />
        </FormItem>
    );
}

export default Input;