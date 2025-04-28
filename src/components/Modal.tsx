import React, { JSX, useState } from "react";

import { CustomDialog } from "azure-devops-ui/Dialog";
import { CustomHeader, HeaderTitleArea } from "azure-devops-ui/Header"
import { ProgressBar } from "./ProgressBar";
import "../styles/modal.scss";

import FormBasic from "./FomBasic";
import ButtonStep from "./ButtonStep";

export type IStep = {
    step: number;
    status: string;
    content: JSX.Element | string;
}

interface State {
    currentStep: number;
}
export class Modal extends React.Component<{}, State> {

    private steps: IStep[]    

    constructor(props: {}) {
        super(props);
        this.state = {
            currentStep: 1
        }
        this.steps = [
            {
                step: 1,
                status: "initial",
                content: <FormBasic />
            },
            {
                step: 2,
                status: "second",
                content: "Step 2"
            },
            {
                step: 3,
                status: "third",
                content: "Step 3"
            },
            {
                step: 4,
                status: "fourth",
                content: "Step 4"
            }
        ]
    };
    
    public render(): JSX.Element {
        return (
            <CustomDialog 
                onDismiss={() => {console.log('fechou')}} modal={true} 
                calloutContentClassName="work-item-form-dialog flex flex-row">
                
                <div className="flex flex-row h-full">

                    <div className="w-1/4 flex flex-col progress-bar">
                        <CustomHeader className="border-b-2 border-gray-400 pt-4 ml-6 mr-6 ">
                            <HeaderTitleArea>
                                <div
                                    className="flex-grom scroll-hidden text-center mt-4 justify-center"
                                    style={{ marginRight: "16px" }}
                                >
                                    <div className="text-2xl text-gray-700">
                                        New Solution modal
                                    </div>
                                </div>
                            </HeaderTitleArea>
                        </CustomHeader>
                        <ProgressBar steps={this.steps} currentStep={this.state.currentStep}/>          
                    </div>
                     
                    <div className="w-3/4 flex flex-col progress-contet">
                        { this.steps[this.state.currentStep - 1].content }
                        <div className="flex items-end justify-between h-full mr-6 ml-6 mb-10">
                            <ButtonStep text={"Back"} changeStep={this.changePreviusStep} iconProps={{ iconName: "back"}} currentStep={this.state.currentStep} />
                            <ButtonStep text={"Next"} primary={true} changeStep={this.changeNextStep} currentStep={this.state.currentStep} />
                        </div>
                    </div>
                </div>                    
            </CustomDialog>            
        )
    }

    private changeNextStep = () => {
        if (this.state.currentStep < this.steps.length) {
            this.setState({
                currentStep: this.state.currentStep + 1
            })
        }
    }

    private changePreviusStep = () => {
        if (this.state.currentStep > 1 && this.state.currentStep <= this.steps.length) {
            this.setState({
                currentStep: this.state.currentStep - 1
            })
        }
    }
}

export default Modal