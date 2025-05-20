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
        <ul className="menu menu-md p-0 w-full">
            {nodes.map((node) => (
                <li key={node.id}>
                    <div
                        onClick={() => onSelect(node.id)}
                        className={`cursor-pointer flex items-center gap-2 px-4 py-2 rounded-xl ${
                            node.id === selectedId
                                ? 'bg-cyan-100 border border-cyan-500 hover:bg-cyan-200'
                                : 'hover:bg-gray-200'
                        }`}
                    >
                        {hasChildren(node) ? (
                            <div className="flex flex-row gap-2 items-center">
                                {openId === node.id ? (
                                    <>
                                        <ChevronDown
                                            size={22}
                                            strokeWidth={1}
                                            onClick={(e) => {
                                                e.stopPropagation()
                                                toggleFolder(node.id)
                                            }}
                                            className="hover:bg-gray-200 rounded-full"
                                        />
                                        <FolderOpen size={22} strokeWidth={1} />
                                    </>
                                ) : (
                                    <>
                                        <ChevronRight
                                            size={22}
                                            strokeWidth={1}
                                            onClick={(e) => {
                                                e.stopPropagation()
                                                toggleFolder(node.id)
                                            }}
                                            className="hover:bg-gray-200 rounded-full"
                                        />
                                        <Folders size={22} strokeWidth={1} />
                                    </>
                                )}
                            </div>
                        ) : (
                            <FileText size={22} strokeWidth={1} />
                        )}
                        <span className="w-full">{node.title}</span>
                    </div>

                    {hasChildren(node) && openId === node.id && (
                        <div className="px-4 py-2">
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