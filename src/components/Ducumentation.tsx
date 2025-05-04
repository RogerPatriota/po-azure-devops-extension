import React, { useEffect, useState } from "react"
import { ConfluenceService } from "../services/ConfluenceService"

function Documentation() {
    const [pages, setPages] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        const fetchPages = async () => {
            try {
                const data = await ConfluenceService.getPageFromParentID(284213969)
                setPages(data)
            } catch (error) {
                console.log('erro on api:', error )
            } finally {
                setLoading(false)
            }
        }

        fetchPages()

    }, [])

    if (loading) {
        <div>Carregando dados....</div>
    }

    return (
        <div className="max-h-[600px] overflow-y-auto p-4">
            {pages.length > 0 ? (
                <div>
                    {pages}
                </div>
            ) : (
                <div>
                    Paginas nao encontradas
                </div>    
            )}
        </div>
    )
}

export default Documentation