import { Button } from "@material-ui/core";

export default function Team() {
    return (
        <div className="py-56 xl:h-screen">
            <div className="text-text font-bold text-7xl text-center leading-tight">
                We're bringing
                <br />
                Customers
            </div>
            <div className="flex justify-center pt-24">
                <Button
                    variant="outlined"
                    size="large"
                    className="focus:outline-none h-12 focus:ring-4 ring-black ring-opacity-5 shadow-md"
                    href="https://www.facebook.com/VerticodaStudios"
                    target="_blank"
                >
                    FOLLOW US ON FACEBOOK
                </Button>
            </div>
        </div>
    );
}
