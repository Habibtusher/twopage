import React from 'react';

const Detail = ({ data }) => {
    console.log(data);
    return (
        <div className="col-md-4 col-sm-12 mt-3">
            <div id="cardStyle" className="card shadow m-0 m-auto" style={{ width: "22rem" }}>
                <div className="">
                    <img style={{ height: '200px' }} src={data.avatar} className="card-img-top" alt="" />
                </div>
                <div style={{textAlign:"justify"}} className="card-body ">
                    <h5 > <strong>Id: </strong> {data.id}</h5>
                    <h5> <strong>First Name:</strong> {data.first_name}</h5>
                    <h5><strong>  Last Name:</strong> {data.last_name}</h5>
                    <h5><strong>Email:</strong> {data.email} </h5>
                </div>
            </div>
        </div>
    );
};

export default Detail;