import React, { useContext } from "react";
import { Button } from "azure-devops-ui/Button";
import { useSolution, SolutionContext } from "../context/SolutionContext";

type TButtonProps = {
    text: string,
    primary?: boolean,
    iconProps?: {},
    changeStep : () => void;
    currentStep: number
}

export function ButtonStep(props: TButtonProps) {
    const { solution, updateSolution } = useSolution()

    function handleSubmit() {
        switch (props.currentStep) {
            case (1):
                console.log(1)
                console.log(solution)
                break
            case (2):
                console.log(2)
                break
            case (3):
                console.log(solution)
                break
        }
        props.changeStep()
    }

    return (
        <Button text={props.text} primary={props.primary} className="w-[115px]" iconProps={props.iconProps} onClick={handleSubmit}/>
    )
}

export default ButtonStep