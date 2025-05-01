import React, { createContext, useContext, useState, ReactNode } from "react";

type TSolutionContextProps = {
    children: ReactNode
}

type TSolutionContext = {
    solution: Record<string, any>;
    updateSolution: (step: number, data: {}) => void;
    currentStep: number,
    updateCurrentStep: (value: number) => void;
}

export const SolutionContext = createContext<TSolutionContext | null>(null)

export const SolutionProvider = ({ children }: TSolutionContextProps ) => {
    const [solution, setSolution] = useState<Record<string, any>>({
        1: {},
        2: {},
        3: {},
        4: {}
    });

    const updateSolution = (step: number, data: {}) => {
        setSolution(((prev) => ({
            ...prev,
            [step]: {...prev[step], ...data}
        })
        ))
    }

    const [currentStep, setCurrentStep] = useState(3)

    const updateCurrentStep = (value: number) => {
        setCurrentStep(value)
    }

    return (
        <SolutionContext.Provider value={{solution, updateSolution, currentStep, updateCurrentStep}}>
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
