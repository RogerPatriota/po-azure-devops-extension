import React from "react"

function TemplateInput() {
    // TODO: allow to select de radio from any espaces of the divs
    // TODO: style radio circle and make the border color fix
    return (
        <div className="flex flex-col gap-5">
            <div className="border-2 hover:border-blue-400 rounded-lg p-4 flex gap-3">
                <input type="radio" name="teste" id="PO" />
                <label htmlFor="PO">PO TEMPLATE</label>                
            </div>
            <div className="border-2 hover:border-blue-400 rounded-lg p-4 flex gap-3">
                <input type="radio" name="teste" id="PO2" />
                <label htmlFor="PO2">OUTRO TEMPLATE</label>                
            </div>
        </div>
    )
}

export default TemplateInput