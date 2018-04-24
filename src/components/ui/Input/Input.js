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
}) => (
  <InputWrapper>
    <Item>
      <NBInput
        secureTextEntry={type === 'password'}
        placeholder={placeholder}
      />
    </Item>
  </InputWrapper>
);

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['text', 'password']),
};

Input.defaultProps = {
  type: 'text',
};

export default Input;
