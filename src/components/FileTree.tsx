import React, { useState } from "react"
import { Icon } from "azure-devops-ui/Icon"
import { NodePage } from "../types/FileTreeType"
import { Folders, FolderOpen, FileText, ChevronDown, ChevronRight } from "lucide-react"

type FileTreeProps = {
    nodes: NodePage[]
    selectedId: string
    onSelect: (id: string) => void
}

const FileTree: React.FC<FileTreeProps> = ({ nodes, selectedId, onSelect }) => {
    const [openId, setOpenId] = useState<string | null>(null)

    const toggleFolder = (id: string) => {
        setOpenId(prevId => (prevId === id ? null : id))
    }

    const hasChildren = (node: NodePage) => {
        return node.children && node.children.length > 0
    }

    return (
        <ul className="menu menu-md p-0">
            {nodes.map((node) => (
                <li key={node.id}>
                    <div
                        onClick={() => onSelect(node.id)}
                        className={`pt-0 cursor-pointer flex items-center gap-2 px-2 py-1 rounded ${
                            node.id === selectedId
                                ? 'bg-blue-200 hover:bg-blue-200'
                                : 'hover:bg-gray-200'
                        }`}
                    >
                        {hasChildren(node) ? (
                            <div className="flex flex-row gap-2 items-center">
                                {openId === node.id ? (
                                    <>
                                        <ChevronDown
                                            size={18}
                                            onClick={(e) => {
                                                e.stopPropagation()
                                                toggleFolder(node.id)
                                            }}
                                        />
                                        <FolderOpen size={18} />
                                    </>
                                ) : (
                                    <>
                                        <ChevronRight
                                            size={18}
                                            onClick={(e) => {
                                                e.stopPropagation()
                                                toggleFolder(node.id)
                                            }}
                                        />
                                        <Folders size={18} />
                                    </>
                                )}
                            </div>
                        ) : (
                            <FileText size={18} />
                        )}
                        {node.title}
                    </div>

                    {hasChildren(node) && openId === node.id && (
                        <div className="ml-4">
                            <FileTree
                                nodes={node.children}
                                selectedId={selectedId}
                                onSelect={onSelect}
                            />
                        </div>
                    )}
                </li>
            ))}
        </ul>
    )
}

export default FileTree