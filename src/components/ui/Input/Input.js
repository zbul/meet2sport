import React from 'react';
import PropTypes from 'prop-types';
import {
  Item,
  Input as NBInput,
} from 'native-base';

import { InputWrapper } from './Input.styles';

const Input = ({
  placeholder,
  secureTextEntry,
  onChangeText,
  value,
  name,
  keyboardType,
}) => (
  <InputWrapper>
    <Item>
      <NBInput
        name={name}
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
        keyboardType={keyboardType}
      />
    </Item>
  </InputWrapper>
);

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
  secureTextEntry: PropTypes.bool,
  keyboardType: PropTypes.oneOf(['default', 'numeric', 'email-address', 'phone-pad']),
};

Input.defaultProps = {
  secureTextEntry: false,
  keyboardType: 'default',
};

export default Input;
