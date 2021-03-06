import PropTypes from "prop-types";
import style from "./IconButton.module.css";

export default function IconButton({
  children = null,
  onClick = () => null,
  ...otherProps
}) {
  return (
    <button
      type="button"
      className={style.button}
      onClick={onClick}
      {...otherProps}
    >
      {children}
    </button>
  );
}

IconButton.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  "aria-label": PropTypes.string.isRequired,
};
