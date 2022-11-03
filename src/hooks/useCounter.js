import {useEffect, useState} from "react";

export const useCounter = (min = 0, max = 100) => {

    const [value, setValue] = useState(0);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const url = `http://www.randomnumberapi.com/api/v1.0/random?min=${min}&max=${max}&count=1`;
    async function fetchValue() {
        console.log("fetchValue");
        try {
            setLoading(true);
            const response = await fetch(`http://www.randomnumberapi.com/api/v1.0/random?min=${min}&max=${max}&count=1`)
            const result = await response.json();
            setValue(result);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    } 
    
    useEffect( () => {
        fetchValue();
    }, []);


    const increment = () => {
        if (value < max) {
            setValue((number) => number + 1);
        }
    };

    const decrement = () => {
        if (value > min) {
            setValue((number) => number - 1);
        }
    };

    const random = () => {
        setValue((Math.random() * (max - min) + min).toFixed(0));
    };

    const reset = () => {
        setValue(0);
    };

    return {value, loading, error, increment, decrement, random, reset};
}