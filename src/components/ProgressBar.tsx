import React from "react";
import { IStep } from "./Modal";
import { CircleCheck } from "lucide-react";

type StepProps = {
    steps: IStep[];
    currentStep: number;
}

export function ProgressBar({ steps, currentStep }: StepProps) {
    return (
        <div className="pl-16 pt-40">
            <ul className="steps steps-vertical flex flex-col gap-6">
                {steps.map((step) => (
                    <div key={step.step} className="flex items-center text-center">
                        {console.log(currentStep)}
                        <CircleCheck size={20} className="checkColor mr-4 mt-1"/>
                        <p className="text-xl text-center">{step.status}</p>                        
                    </div>
                    // <li data-content="✓" className="step step-primary">{step.status}</li>
                ))}
            </ul>                
        </div>
    );
}

export default ProgressBar;