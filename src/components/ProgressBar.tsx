import React from "react";
import { IStep } from "./Modal";

type StepProps = {
    steps: IStep[];
}

export function ProgressBar({ steps }: StepProps) {
    return (
        <div className="progress-bar">
            <ul className="steps steps-vertical">
                {steps.map((step) => (
                    <li data-content="✓" className="step">{step.status}</li>
                ))}
            </ul>                
        </div>
    );
}

export default ProgressBar;