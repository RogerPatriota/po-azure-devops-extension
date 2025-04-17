import React, { JSX, useState } from "react";

import { CustomDialog } from "azure-devops-ui/Dialog";
import { CustomHeader, HeaderTitleArea } from "azure-devops-ui/Header"
import { ProgressBar } from "./ProgressBar";
import "../styles/modal.scss";
import { Button } from "azure-devops-ui/Button";

export type IStep = {
    step: number;
    status: string;
    content: string;
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
                content: "Step 1"
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
            }
            ]
        };
    
    public render(): JSX.Element {
        return (
            <CustomDialog 
                onDismiss={() => {console.log('fechou')}} modal={true} 
                calloutContentClassName="work-item-form-dialog flex flex-row">
                
                <div className="flex flex-row h-full">

                    <div className="w-1/3 pl-8 flex flex-col progress-bar">
                        <CustomHeader>
                            <HeaderTitleArea>
                                <div
                                    className="flex-grom scroll-hidden"
                                    style={{ marginRight: "16px" }}
                                >
                                    <div
                                        className="title-m"
                                    >
                                        New Solution modal
                                    </div>
                                </div>
                            </HeaderTitleArea>
                        </CustomHeader>
                        <ProgressBar steps={this.steps} currentStep={this.state.currentStep}/>          
                    </div>
                     
                    <div className="w-2/3 flex flex-col progress-contet">
                        { this.steps[this.state.currentStep - 1].content }
                        <div className="flex items-end justify-between h-full mr-6 ml-6 mb-10">
                            <Button text="Back" iconProps={{ iconName: "back"}} onClick={this.changePreviusStep} />
                            <Button text="Next" primary={true} onClick={this.changeNextStep} />
                        </div>
                    </div>
                </div>                    
            </CustomDialog>            
        )
    }

    private changeNextStep = () => {
        if (this.state.currentStep < this.steps.length) {
            console.log(this.state.currentStep)
            this.setState({
                currentStep: this.state.currentStep + 1
            })
        }
    }

    private changePreviusStep = () => {
        if (this.state.currentStep > 1 && this.state.currentStep <= this.steps.length) {
            console.log(this.state.currentStep)
            this.setState({
                currentStep: this.state.currentStep - 1
            })
        }
    }
}

export default Modal