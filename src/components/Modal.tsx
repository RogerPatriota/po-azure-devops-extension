import React from "react";

import { CustomDialog } from "azure-devops-ui/Dialog";
import { CustomHeader, HeaderTitleArea } from "azure-devops-ui/Header";
import { ProgressBar } from "./ProgressBar";
import "../styles/modal.scss";

import FormBasic from "./FomBasic";
import ButtonStep from "./ButtonStep";
import FormDetails  from "./FormDetails";
import IAForm from "./IAForm"

import { useSolution } from "../context/SolutionContext";

export type IStep = {
    step: number;
    status: string;
    content: JSX.Element | string;
}

const Modal: React.FC = () => {
    const { currentStep, updateCurrentStep } = useSolution();

    const steps: IStep[] = [
        {
            step: 1,
            status: "Initial information",
            content: <FormBasic />
        },
        {
            step: 2,
            status: "Details",
            content: <FormDetails />
        },
        {
            step: 3,
            status: "Personas",
            content: <IAForm />
        },
        {
            step: 4,
            status: "Documentation",
            content: "Step 4"
        }
    ];

    const changeNextStep = () => {
        if (currentStep < steps.length) {
            updateCurrentStep(currentStep + 1);
        }
    };

    const changePreviousStep = () => {
        if (currentStep > 1 && currentStep <= steps.length) {
            updateCurrentStep(currentStep - 1);
        }
    };

    return (
        <CustomDialog
            onDismiss={() => { console.log('Closed') }}
            modal={true}
            calloutContentClassName="work-item-form-dialog flex flex-row"
        >
            <div className="flex flex-row h-full">
                <div className="w-1/4 flex flex-col progress-bar">
                    <CustomHeader className="border-b-2 border-gray-400 pt-4 ml-6 mr-6">
                        <HeaderTitleArea>
                            <div
                                className="flex-grow scroll-hidden text-center mt-4 justify-center"
                                style={{ marginRight: "16px" }}
                            >
                                <div className="text-2xl text-gray-700">
                                    New Solution Modal
                                </div>
                            </div>
                        </HeaderTitleArea>
                    </CustomHeader>

                    <ProgressBar steps={steps} currentStep={currentStep} />
                </div>

                <div className="w-3/4 flex flex-col max-h-full progress-content">
                    {steps[currentStep - 1]?.content}

                    <div className="flex items-end justify-between h-full mt-2 mr-6 ml-6 mb-10">
                        <ButtonStep
                            text="Back"
                            changeStep={changePreviousStep}
                            iconProps={{ iconName: "back" }}
                            currentStep={currentStep}
                        />
                        <ButtonStep
                            text="Next"
                            primary={true}
                            changeStep={changeNextStep}
                            currentStep={currentStep}
                        />
                    </div>
                </div>
            </div>
        </CustomDialog>
    );
};

export default Modal;