import React from "react";

/**
 * DropdownMenu component to display a dropdown menu.
 * @param {Object} props - The props passed to the component.
 * @param {string} props.id - The ID of the dropdown menu.
 * @param {string} props.name - The name of the dropdown menu.
 * @param {string} props.className - The CSS class of the dropdown menu.
 * @param {Array} props.options - The options of the dropdown menu.
 * @param {Function} props.onChange - The function called when an option is selected.
 * @returns {JSX.Element} JSX element representing the dropdown menu.
 */

function DropdownMenu({ id, name, className, options, onChange }) {
  return (
    <select
      id={id}
      name={name}
      className={className}
      onChange={(e) => onChange(name, e.target.value)}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

export default DropdownMenu;
