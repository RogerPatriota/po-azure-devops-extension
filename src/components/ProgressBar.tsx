import React from "react";
import { IStep } from "./Modal";
import { CircleCheck } from "lucide-react";

type StepProps = {
    steps: IStep[];
    currentStep: number;
}

type ItemProps = {
    step: IStep;
    currentStep: number
}

function Item ({ step, currentStep}: ItemProps) {
    const content = step.step

    if ( content < currentStep  ) {
        return (
            <div className="flex items-center text-center">
                <CircleCheck size={20} color="green" className="checkColor mr-4 mt-1"/>
                <p className="text-xl text-center text-gray-400">{step.status}</p>
            </div>
        )
    }

    return (
        <div className={`flex items-center text-center ${content == currentStep ? 'pl-2': ''}`}>
            <CircleCheck size={20} className={"checkColor mr-4 mt-1"}/>
            <p className="text-xl text-center">{step.status}</p>
        </div>
    )
    

}

export function ProgressBar({ steps, currentStep }: StepProps) {
    return (
        <div className="pl-16 pt-40">
            <ul className="steps steps-vertical flex flex-col gap-6">
                {steps.map((step) => (
                    <Item step={step} currentStep={currentStep} />
                )
                )}
            </ul>                
        </div>
    );
}

export default ProgressBar;