'use client'
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface State {
    isActive:boolean;
    message?: string;
}

interface StateContextType {
    plan: State;
    setPlan: React.Dispatch<React.SetStateAction<State>>;
    addPlanMon: (newPlan: Plan, newAmount: Amount) => void;
    addPlanYr: (newPlan: Plan, newAmount: Amount) => void;
    addBillingYr: (newPlan: Plan, newAmount: Amount) => void;
    addBillingMon: (newPlan: Plan, newAmount: Amount) => void;
    billingMon: { latestPlan: Plan; latestAmount: Amount }[];
    billingYr: { latestPlan: Plan; latestAmount: Amount }[];
    planArrayMon: { latestPlan: Plan; latestAmount: Amount }[];
    planArrayYr: { latestPlan: Plan; latestAmount: Amount }[];
    setPlanArrayMon: React.Dispatch<React.SetStateAction<{ latestPlan: Plan; latestAmount: Amount }[]>>;
    setPlanArrayYr: React.Dispatch<React.SetStateAction<{ latestPlan: Plan; latestAmount: Amount }[]>>;
    setBillingMon:React.Dispatch<React.SetStateAction<{ latestPlan: Plan; latestAmount: Amount }[]>>;
    setBillingYr:React.Dispatch<React.SetStateAction<{ latestPlan: Plan; latestAmount: Amount }[]>>;
    checkbox: { checkbox1: boolean; checkbox2: boolean; checkbox3: boolean };
    setCheckbox: React.Dispatch<React.SetStateAction<{ checkbox1: boolean; checkbox2: boolean; checkbox3: boolean }>>;
}
interface Plan{
    plan:String
}
interface Amount{
    amount:number
}
const StateContext = createContext<StateContextType | undefined>(undefined);

export const StateProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [planArrayMon, setPlanArrayMon] = useState<{ latestPlan: Plan; latestAmount: Amount }[]>([]);
    const [billingMon, setBillingMon] = useState<{ latestPlan: Plan; latestAmount: Amount }[]>([]);
    const [billingYr, setBillingYr] = useState<{ latestPlan: Plan; latestAmount: Amount }[]>([]);
    const [planArrayYr, setPlanArrayYr] = useState<{ latestPlan: Plan; latestAmount: Amount }[]>([]);
    const [checkbox, setCheckbox] = useState({ checkbox1: false, checkbox2: false, checkbox3: false });

    const addPlanMon=(newPlan:Plan, newAmount:Amount)=>{
        setPlanArrayMon(prev => [...prev, { latestPlan: newPlan, latestAmount: newAmount }]);
    }
    const addBillingMon=(newPlan:Plan, newAmount:Amount)=>{
        setBillingMon([{ latestPlan: newPlan, latestAmount: newAmount }]);
        setBillingYr([]);
        setPlanArrayMon([]);
        setCheckbox({ checkbox1: false, checkbox2: false, checkbox3: false });
    }
    const addBillingYr=(newPlan:Plan, newAmount:Amount)=>{
        setBillingYr([{ latestPlan: newPlan, latestAmount: newAmount }]);
        setBillingMon([]);
        setPlanArrayYr([]);
        setCheckbox({ checkbox1: false, checkbox2: false, checkbox3: false });
    }
    const addPlanYr=(newPlan:Plan, newAmount:Amount)=>{
        setPlanArrayYr(prev => [...prev, { latestPlan: newPlan, latestAmount: newAmount }]);
    }
    const [plan, setPlan] = useState<State>({isActive:true});

    return (
        <StateContext.Provider value={{ plan,checkbox, setCheckbox,setBillingYr,setBillingMon, setPlanArrayMon, setPlanArrayYr, setPlan,planArrayMon,planArrayYr, addPlanMon,addPlanYr,addBillingMon,addBillingYr,billingMon,billingYr }}>
            {children}
        </StateContext.Provider>
    );
};

export const useStateContext = (): StateContextType => {
    const context = useContext(StateContext);
    if (!context) {
        throw new Error('useStateContext must be used within a StateProvider');
    }
    return context;
};