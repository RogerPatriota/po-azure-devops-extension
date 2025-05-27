import React, { useEffect, useState } from "react"
import { ConfluenceService } from "../services/confluenceService"
import FileTree from "./FileTree"
import { NodePage } from "../types/FileTreeType"

import { CustomHeader, HeaderTitleArea } from "azure-devops-ui/Header"
import TemplateInput from "./TemplateInput"
import "../styles/main.scss"
import { timeStamp } from "console"


const getPages = async () => {
    const data = await ConfluenceService.getPageFromParentID(347397859)
    const response = await data
    
    return response.pages
}

const CACHE_DURATION = 14 * 60 * 60 * 1000

function Documentation() {
    const [pages, setPages] = useState<NodePage[]>([])
    const [loading, setLoading] = useState(true)
    const [selectedPage, setSelectedPage] = useState("")

    useEffect(() => {

        const loadPages = async () => {
            const cacheLocal = localStorage.getItem("pagesCache")

            if (cacheLocal) {
                const {data, timestamp } = JSON.parse(cacheLocal)
                const now = Date.now()

                if (now - timestamp < CACHE_DURATION) {
                    setPages(data)
                    setLoading(false)
                    return;
                }
            }

            try {
                const data = await getPages()
                setPages(data)
                localStorage.setItem(
                    "pagesCache",
                    JSON.stringify({ data: data, timestamp: Date.now() })
                )
            } catch (error) {
                console.log('erro on api:', error )
            } finally {
                setLoading(false)
            }
        }

        loadPages()

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
            <div className="max-h-[50vh] h-[50vh] flex flex-row y gap-4 p-4">
                {loading ? (
                    <span className="loading loading-spinner m-auto flex justify-center items-center w-20 bg-blue"></span>
                ) : (
                    <div className="w-full flex flex-row gap-4">
                        <div className="w-[50%] pt-2 pl-4 pr-8 overflow-auto border-2 rounded-md ">
                            <h1 className="mb-1 text-lg">Where to create</h1>
                            <h3 className="mb-3">Select the page that the doc will b</h3>
                            {!loading && pages.length > 0 && (
                                <div>
                                    <FileTree nodes={pages} selectedId={selectedPage} onSelect={setSelectedPage} />
                                </div>
                            )}
                            {!loading && pages.length == 0 && (
                                <div>
                                    Paginas nao encontradas
                                </div>    
                            )}                    
                        </div>
                        <div className="w-[50%] border-2 rounded-md pt-2 pl-4 pr-8 ">
                            <h1 className="mb-1 text-lg">Where to create</h1>
                            <h3 className="mb-3">Select the page that the doc will b</h3>
                            <div className="">
                                <TemplateInput />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}


export default Documentation