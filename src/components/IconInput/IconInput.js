import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    fontSize: 14,
    borderThickness: 1,
    outlineOffset: 2,
  },
  large: {
    fontSize: 18,
    borderThickness: 2,
    outlineOffset: 3
  }
}

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  const styles = SIZES[size]

  return <InputWrapper
    style={{
      "--font-size": styles.fontSize + 'px'
    }}
  >
    <VisuallyHidden>{label}</VisuallyHidden>
    <IconWrapper>
      <Icon id={icon} size={styles.fontSize + 4} />
    </IconWrapper>
    <InputField
      placeholder="Search..."
      style={
        {
          "--width": width + 'px',
          "--border-thickness": styles.borderThickness + 'px',
          "--outline-offset": styles.outlineOffset + 'px'
        }
      }
    ></InputField>
  </InputWrapper>;
};


const InputWrapper = styled.label`
  display: block;
  position: relative;
  color: ${COLORS.gray700};
  font-size: var(--font-size);

  &:hover {
    color: black;
  }
`

const InputField = styled.input`
  color: inherit;
  font-size: inherit;
  height: ${24/16} rem;
  width: var(--width);
  padding-left: 24px;
  border: none;
  border-bottom: var(--border-thickness) solid black;

  &::placeholder {
    color: ${COLORS.gray500}
  }

  &:focus {
    outline-offset: var(--outline-offset);
  }
`

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom : 0;
  margin: auto 0;
`

export default IconInput;
