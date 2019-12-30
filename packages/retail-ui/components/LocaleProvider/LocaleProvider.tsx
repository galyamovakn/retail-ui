import createReactContext from 'create-react-context';
import React, { ReactNode } from 'react';
import { defaultLangCode } from './constants';
import { LangCodes, LocaleControls } from './types';

const LocaleContext = createReactContext<LocaleProviderProps>({});

export interface LocaleProviderProps {
  locale?: LocaleControls;
  langCode?: LangCodes;
  children?: ReactNode;
}

export const LocaleConsumer = LocaleContext.Consumer;

export class LocaleProvider extends React.Component<LocaleProviderProps> {
  public static defaultProps = {
    locale: {},
    langCode: defaultLangCode,
  };

  public render() {
    const { locale, langCode } = this.props;
    return <LocaleContext.Provider value={{ locale, langCode }}>{this.props.children}</LocaleContext.Provider>;
  }
}
