"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

export type ModalView = "video" | "form" | null;

interface ModalContextType {
    isOpen: boolean;
    view: ModalView;
    openModal: (view: ModalView) => void;
    closeModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: ReactNode }) {
    const [view, setView] = useState<ModalView>(null);

    const openModal = (viewType: ModalView) => setView(viewType);
    const closeModal = () => setView(null);

    return (
        <ModalContext.Provider value={{ isOpen: !!view, view, openModal, closeModal }}>
            {children}
        </ModalContext.Provider>
    );
}

export function useModal() {
    const context = useContext(ModalContext);
    if (context === undefined) {
        throw new Error("useModal must be used within a ModalProvider");
    }
    return context;
}
