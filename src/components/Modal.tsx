import React, { JSX } from "react";

import { CustomDialog } from "azure-devops-ui/Dialog";
import { CustomHeader, HeaderTitleArea } from "azure-devops-ui/Header";
import "../styles/modal.scss";

export class Modal extends React.Component<{}, {}> {
    
    public render(): JSX.Element {
        return (
            <CustomDialog 
                onDismiss={() => {console.log('fechou')}} modal={true} 
                calloutContentClassName="work-item-form-dialog">
                
                <div className="w-1/3 pl-8 bg-slate-400 h-full">
                    <CustomHeader>
                        <HeaderTitleArea>
                            <div
                                className="flex-grom scroll-hidden"
                                style={{ marginRight: "16px" }}
                            >
                                <div
                                    className="title-l"
                                >
                                    New Solution modal - pse
                                </div>
                            </div>
                        </HeaderTitleArea>
                    </CustomHeader>
                    <ul className="steps steps-vertical">
                        <li className="step step-primary">Register</li>
                        <li className="step step-primary">Choose plan</li>
                        <li className="step">Purchase</li>
                        <li className="step">Receive Product</li>
                    </ul>                    
                </div>
            </CustomDialog>            
        )
    }
}

export default Modal