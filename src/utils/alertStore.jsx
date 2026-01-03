import { create } from 'zustand';

export const useAlertStore = create((set, get) => ({
    clicked: true,
    getClickState: () => get().clicked,
    setClickState: (clicked) => {
        set({ clicked });
    }
}));