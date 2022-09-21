import React, { useContext } from 'react';

import { cx } from '../../../lib/theming/Emotion';
import { ThemeContext } from '../../../lib/theming/ThemeContext';

import { InputViewType } from '../Input';
import { styles } from '../Input.styles';
import { InputContext } from '../InputContext';

export const PrefixView: InputViewType = () => {
  const { prefix, disabled } = useContext(InputContext);

  if (!prefix) {
    return null;
  }

  const theme = useContext(ThemeContext);

  const className = cx({
    [styles.prefix(theme)]: true,
    [styles.prefixDisabled(theme)]: disabled,
  });

  return React.createElement('span', { className, children: prefix });
};
