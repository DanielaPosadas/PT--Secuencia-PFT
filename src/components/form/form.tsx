import { useEffect, useState } from "react";
import operationResult from "../operations/operation";

type UserProps = {
    onNumberChange: (number: number) => void
    onResultValues: (resultValues: {primoNumber: number, fibonacciNumber: number, triangularNumber: number, result: number}) => void
}

export default function Form({onNumberChange, onResultValues}:UserProps) {
    const [number, setNumber] = useState(0);
    const [, setResultValues] = useState({
        primoNumber: 0,
        fibonacciNumber: 0,
        triangularNumber: 0,
        result: 0
    });

    const [error, setError] = useState('');
        
    
    useEffect(() => {
        if(number !== 0){
            onNumberChange(number);
            const result = operationResult(number);
            setResultValues(result);
            onResultValues(result);
        } else {
            setResultValues({
                primoNumber: 0,
                fibonacciNumber: 0,
                triangularNumber: 0,
                result: 0
            });
        }
    }, [number, onNumberChange, onResultValues]);


    return (
        <section>
        <form>
            <input type="text" min={1} max={100} maxLength={2} className="w-full h-[40px] rounded-xl min-w-[200px] text-center" placeholder="Ingrese un numero" value={number} onChange={(e) => {
                const value = Number(e.target.value);
                if (!isNaN(value)) {
                  setNumber(value);
                }
                if(value >= 1 && value <= 50){
                    setNumber(value);
                    setError('');
                }else{
                    setNumber(0);
                    setError('El numero debe estar entre 1 y 50');
                }
              }} />
            {error && <p className="bg-red-900 text-white font-outfit text-center text-sm font-normal mt-2 p-2 rounded-xl">{error}</p>}
        </form>
        </section>
    );
}