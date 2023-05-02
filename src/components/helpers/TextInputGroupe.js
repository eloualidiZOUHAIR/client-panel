import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

//component externaliser.
const TextInputGroupe = (props) => {
  const { label, type, name, value, changeInput, error, placeholder } = props;
  return (
    <div className="form-groupe">
      <label htmlFor="">{label}</label>
      <input
        type={type}
        className={classnames('form-control', {
          'is-invalid': error,
        })}
        name={name}
        value={value}
        onChange={changeInput}
        defaultValue={value}
        placeholder={placeholder}
      />
      <div className="invalid-feedback">{error}</div>
    </div>
  );
};

TextInputGroupe.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['text', 'number', 'email']).isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
  changeInput: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default TextInputGroupe;
