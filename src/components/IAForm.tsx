import React, { useEffect, useRef, useState } from "react";
import { CustomHeader, HeaderTitleArea } from "azure-devops-ui/Header";

import Questions from "./Questions";
import "../styles/iaform.scss"

function IAForm() {
    const tabRef = useRef<HTMLDivElement | null>(null)
    const [activeTab, setActiveTab ] = useState(1)
    const [tabWidth, setTabWidth] = useState(0)

    const tabs = [
        {
            id: 1,
            persona: 'Product Owner',
            conent: <Questions />
        },
        {
            id: 2,
            persona: 'Stakeholders',
            conent: <Questions nQuestions={3}/>
        },
        {
            id: 3,
            persona: 'CX Expert',
            conent: <Questions nQuestions={3}/>
        }
    ]

    const updateWidth = () => {
        if (tabRef.current) {
            const parentWidth = tabRef.current.getBoundingClientRect().width
            const numberOfTabs = tabs.length
            const newTabWidt = parentWidth / numberOfTabs
            setTabWidth(newTabWidt)
        }
    }

    useEffect(() => {
        const resizeObserver = new ResizeObserver(updateWidth)

        if (tabRef.current) {
            resizeObserver.observe(tabRef.current)
        }

        return () => {
            if (tabRef.current) {
                resizeObserver.unobserve(tabRef.current)
            }
        }

    }, [tabs.length])
    
    return (
        <div>
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
            </div>
            <div className="max-h-[50vh] pl-5 pr-7 flex flex-col gap-3 overflow-y-scroll overflow-x-hidden">
                <div role="tablist" ref={tabRef} className="tab-group w-full h-12 flex items-center justify-evenly mt-4 
                relative border-2 rounded-lg py-4">
                    {tabs.map((tab, index) => (
                        <div key={index}>
                            <button
                                key={index}
                                className="tab relative text-base"
                                style={{
                                    width: tabWidth
                                }}
                                onClick={
                                    () => {setActiveTab(index)}
                                }
                            >
                                {tab.persona}    
                            </button>                      
                        </div>
                    ))}
                    <div 
                        className="tab-active absolute inset-0 transition-all"
                        style={{
                            width: tabWidth - 10,
                            translate: `${ activeTab * tabWidth}px 0px`
                        }}
                    />
                </div>
                <div className="relative">
                    {tabs[activeTab].conent}  
                </div>                
            </div>

        </div>   
    )
}

export default IAForm