import React from "react"
import "../styles/question.scss"
import Input from "./Input"

function Questions(props: any) {

    const q = []
    for (let i = 0; i < props.nQuestions; i++) {
        q.push(
            <div key={i} className="collapse collapse-arrow question border-b-8">
                <input type="radio" name="my-accordion-2"/>
                <div className="collapse-title text-lg font-medium">Question #{i+1}</div>
                <div className="collapse-content">
                    <Input title={'Problems'} fullW={true} row='4'  description={'Descripe your solution title'}/>
                </div>
            </div>
        )
    }

    return (
        <div className="flex flex-col gap-2 border-3 border-green-600">
            {q}       
        </div>

    )
}

export default Questions