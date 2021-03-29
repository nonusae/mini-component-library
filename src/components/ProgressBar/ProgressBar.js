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
  height: var(--height);
  background-color: ${COLORS.transparentGray15};
  border-radius: var(--borderRadius);
  padding: var(--padding);
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};

  /*  Trim off corner when progress bar is full */
  overflow: hidden;
`

const Bar = styled.div`
  height: 100%;
  width: ${({value}) => Rounded(value)}%;
  background: ${COLORS.primary};
  border-radius: 4px 0px 0px 4px;
  border-top-right-radius: ${({value}) => Rounded(value) === 100 && '4px'};
  border-bottom-right-radius: ${({value}) => Rounded(value) === 100 && '4px'};
`

const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size]

  if (!styles) {
    throw new Error(`Unknown size passed to Progressbar: ${size}`)
  }

  return <BaseWrapper
    style={styles}
    role="progressbar"
    aria-valuenow={value}
    aria-valuemin="0"
    aria-valuemax="100"
  >
    <VisuallyHidden>{value}%</VisuallyHidden>
    <Bar value={value}></Bar>
  </BaseWrapper>;
};

export default ProgressBar;
