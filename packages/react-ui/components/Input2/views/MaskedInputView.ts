import React, { useContext } from 'react';

import { ThemeContext } from '../../../lib/theming/ThemeContext';
import { MaskedInput as MaskedInputInternal } from '../../../internal/MaskedInput';

import { InputViewType } from '../Input';
import { getInputProps } from '../utils';
import { InputContext } from '../InputContext';

export const MaskedInputView: InputViewType = () => {
  const inputContext = useContext(InputContext);
  const { mask, maskChar, alwaysShowMask, formatChars, onChange, handleMaskedValueChange, handleUnexpectedInput } =
    inputContext;

  if (!mask) return null;

  const theme = useContext(ThemeContext);
  const inputProps = {
    ...getInputProps(inputContext, theme),
    mask,
    maskChar,
    alwaysShowMask,
    formatChars,
    onChange,
    onValueChange: handleMaskedValueChange,
    onUnexpectedInput: handleUnexpectedInput,
  };

  return React.createElement(MaskedInputInternal, inputProps);
};
