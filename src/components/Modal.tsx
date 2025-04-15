import React, { JSX } from "react";

import { CustomDialog } from "azure-devops-ui/Dialog";
import { CustomHeader, HeaderTitleArea } from "azure-devops-ui/Header"
import { ProgressBar } from "./ProgressBar";
import "../styles/modal.scss";

export type IStep = {
    step: number;
    status: string;
    content: string;
}
interface IModalState {
    steps: IStep[];
}
export class Modal extends React.Component<{}, IModalState> {

    private steps: IStep[]

    constructor(props: {}) {
        super(props);
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
                                        className="title-l"
                                    >
                                        New Solution modal
                                    </div>
                                </div>
                            </HeaderTitleArea>
                        </CustomHeader>
                        <ProgressBar steps={this.steps} />          
                    </div>
                     
                    <div className="w-2/3 progress-contet">
                        <p className="text-white">teste</p>
                    </div>
                </div>                    
            </CustomDialog>            
        )
    }
}

export default Modal