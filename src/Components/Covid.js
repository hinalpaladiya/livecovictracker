import React, { useEffect, useState } from 'react'

function Covid() {
    const [data, setData] = useState([])
    const getCovidData = async () => {
        try {
            const res = await fetch('https://api.publicapis.org/categories')
            const actualData = await res.json()
            console.log(actualData.categories, 'actualData');
            setData(actualData.categories)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getCovidData();
    }, []);
    return (
        <>
        <section>   
            <h1>sfds</h1>
            <h1>fdsfds dsfds</h1>
            <ul>
                <li className='card'>
                    <div className='dss'>
                        <p className='class'>

                        </p>
                    </div>
                </li>
                <li>{data}</li>
                <li></li>
                <li></li>
            </ul>
            </section>
        </>
    )
}

export default Covid
