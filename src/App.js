import "./App.css";
import { Switch, Route, Link } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";

const HatsPage = (props) => (
    <div>
        <h1>{props.match.params.subreddit}</h1>
        <Link to="/">Homepage</Link>
        <h1>HATS PAGE</h1>
    </div>
);

function App() {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/hats" component={HatsPage} />
            </Switch>
        </div>
    );
}

export default App;
