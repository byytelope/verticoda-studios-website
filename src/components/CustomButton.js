import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

export default function CustomButton(props) {
    const useStyles = makeStyles({
        label: {
            color: props.textColor,
        },
        root: {
            borderColor: props.borderColor,
            backgroundColor: props.bgColor,
        },
    });

    const headerButtonStyles = useStyles();

    return (
        <Button
            variant="outlined"
            size="large"
            classes={props ? headerButtonStyles : null}
            className={`focus:outline-none h-12 focus:ring-4 ${
                props.ringColor ? `ring-${props.ringColor}` : "ring-black"
            } ${props.ringColor === "black" ? "ring-opacity-5" : "ring-opacity-10"} shadow-md`}
            href="tel:+9607821610"
        >
            {props.children}
        </Button>
    );
}
