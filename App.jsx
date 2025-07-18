import { useState } from "react";

function App() {
     const [value1, setValue1] = useState(0);
     const [value2, setValue2] = useState(0);
     const [result, setResult] = useState(0);
     //using events to return value below 
     /* so first we have to capture the number - step 1*/
     const captureValue1 = (e) => {
          e.preventDefault()
          setValue1(e.target.value);
     }
     const captureValue2 = (e) => {
          e.preventDefault()
          setValue2(e.target.value);
     }
     const add = (e) => {
          e.preventDefault()
          setResult(Number(value1) + Number(value2));
     }


     console.log(value1)
     console.log(value2);
     /*grabbing a data from input field,
      and storing a day inside the value,and the value varible display on the p tag 
      if i change something in the value it will reflect in the p tag*/
     return (

          <div className="flex item-center justify-center gap-x-6  pt-13 ">
               <input type="number" className="bg-slate-900 text-white w-40 h-6 border-black rounded-lg gap px-4" onChange={captureValue1} />
               <input type="number" className="bg-slate-900 text-white w-40 h-6 border-black rounded-lg gap px-4" onChange={captureValue2} />

               <button onClick={add} type="submit" className="bg-blue-500 text-white border-black rounded-lg h-6 w-20
                px-4 cursor-pointer hover:bg-slate-300 hover:text-slate-900">SUM</button>
               <p> {result}</p>
          </div>

     )
}
export default App