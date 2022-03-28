import React from 'react';

function Home (){

    return (
        <div className="hero">
            <div class="card bg-dark text-white border-0">
                <img src="/orange-bg.jpg" class="card-img" alt="Background"
                 height="650px" />
                <div class="card-img-overlay d-flex flex-column justify-content-center">
                    <div className="container">
                        <h5 className="card-title display-3 fw-bolder mb-0">
                            NEW SEASON
                        </h5>
                        <p class="card-text lead fs-2">
                            CHECK OUT ALL THE TRENDS
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home