import React, { useState } from 'react';
import axios from 'axios';

const MyComponent: React.FC = () => {
    const [result, setResult] = useState<number | null>(null);

    const calculateSumOfEvenNumbers = async () => {
        const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];  // Example numbers array

        try {
            const response = await axios.post('/sum_of_even_numbers', { numbers });
            setResult(response.data.result);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
console.log(result)
//     return (
//         <div>
//             <button onClick={calculateSumOfEvenNumbers}>Calculate Sum of Even Numbers</button>
//             {result !== null && <p>The sum of even numbers is: {result}</p>}
//         </div>
//     );
};

export default MyComponent;
