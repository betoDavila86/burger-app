import classes from "./BuildControl.module.css";

const buildControl = ({ label, added, removed, disabled }) => (
    <div className={classes.BuildControl}>
        <div className={classes.Label}>{label}</div>
        <button
            onClick={removed}
            className={classes.Less}
            disabled={disabled}>-</button>
        <button
            onClick={added}
            className={classes.More}>+</button>
    </div>
)
export default buildControl;