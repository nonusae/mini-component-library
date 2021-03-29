import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <NativeSelect value={value} onChange={onChange}>
          {children}
      </NativeSelect>
      <PresentationLayer>
        {displayedValue}
        <IconWrapper>
          {<Icon id='chevron-down' size={24} />}
        </IconWrapper>
      </PresentationLayer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position:relative;
  width: max-content;
`

const NativeSelect = styled.select`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  opacity:0;
`
const PresentationLayer = styled.div`
  color: ${COLORS.gray700};
  background: ${COLORS.transparentGray15};
  padding: 12px 16px;
  padding-right: 52px;
  border-radius: 8px;

  ${NativeSelect}:focus + & {
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }

  ${NativeSelect}:hover + & {
    color: ${COLORS.black};
  }
`

const IconWrapper = styled.div`
  position: absolute;
  width: 24px;
  height: 24px;
  top: 0;
  right: 10px; /* calculate from box size wrap around icon */
  bottom: 0;
  margin: auto;
  pointer-events: none; // Make whole select box to be cliable
`

export default Select;
