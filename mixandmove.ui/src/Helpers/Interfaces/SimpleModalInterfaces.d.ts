declare module 'SimpleModalTypes' {
    interface SimpleModalProps {
        buttonLabel: string; 
        className: string;
        modalTitle: string;
        id: number;
        children: JSX.Element;
    }
}

export { SimpleModalProps }