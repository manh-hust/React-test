import React, {Suspence} from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import{Redirect, Switch} from 'react-router'
import Header from './Components/Header/index';
import Banner from './Components/Banner/index';


//const Photo = React.lazy(() => import('./featured/Photo'))

function App2() {
    
    return (
        <div className="photo-app">
            <Header/>
            <Banner title="Welcom to My Garden"/>
            {/* <Suspence fallback={<div>Loading...</div>}>
                <BrowserRouter>
                    <Header/>
                    <Switch>
                        <Redirect extract from="/" to="photos" />
                     <Route path="photos" component={Photo}></Route>
                       <Route component={NotFound}></Route>
                    </Switch>
                </BrowserRouter>

            </Suspence> */}
        </div>
    )
}

export default App2;