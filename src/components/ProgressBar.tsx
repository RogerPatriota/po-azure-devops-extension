import React from "react";
import { IStep } from "./Modal";
import { CircleCheck, CircleChevronDown, CircleChevronRight } from "lucide-react";

type StepProps = {
    steps: IStep[];
    currentStep: number;
}

type IIem = {
    step: IStep;
    currentStep: number;
}

function Item({ step, currentStep }: IIem) {
    if (step.step === currentStep) {
        return (
            <div key={step.step} className="flex items-center text-center pl-4">
                <CircleChevronDown size={26} className="checkColor mr-4 mt-1"/>
                <p className="text-xl text-center">{step.status}</p>                        
            </div>
        ) 
    } else if (step.step < currentStep) {
        return (
            <div key={step.step} className="flex items-center text-center">
                <CircleCheck size={26} color="green" className="checkColor mr-4 mt-1"/>
                <p className="text-xl text-center text-gray-500">{step.status}</p>                        
            </div>
        )
    }

    return (
        <div key={step.step} className="flex items-center text-center">
            <CircleChevronRight size={26} className="checkColor mr-4 mt-1"/>
            <p className="text-xl text-center">{step.status}</p>                        
        </div>
    )
}

export function ProgressBar({ steps, currentStep }: StepProps) {
    return (
        <div className="pl-16 pt-20">
            <ul className="steps steps-vertical flex flex-col gap-6">
                {steps.map((step) => (
                    <Item key={step.step} step={step} currentStep={currentStep}/>
                ))}
            </ul>                
        </div>
    );
}

export default ProgressBar;