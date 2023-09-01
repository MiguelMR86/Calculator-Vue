export interface ContextInterface {
    screenInput: string;
    screenOutput: string;
    addNumber: (value: string) => void;
    handleOperator: (value: string) => void;
    handleEraser: (value: string) => void;
    handleSign: () => void;
    handelComma: () => void;
    resolve: () => void;
}

export interface BtnsInterface {
    operators: object
    others: object
}