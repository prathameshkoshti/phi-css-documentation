import React, { lazy } from 'react';
import { StaticRouter, Route, Switch } from 'react-router-dom';

const Typography = lazy(() => import('./typography'));
// const About = lazy(() => import('./typography'));

export default function index() {
    console.log(Typography);
    return (
        <StaticRouter>
            <Switch>
                <Route exact path="/docs/typo" component={Typography}/>
            </Switch>
        </StaticRouter>
    )
}
