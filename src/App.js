import { ThemeProvider } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

import Header from "./components/Header/Header";
import theme from "./styles/theme";
import "./App.css";

export default function App() {
    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                <Header />
                <div className="">
                    <div className="text-text font-bold text-7xl text-center leading-tight py-48">
                        We're bringing
                        <br />
                        Customers
                    </div>
                    <div className="flex justify-center">
                        <Button
                            variant="outlined"
                            size="large"
                            className="focus:outline-none h-12 shadow-lg"
                            href="https://www.facebook.com/VerticodaStudios"
                            target="_blank"
                        >
                            FOLLOW US ON FACEBOOK
                        </Button>
                    </div>
                    <div className="py-96" />
                    <div className="py-96" />
                </div>
            </div>
        </ThemeProvider>
    );
}
