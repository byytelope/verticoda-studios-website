import { Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { ThemeProvider } from "@material-ui/core/styles";

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Service from "./pages/Service";
import theme from "./styles/theme";
import "./App.css";

export default function App() {
    const location = useLocation();

    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                <AnimatePresence exitBeforeEnter>
                    <Switch location={location} key={location.pathname}>
                        <Route exact path="/" component={Home} />
                        <Route path="/services/:service" component={Service} />
                        <Route component={NotFound} />
                    </Switch>
                </AnimatePresence>
            </div>
        </ThemeProvider>
    );
}
