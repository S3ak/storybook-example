import { useState } from "react";
import PropTypes from "prop-types";

/**
 * Input component.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.inputName - The name of the input field.
 * @param {boolean} props.isSuccess - Indicates whether the input is in a success state.
 * @param {boolean} props.isError - Indicates whether the input is in an error state.
 * @param {string} props.validationMessage - The validation message to display.
 * @returns {JSX.Element} The rendered Input component.
 */
export default function Input({
  inputName,
  isSuccess,
  isError,
  validationMessage,
}) {
  const [value, setValue] = useState("");

  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={inputName}>{inputName}</label>
      <input
        value={value}
        onChange={(event) => setValue(event.target.value)}
        name={inputName}
        className={`${isSuccess ? "border-green-500" : ""} ${
          isError ? "border-red-500" : ""
        } border-2`}
      />
      <small className="text-red-500 min-h-6">{validationMessage}</small>
    </div>
  );
}

Input.propTypes = {
  inputName: PropTypes.string.isRequired,
  isSuccess: PropTypes.bool,
  isError: PropTypes.bool,
  validationMessage: PropTypes.string,
};

Input.defaultProps = {
  isSuccess: false,
  isError: false,
  validationMessage: "",
};
