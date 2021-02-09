import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

export default function CustomButton({
    textColor,
    borderColor,
    bgColor,
    children,
    ringColor,
    ...props
}) {
    const useStyles = makeStyles({
        label: {
            color: textColor,
        },
        root: {
            borderColor: borderColor,
            backgroundColor: bgColor,
        },
    });

    const headerButtonStyles = useStyles();

    return (
        <Button
            variant="outlined"
            size="large"
            classes={textColor ? headerButtonStyles : null}
            className={`focus:outline-none h-12 focus:ring-4 ${
                ringColor ? `${ringColor}` : "ring-black"
            } ${ringColor === "black" ? "ring-opacity-5" : "ring-opacity-10"} shadow-md`}
            {...props}
        >
            {children}
        </Button>
    );
}
