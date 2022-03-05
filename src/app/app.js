import { Route, Switch } from "react-router-dom";
import { GlobalProvider } from "./GlobalState";

import { Home } from "./Home";
import { AddSection } from './addSection';
import { EditSection } from './EditSection';
import './css/app.css'

function SectionApp() {
    return (
        <GlobalProvider>
            <div className="App">
                <Switch>
                    <Route path="/" component={Home} exact />
                    <Route path="/add" component={AddSection} exact />
                    <Route path="/edit/:id" component={EditSection} exact />
                </Switch>
            </div>
        </GlobalProvider>
    );
};

export default SectionApp;