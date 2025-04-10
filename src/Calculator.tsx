import { useState } from "react";
import ButtonSection from "./ButtonSection";
import Display from "./Display";

type Operator = '+' | '-' | '*' | '/';

const Calculator = () => {

    const [currentInput, setCurrentInput] = useState<string>('');
    const [previousValue, setPreviousValue] = useState<number | null>(null);
    const [operation, setOperation] = useState<Operator | null>(null);
    const [overwrite, setOverwrite] = useState<boolean>(true);

    const handleDigitOrDecimal = (value: string) => {
        if (currentInput === 'Error') {
            setCurrentInput(value === '.' ? '0.' : value);
            setOverwrite(false);
            return;
        }

        if (value === '.' && currentInput.includes('.')) {
            return;
        }

        if (value === '.' && (currentInput === '' || overwrite)) {
            setCurrentInput('0.');
            setOverwrite(false);
            return;
        }

        if (overwrite) {
            setCurrentInput(value);
            setOverwrite(false);
        } else {
            setCurrentInput(prev => prev + value);
        }
    };

    const handleOperation = (op: Operator) => {
        if (currentInput === 'Error') return;

        const currentValueFloat = parseFloat(currentInput);

        if (previousValue !== null && operation && !overwrite) {
            try {
                const result = calculate();
                setPreviousValue(result);
                setCurrentInput(result.toString());
            } catch (e) {
                setCurrentInput('Error');
                setPreviousValue(null);
                setOperation(null);
                setOverwrite(true);
                return;
            }
        }
        else if (currentInput !== '') {
             setPreviousValue(currentValueFloat);
        }

        setOperation(op);
        setOverwrite(true);
    };

    const calculate = (): number => {
        if (previousValue === null || operation === null) {
             const currentVal = parseFloat(currentInput);
             if (!isNaN(currentVal)) return currentVal;
             throw new Error("Calculation error: Incomplete state.");
        }

        const currentValueFloat = parseFloat(currentInput);

        let result: number;
        switch (operation) {
            case '+':
                result = previousValue + currentValueFloat;
                break;
            case '-':
                result = previousValue - currentValueFloat;
                break;
            case '*':
                result = previousValue * currentValueFloat;
                break;
            case '/':
                if (currentValueFloat === 0) {
                    throw new Error("Division by zero");
                }
                result = previousValue / currentValueFloat;
                break;
            default:
                 throw new Error("Invalid operation");
        }
        if (!isFinite(result)) {
             throw new Error("Result is not finite");
        }
        return result;
    };



    const handleEquals = () => {
        if (previousValue !== null && operation && !overwrite) {
            try {
                const result = calculate();
                setCurrentInput(result.toString());
                setPreviousValue(null);
                setOperation(null);
                setOverwrite(true);
            } catch (e: any) {
                setCurrentInput('Error');
                setPreviousValue(null);
                setOperation(null);
                setOverwrite(true);
            }
        } else if (!operation && currentInput !== '' && previousValue !== null) {
        }
    };

    const handleClear = () => {
        setCurrentInput('');
        setPreviousValue(null);
        setOperation(null);
        setOverwrite(true);
    };

    const handleClearEntry = () => {
        setCurrentInput('');
        setOverwrite(true);
    };

    return (
        <>
            <Display currentDisplay={currentInput || (previousValue !== null ? previousValue.toString() : '0')} />
            <ButtonSection
                handleDigitOrDecimal={handleDigitOrDecimal}
                handleOperation={handleOperation}
                handleEquals={handleEquals}
                handleClear={handleClear}
                handleClearEntry={handleClearEntry}
            />
        </>
    );
};

export default Calculator;