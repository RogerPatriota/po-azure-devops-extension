import { CustomHeader, HeaderTitleArea } from "azure-devops-ui/Header";
import React from "react";
import { JSX } from "react";

function FormBasic(){
    return(
        <div>
            <CustomHeader className="mt-8">
                <HeaderTitleArea>
                    <div className="text-3xl">
                        Basic Form Input
                    </div>
                    <div className="mt-4 pb-6 border-b-2 border-gray-400">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit numquam provident qui tenetur ea aliquam nulla delectus, consectetur nobis, velit sunt reiciendis nostrum dolorem voluptate sit maiores! Voluptatum, magnam deserunt.
                    </div>
                </HeaderTitleArea>
            </CustomHeader>
        </div>
    )
}

export default FormBasic