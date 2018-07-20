import * as React from 'react';
import {
    Route,
    Switch,
} from "react-router-dom";

import App from "src/views/App";

function IndexRoutes() {
    return (
        <Switch>
            <Route
                path="/"
                // key={key}
                component={App}
                exact={true}
            />
            <Route
                path="/app"
                component={App}
            />
        </Switch>
    );
}

export default IndexRoutes;
