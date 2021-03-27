import classes from "BuildControl.module.css";

const buildControl = ({ labelIng }) => (
    <div className={classes.BuildControl}>
        <div>{labelIng}</div>
        <button className={classes.Less}>-</button>
        <button className={classes.More}>+</button>
    </div>
)
export default buildControl;