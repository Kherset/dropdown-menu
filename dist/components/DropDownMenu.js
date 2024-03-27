import React from "react";

/**
 * Composant DropdownMenu pour afficher un menu déroulant.
 * @param {Object} props - Les props transmises au composant.
 * @param {string} props.id - L'ID du menu déroulant.
 * @param {string} props.name - Le nom du menu déroulant.
 * @param {string} props.className - La classe CSS du menu déroulant.
 * @param {Array} props.options - Les options du menu déroulant.
 * @param {Function} props.onChange - La fonction appelée lorsqu'une option est sélectionnée.
 * @returns {JSX.Element} Élément JSX représentant le menu déroulant.
 */
function DropdownMenu({
  id,
  name,
  className,
  options,
  onChange
}) {
  return /*#__PURE__*/React.createElement("select", {
    id: id,
    name: name,
    className: className,
    onChange: e => onChange(name, e.target.value)
  }, options.map(option => /*#__PURE__*/React.createElement("option", {
    key: option.value,
    value: option.value
  }, option.label)));
}
export default DropdownMenu;