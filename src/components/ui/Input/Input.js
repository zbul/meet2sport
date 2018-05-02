import React from 'react';
import PropTypes from 'prop-types';
import {
  Item,
  Input as NBInput,
} from 'native-base';

import { InputWrapper } from './Input.styles';

const Input = ({
  placeholder,
  type,
  onChangeText,
  value,
  name,
}) => (
  <InputWrapper>
    <Item>
      <NBInput
        name={name}
        secureTextEntry={type === 'password'}
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
      />
    </Item>
  </InputWrapper>
);

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['text', 'password']),
  onChangeText: PropTypes.func.isRequired,
};

Input.defaultProps = {
  type: 'text',
};

export default Input;
