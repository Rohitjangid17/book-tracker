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