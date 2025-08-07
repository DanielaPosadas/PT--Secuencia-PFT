
import '@/App.css'
import Form from '@/components/form/form';
import Results from '@/components/results/results';
import { useState } from 'react';

function App() {
    const [number, setNumber] = useState(0);
    const [resultValues, setResultValues] = useState({
        primoNumber: 0,
        fibonacciNumber: 0,
        triangularNumber: 0,
        result: 0
    });
  return (
    <>
    <section className="flex flex-col items-center justify-center h-max min-h-scree w-full lg:p-20 gap-4">
    <h1 className="text-4xl font-outfit font-semibold text-gray-900 py-4">Prueba técnica</h1>
      <div className="flex flex-col lg:flex-row items-center justify-center h-max min-h-scree w-full gap-4">
      <article className="flex flex-col items-center justify-center bg-[#112f55] min-h-[350px] lg:min-h-[450px] lg:max-h-[500px] w-full lg:w-6/12 lg:rounded-[40px] rounded-[20px] gap-10 p-4">
      <p className="text-lg font-inter text-white font-normal w-full max-w-[500px] text-center">Vamos a resolver la siguiente serie. El número que ingreses tomará el valor de 'n', lo que nos servirá para calcular el resultado.</p>

      <img src="/src/assets/serie.png" alt="Serie image" className="w-full max-w-[400px] lg:max-w-[400px] object-contain" />

      <Form onNumberChange={setNumber} onResultValues={setResultValues}/>
      </article>
      <Results resultValues={resultValues} number={number}/>
      </div>
    </section>
    </>
  )
}

export default App
