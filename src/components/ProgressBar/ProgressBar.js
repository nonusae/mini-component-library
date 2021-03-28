/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

function Rounded(value) {
  if (value > 100) {
    return 100
  } else if(value < 0) {
    return 0
  }

  return Math.round(value)
}
const SIZES  = {
  large: {
    "--padding": "4px",
    "--height": "24px",
    "--borderRadius": "8px"
  },
  medium: {
    "--height": "12px",
    "--borderRadius": "4px"
  },
  small: {
    "--height": "8px",
    "--borderRadius": "4px"
  }
}

const BaseWrapper = styled.div`
  width: 370px;
  height: var(--height);
  background-color: ${COLORS.gray50};
  border-radius: var(--borderRadius);
  padding: var(--padding);
`

const Fill = styled.div`
  height: 100%;
  width: ${({value}) => Rounded(value)}%;
  background: ${COLORS.primary};
  border-radius: 4px;
  border-top-right-radius: ${({value}) => Rounded(value) === 100 ? '4px': '0px'};
  border-bottom-right-radius: ${({value}) => Rounded(value) === 100 ? '4px': '0px'};
`

const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size]
  return <BaseWrapper style={styles} role="progressbar" aria-valuenow={value} aria-valuemin="0" aria-valuemax="100">
    <Fill value={value}></Fill>
  </BaseWrapper>;
};

export default ProgressBar;
