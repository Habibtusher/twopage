import React, { useEffect, useState } from 'react';
import Detail from './Detail';
const Home = () => {
    const [data, setData] = useState([]);
    const [value, setValue] = useState(1)
    useEffect(() => {
        fetch(`https://reqres.in/api/users?page=${value}`)
            .then(res => res.json())
            .then(data => setData(data.data))
    }, [value])

    return (
        <div>
            <h4 className="mt-4">Page : {value}</h4>
            <div className="container">
                <div className="row">
                    {
                        data.map(data => <Detail data={data}></Detail>)

                    }
                </div>
            </div>


            <div className="mt-5 container">
                <nav aria-label="Page navigation example">
                    <ul className="pagination ">

                        <li className="page-item "><a onClick={() => setValue(1)} className="page-link bg-danger text-white" >1</a></li>
                        <li className="page-item"><a onClick={() => setValue(2)} className="page-link bg-danger text-white" >2</a></li>


                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Home;