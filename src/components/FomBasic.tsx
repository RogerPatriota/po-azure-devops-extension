import React from "react";
import { CustomHeader, HeaderTitleArea } from "azure-devops-ui/Header";
import Input from "./Input";

function FormBasic(){
    return(
        <div className="">
            <CustomHeader className="mt-8">
                <HeaderTitleArea>
                    <div className="text-3xl">
                        Initial Form Information
                    </div>
                    <div className="mt-4 pb-6 border-b-2 border-gray-400">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit numquam provident qui tenetur ea aliquam nulla delectus, consectetur nobis, velit sunt reiciendis nostrum dolorem voluptate sit maiores! Voluptatum, magnam deserunt.
                    </div>
                </HeaderTitleArea>
            </CustomHeader>
            <div className="max-h-[50vh] overflow-auto pl-5 pr-7">
                <label className="form-control w-full">
                    <Input title={'Title'} fullW={true} description={'Descripe your solution title'}/>
                    <div className="flex gap-7">
                        <Input title={'What to do'} row='4' description={'Describe your solution'}/>
                        <Input title={'Why to do'} row='4' description={'Describe your solution'}/>
                    </div>
                    <div className="flex gap-7">
                        <Input title={'Frequency'} description={'Descripe your solution title'}/>
                        <Input title={'Time dedicated'} description={'Descripe your solution title'}/>                        
                    </div>
                    <div className="flex gap-7">
                        <Input title={'Requester'} description={'Descripe your solution title'}/>
                        <Input title={'Requester Area'} description={'Descripe your solution title'}/>                        
                    </div>
                </label>
            </div>
        </div>
    )
}

export default FormBasic