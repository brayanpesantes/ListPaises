import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { Header } from "../components/Header";
import { PaisesPage } from "../pages/PaisesPage";
import { DetailsPaisesPage } from "../pages/DetailsPaisesPage";

export const Routes = () => {
    return (
        <Router>
            <Header/>
            <Switch>
                <Route path="/" exact component={PaisesPage}/>
                <Route path="/details/:name" component={DetailsPaisesPage}/>
            </Switch>
        </Router>
    )
}
