import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
    label: {
        color: "rgba(255,255,255,1)",
    },
    root: {
        borderColor: "rgba(255,255,255,0.2)",
        backgroundColor: "rgba(255,255,255,0.1)"
    },
});

export default function HeaderButton() {
    const headerButtonStyles = useStyles();

    return (
        <Button
            variant="outlined"
            size="large"
            classes={headerButtonStyles}
            className="focus:outline-none h-12 focus:ring-4 ring-white ring-opacity-5"
            href="tel:+9607821610"
        >
            CALL US NOW!
        </Button>
    );
}
