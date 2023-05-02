import React from 'react';
import classNames from 'classnames';

const TestInputGroupe = (props) => {
  const { type, name, onChangeInput, value, error } = props;
  return (
    <div className="form-groupe">
      <input
        type={type}
        className={classNames('form-control', {
          'is-invalid': error,
        })}
        name={name}
        value={value}
        onChange={onChangeInput}
      />
      <div className="invalid-feedback">{error}</div>
    </div>
  );
};

export default TestInputGroupe;
