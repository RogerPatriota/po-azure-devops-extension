import { CustomHeader, HeaderTitleArea } from "azure-devops-ui/Header";
import React from "react";
import Input from "./Input";

export function FormDetails() {
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
            <div className="container max-h-[50vh] overflow-auto pl-5 pr-7">
                <label className="form-control w-full max-h-[550px]">
                    <Input title={'Problems'} fullW={true} row='4'  description={'Descripe your solution title'}/>
                    <Input title={'Need'} fullW={true} row='4'  description={'Descripe your solution title'}/>
                    <Input title={'Solution Description'} fullW={true} row='4' description={'Descripe your solution title'}/>
                    <Input title={'KPIs'} fullW={true} row='4' description={'Descripe your solution title'}/>
                </label>
            </div>
        </div>
    )
}

export default FormDetails