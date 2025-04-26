import { CustomHeader, HeaderTitleArea } from "azure-devops-ui/Header";
import React from "react";
import Input from "./Input";

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
            <div className="pl-5 pr-7">
                <label className="form-control w-full">
                    <Input title={'Title'} value={'title'} description={'Descripe your solution title'}/>
                    <div className="flex gap-7">
                        <Input title={'What to do'} description={'Describe your solution'}/>
                        <Input title={'Why to do'} description={'Describe your solution'}/>
                    </div>
                    <Input title={'Title'} description={'Descripe your solution title'}/>
                </label>
            </div>
        </div>
    )
}

export default FormBasic