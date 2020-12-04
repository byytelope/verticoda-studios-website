import { Button } from "@material-ui/core";

export default function Team() {
    return (
        <div className="h-screen">
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
        </div>
    );
}
