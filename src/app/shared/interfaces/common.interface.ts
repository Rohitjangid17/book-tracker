import { ReactNode } from "react";

export interface Book {
    id: number;
    title: string;
    author: string;
    description: string;
    briefDescription: string;
    coverImage: string
}

export interface SectionHeader {
    title: string;
    description: string;
    icon?: boolean
}

export interface AcknowledgmentModalProps {
    onAcknowledge: () => void
    onClose: () => void
}

export interface TermsModalProps {
    onAccept: () => void
    onClose: () => void
}

export interface CustomButtonProps {
    title?: string;
    isMode?: boolean;
    variant?: "default" | "outline";
    onClick?: () => void;
    disabled?: boolean;
    className?: string;
    icon?: ReactNode;
    children?: ReactNode;
    type?: "button" | "submit" | "reset";
}