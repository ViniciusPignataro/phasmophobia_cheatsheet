import { create } from "zustand";

interface StoreState {
    evidenciasChecadas: string[];
    setEvidenciasChecadas: (by: string[]) => void;
}

export const evidenceStore = create<StoreState>((set) => ({
    evidenciasChecadas: [],

    setEvidenciasChecadas: (evidenciasChecadas: string[]) => set({ evidenciasChecadas })
}))