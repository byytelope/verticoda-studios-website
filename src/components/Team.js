import { Button } from "@material-ui/core";

export default function Team() {
    return (
        <div className="py-56 h-screen">
            <div className="text-text font-bold text-7xl text-center leading-tight py-28">
                We're bringing
                <br />
                Customers
            </div>
            <div className="flex justify-center">
                <Button
                    variant="outlined"
                    size="large"
                    className="focus:outline-none h-12 focus:ring-4 ring-black ring-opacity-5"
                    href="https://www.facebook.com/VerticodaStudios"
                    target="_blank"
                >
                    FOLLOW US ON FACEBOOK
                </Button>
            </div>
        </div>
    );
}
