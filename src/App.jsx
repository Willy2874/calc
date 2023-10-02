import { useState } from 'react'

function App() {
  const [num, setNum] = useState('0')
  const [num2, setNum2] = useState('0')
  const [operator, setOperator] = useState ("")
  
  
  const handleNum = (e)=> {
    const input = e.target.innerText;
    console.log(typeof input)
    if (num === 0) {
      setNum(input)
    } else {
      setNum(num + input)
    }
    }

    const clear = () => {
      setNum(0)
    }

    const handleOperator = (e) => {
      setOperator(e.target.innerText) 
      setNum2(num)
      setNum(0)
    };

    const percentage = ()=>{
      setNum(parseInt(num) / 100)
    };


    const calculate = ()=> {
      switch (operator) {
        case "+":
          setNum(parseInt(num2) + parseInt(num))
          break;
        case "-":
          setNum(parseInt(num2) - parseInt(num))
          break;
        case "x":
        setNum(parseInt(num2)  * parseInt(num))
        break;
      case "/":
        setNum(parseInt(num2) / parseInt(num))
        break;
     
      }
      setOperator('');
      setNum2('0');
    };

  
  return (
   <div className='w-full h-screen flex items-center justify-center text-white '>
    <div className='w-1/3 h-4/5 bg-black'>
      <div className='w-full flex justify-end'>
        <p className='mr-4 text-4x1'>{num}</p>
      </div>

      <div className='flex items-center gap-1 justify-center flex-wrap' >
      <button onClick={clear} className='w-20 h-20 rounded-full bg-gray-400'>AC</button>
      <button className='w-20 h-20 rounded-full bg-gray-400'>+/-</button>
      <button onClick={percentage}className='w-20 h-20 rounded-full bg-gray-400'>%</button>
      <button onClick={handleOperator}className='w-20 h-20 rounded-full bg-purple-600'>/</button>
      <button onClick={handleNum} className='w-20 h-20 rounded-full bg-gray-600'>7</button>
      <button onClick={handleNum} className='w-20 h-20 rounded-full bg-gray-600'>8</button>
      <button onClick={handleNum} className='w-20 h-20 rounded-full bg-gray-600'>9</button>
      <button onClick={handleOperator}className='w-20 h-20 rounded-full bg-purple-600'>x</button>
      <button onClick={handleNum} className='w-20 h-20 rounded-full bg-gray-600'>4</button>
      <button onClick={handleNum} className='w-20 h-20 rounded-full bg-gray-600'>5</button>
      <button onClick={handleNum} className='w-20 h-20 rounded-full bg-gray-600'>6</button>
      <button onClick={handleOperator}className='w-20 h-20 rounded-full bg-purple-600'>-</button>
      <button onClick={handleNum} className='w-20 h-20 rounded-full bg-gray-600'>1</button>
      <button onClick={handleNum} className='w-20 h-20 rounded-full bg-gray-600'>2</button>
      <button onClick={handleNum} className='w-20 h-20 rounded-full bg-gray-600'>3</button>
      <button onClick={handleOperator}className='w-20 h-20 rounded-full bg-purple-600'>+</button>
      <button onClick={handleNum} className='w-20 h-20 rounded-full bg-gray-600'>0</button>
      <button className='w-20 h-20 rounded-full bg-gray-600'></button>
      <button onClick={handleNum} className='w-20 h-20 rounded-full bg-gray-600'>.</button>
      <button onClick={calculate} className='w-20 h-20 rounded-full bg-purple-600'>=</button>

     
     
     
      </div>
    </div>
   </div>
  )
}

export default App
