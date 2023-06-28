import { useState } from 'react';

function isPrime(input){
    for(let i = 2; i <= input/Math.sqrt(input); i++){
        if(input % i == 0){
            return false;
        }
    }
    return true;
}
function nextPrime(val){
    let i;
    for(i = val+1; true; i++){
        if(isPrime(i)){
            return i;
        }
    }
}

function previousPrime(val){
    if(val === 2){
        return 2;
    }
    let i;
    for(i = val-1; true; i--){
        if(isPrime(i)){
            return i;
        }
    }
}

export default function Counter(){
    const [counter, setCounter] = useState(2)

    return (
        <section className='counterParent'>
            <div className='display'>
                <h2>{counter}</h2>
            </div>
            <section className='buttonFlex'>
                <button className='button' onClick={() => {setCounter(nextPrime(counter))}}>+</button>
                <button className='button' onClick={() => {setCounter(previousPrime(counter))}}>-</button>
                <button className='button' onClick={() => {setCounter(2)}}>Reset</button>
            </section>
        </section>
    )
}