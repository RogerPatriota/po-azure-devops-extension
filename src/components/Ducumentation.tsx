import React, { useEffect, useState } from "react"
import { ConfluenceService } from "../services/confluenceService"
import FileTree from "./FileTree"
import { NodePage } from "../types/FileTreeType"
import { CustomHeader, HeaderTitleArea } from "azure-devops-ui/Header"

function Documentation() {
    const [pages, setPages] = useState<NodePage[]>([])
    const [loading, setLoading] = useState(true)
    const [selectedPage, setSelectedPage] = useState("")

    useEffect(() => {

        const fetchPages = async () => {
            try {
                // const data = await ConfluenceService.getPageFromParentID(347397859)
                const response = await fetch('http://127.0.0.1:8000/async');
                const data = await response.json();
                setPages(data.message);
            } catch (error) {
                console.log('erro on api:', error )
            } finally {
                
            }
        }

        fetchPages()

    }, [])

    return (
        <div>
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
            <div className="max-h-[600px] overflow-y-auto p-4 mt-7 flex justify-center items-center">
                {loading && (
                    <span className="loading loading-spinner flex justify-center items-center w-20"></span>
                )}
                {/* {!loading && pages.length > 0 && (
                    <div>
                        <FileTree nodes={pages} selectedId={selectedPage} onSelect={setSelectedPage} />
                    </div>
                )}
                {!loading && pages.length == 0 && (
                    <div>
                        Paginas nao encontradas
                    </div>    
                )} */}
            </div>
        </div>
    )
}


export default Documentation