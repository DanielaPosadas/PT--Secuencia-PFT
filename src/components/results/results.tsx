

export default function Results({resultValues, number}: {resultValues: {primoNumber: number, fibonacciNumber: number, triangularNumber: number, result: number}, number: number}) {
    return (
        <article className="flex flex-col items-center justify-center w-full lg:w-4/12 bg-[#112f55] min-h-[450px] md:min-h-[300px] lg:min-h-[450px] lg:rounded-[40px] rounded-[20px]">
        <div className="flex flex-col items-center lg:justify-between min-h-[400px] w-full md:min-h-[250px]">
        <h3 className="text-white font-outfit text-2xl">Resultados de la serie</h3>
        <div className="flex flex-col md:flex-row  md:flex-wrap lg:flex-col gap-2 items-center justify-center pt-4 w-full px-4">
        <div className="text-white bg-[#415977] w-full h-[80px] rounded-[20px] flex items-center justify-center flex-col md:w-[30%] lg:w-full">
          <p className="font-outfit">Número primo en posición {number}:</p>
          <p className="font-outfit bg-white text-[#112f55] rounded-lg p-2 ml-2">{resultValues.primoNumber}</p>
        </div>
        <div className="text-white bg-[#415977] w-full h-[80px] rounded-[20px] flex items-center justify-center flex-col md:w-[33%] lg:w-full">
          <p className="font-outfit">Número fibonacci en posición {number}: </p>
          <p className="font-outfit bg-white text-[#112f55] rounded-lg p-2 ml-2">{resultValues.fibonacciNumber}</p>
        </div>
        <div className="text-white bg-[#415977] w-full h-[80px] rounded-[20px] flex items-center justify-center flex-col md:w-[30%] lg:w-full">
          <p className="font-outfit">Número triangular ({number}+1): </p>
          <p className="font-outfit bg-white text-[#112f55] rounded-lg p-2 ml-2">{resultValues.triangularNumber}</p>
        </div>
        <div className="text-white flex flex-col bg-orange-700 w-full h-[80px] rounded-[20px] items-center justify-center md:w-[95%] lg:w-full">
          <p className="font-outfit">RESULTADO DE LA SERIE </p> <p className="font-outfit bg-white text-[#112f55] rounded-lg p-2">{resultValues.result}</p>
        </div>
        </div>
      </div>
      </article>
    );
}