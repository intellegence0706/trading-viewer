import { create } from 'zustand'

export const useButtonShowStore = create((set, get) => ({
    show: false,
    getButtonShowState: () => get().show,
    setButtonShowState: (show) => {
        set({ show });
    }
}));