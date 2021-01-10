import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";

import Home from "./pages/Home";
import Service from "./components/Service";
import theme from "./styles/theme";
import "./App.css";

export default function App() {
    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                <Router>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/services/:id" component={Service} />
                    </Switch>
                </Router>
            </div>
        </ThemeProvider>
    );
}
