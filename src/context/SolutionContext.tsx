import React, { createContext, useContext, useState, ReactNode } from "react";

type TSolutionContextProps = {
    children: ReactNode
}

type TSolutionContext = {
    solution: Record<string, any>;
    updateSolution: (step: number, data: {}) => void
}

export const SolutionContext = createContext<TSolutionContext | null>(null)

export const SolutionProvider = ({ children }: TSolutionContextProps ) => {
    const [solution, setSolution] = useState<Record<string, any>>({});

    const updateSolution = (step: number, data: {}) => {
        setSolution(((prev) => ({
            ...prev,
            [step]: {...prev[step], ...data}
        })
        ))
    }

    return (
        <SolutionContext.Provider value={{solution, updateSolution}}>
            { children }
        </SolutionContext.Provider>
    )
}


export const useSolution = () => {
    const context = useContext(SolutionContext);
    if (!context) {
        throw new Error("useSolution must be used within a SolutionProvider");
    }
    return context;
};
