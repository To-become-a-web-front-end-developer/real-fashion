import classNames from "classnames";
import propTypes from "prop-types"
import "./style.css";

export default function LoadingButton(props) {
    return(
        <button
            type={props.type}
            className={classNames(
                "btn btn-wide",
                props.className,
                {
                    "btn-wait": props.loading
                },
                {disabled : props.loading}
            )}
            style={props.style}
            onClick={props.onClick}
        >
            {props.loading ? "Please wait..." : <span>{props.children}</span>}
        </button>
    )
}

LoadingButton.propTypes = {
    className: propTypes.string,
    loading: propTypes.bool,
    onClick: propTypes.func,
    type: propTypes.string
}

LoadingButton.defaultProps = {
    className: "btn-primary btn-7",
    loading: false,
    type: "button"
};