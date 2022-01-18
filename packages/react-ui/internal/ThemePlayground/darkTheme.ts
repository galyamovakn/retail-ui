import { ThemeFactory } from '../../lib/theming/ThemeFactory';
import { DEFAULT_THEME_8PX_OLD } from '../../lib/theming/themes/DefaultTheme8pxOld';

export const darkTheme = ThemeFactory.create(
  {
    brandXLight: '#cae5f5',
    brandLight: '#3094d0',
    brand: '#1e79be',
    brandDark: '#1363a0',
    brandXDark: '#084f85',
    white: '#fff',
    grayXxLight: '#f2f2f2',
    grayXLight: '#e5e5e5',
    grayLight: '#a0a0a0',
    gray: '#808080',
    grayDark: '#333',
    black: '#000',
    blueXxLight: '#e4f3ff',
    blueLight: '#5199db',
    blue: '#3072c4',
    blueDark: '#1e5aa4',
    blueXDark: '#044785',
    greenXxLight: '#e2f7dc',
    green: '#3f9726',
    greenDark: '#228007',
    redXxLight: '#ffd6d6',
    red: '#d70c17',
    redDark: '#ce0014',
    yellowXxLight: '#fff0bc',
    yellow: '#f69c00',
    yellowDark: '#d97e00',
    bgDefault: '#333333',
    bgDisabled: 'rgba(255, 255, 255, 0.05)',
    bgActive: '#5199db',
    errorMain: '#d70c17',
    errorSecondary: '#ffd6d6',
    errorText: '#ce0014',
    warningMain: '#f69c00',
    warningSecondary: '#fff0bc',
    warningText: '#d97e00',
    borderColorFocus: '#5199db',
    borderColorFocusLight: '#bad7f1',
    borderColorGrayDark: '#4D4D4D',
    borderColorGrayLight: '#4D4D4D',
    borderColorError: '#d70c17',
    borderColorWarning: '#f69c00',
    outlineColorFocus: '#fff',
    placeholderColor: '#aaa',
    placeholderColorLight: '#bbb',
    blinkColor: 'rgba(0, 136, 255, 0.4)',
    controlBorderWidth: '1px',
    controlLineHeightSmall: '20px',
    controlLineHeightMedium: '20px',
    controlLineHeightLarge: '22px',
    controlPaddingYSmall: '6px',
    controlPaddingYMedium: '9px',
    controlPaddingYLarge: '10px',
    controlHeightSmall: '34px',
    controlHeightMedium: '40px',
    controlHeightLarge: '44px',
    checkboxCheckedColor: '#fff',
    get checkboxBg() {
      return this.bgDefault;
    },
    checkboxShadow: '0 0 0 1px rgba(255, 255, 255, 0.15)',
    checkboxHoverBg: 'none',
    checkboxBgDisabled: 'rgba(255, 255, 255, 0.05)',
    checkboxShadowDisabled: '0 0 0 1px #4D4D4D',
    get checkboxOutlineColorFocus() {
      return this.bgDefault;
    },
    get checkboxActiveBg() {
      return this.bgDefault;
    },
    get checkboxCheckedActiveBg() {
      return this.bgDefault;
    },
    get radioBgImage() {
      return `linear-gradient(${this.bgDefault},${this.bgDefault})`;
    },
    radioBoxShadow: '0 0 0 1px rgba(255, 255, 255, 0.15)',
    radioCheckedBulletColor: '#fff',
    radioHoverBg: 'none',
    radioHoverShadow: '0 0 0 1px rgba(255, 255, 255, 0.15)',
    radioDisabledShadow: '0 0 0 1px #4D4D4D',
    radioDisabledBg: 'rgba(255, 255, 255, 0.05)',
    get radioActiveBg() {
      return this.bgDefault;
    },
    textColorDefault: '#fff',
    textColorInvert: '#fff',
    textColorDisabled: '#a0a0a0',
    linkColor: '#fff',
    linkActiveColor: 'rgba(255, 255, 255, 0.66)',
    linkHoverColor: '#fff',
    linkDisabledColor: '#a0a0a0',
    linkHoverTextDecoration: 'underline',
    menuItemHoverBg: '#0488E0',
    menuItemSelectedBg: 'rgba(255, 255, 255, 0.05)',
    loaderBg: '#333',
    loaderOpacity: '0.9',
    btnDisabledBg: 'rgba(255, 255, 255, 0.05)',
    btnCheckedBg: '#737373',
    btnCheckedTextColor: '#fff',
    btnDefaultBg: '#333333',
    btnDefaultHoverBg: '#444444',
    btnDefaultBgStart: 'none',
    btnDefaultBgEnd: 'none',
    btnDefaultBorderColor: 'rgba(255,255,255, 1)',
    btnDefaultBorderBottomColor: '',
    btnDefaultHoverBgStart: '#333',
    btnDefaultHoverBgEnd: '#333',
    btnDefaultHoverBorderColor: 'rgba(255,255,255,0.9)',
    btnDefaultHoverBorderBottomColor: 'rgba(0,0,0,0.15)',
    btnDefaultActiveBg: '#e1e1e1',
    btnDefaultActiveShadow: 'inset 0 1px 2px 0 rgba(0, 0, 0, 0.1)',
    btnDefaultActiveBorderColor: 'rgba(0, 0, 0, 0.2)',
    btnDefaultActiveBorderTopColor: 'rgba(0, 0, 0, 0.1)',
    btnSuccessBg: '#419d14',
    btnSuccessBgStart: '#4ba91d',
    btnSuccessBgEnd: '#37910b',
    btnSuccessTextColor: '#fff',
    btnSuccessBorderColor: 'rgba(25, 103, 6, 0.7)',
    btnSuccessBorderBottomColor: 'rgba(21, 80, 7, 0.5)',
    btnSuccessHoverBgStart: '#3b8d13',
    btnSuccessHoverBgEnd: '#317e0b',
    btnSuccessHoverBorderColor: 'rgba(7, 73, 1, 0.7)',
    btnSuccessHoverBorderBottomColor: 'rgba(16, 70, 4, 0.3)',
    btnSuccessActiveBg: '#35840e',
    btnSuccessActiveShadow: 'inset 0 1px 2px 0 rgba(0, 0, 0, 0.1)',
    btnSuccessActiveBorderColor: 'rgba(4, 63, 0, 0.75)',
    btnSuccessActiveBorderTopColor: 'rgba(9, 32, 4, 0.6)',
    btnPrimaryBg: '#1e8dd4',
    btnPrimaryBgStart: '#2899ea',
    btnPrimaryBgEnd: '#167ac1',
    btnPrimaryTextColor: '#fff',
    btnPrimaryBorderColor: 'rgba(14, 81, 129, 0.7)',
    btnPrimaryBorderBottomColor: 'rgba(7, 37, 80, 0.5)',
    btnPrimaryHoverBgStart: '#0087d5',
    btnPrimaryHoverBgEnd: '#167ac1',
    btnPrimaryHoverBorderColor: 'rgba(5, 60, 99, 0.7)',
    btnPrimaryHoverBorderBottomColor: 'rgba(7, 37, 80, 0.3)',
    btnPrimaryActiveBg: '#0079c3',
    btnPrimaryActiveShadow: 'inset 0 1px 2px 0 rgba(0, 0, 0, 0.2)',
    btnPrimaryActiveBorderColor: 'rgba(10, 63, 99, 0.75)',
    btnPrimaryActiveBorderTopColor: 'rgba(8, 45, 96, 0.5)',
    btnDangerBg: '#e14c30',
    btnDangerBgStart: '#ec5438',
    btnDangerBgEnd: '#d44327',
    btnDangerTextColor: '#fff',
    btnDangerBorderColor: 'rgba(173, 15, 0, 0.7)',
    btnDangerBorderBottomColor: 'rgba(0, 0, 0, 0.4)',
    btnDangerHoverBgStart: '#d44227',
    btnDangerHoverBgEnd: '#c73013',
    btnDangerHoverBorderColor: 'rgba(145, 0, 0, 0.7)',
    btnDangerHoverBorderBottomColor: 'rgba(90, 3, 3, 0.4)',
    btnDangerActiveBg: '#cd381b',
    btnDangerActiveShadow: 'inset 0 1px 2px 0 rgba(0, 0, 0, 0.1)',
    btnDangerActiveBorderColor: 'rgba(108, 7, 7, 0.75)',
    btnDangerActiveBorderTopColor: 'rgba(90, 3, 3, 0.4)',
    btnPayBg: '#ffc943',
    btnPayBgStart: '#ffd54b',
    btnPayBgEnd: '#ffbb39',
    btnPayBorderColor: 'rgba(238, 169, 34, 0.7)',
    btnPayBorderBottomColor: 'rgba(77, 16, 0, 0.56)',
    btnPayHoverBgStart: '#ffbd3a',
    btnPayHoverBgEnd: '#f8a91d',
    btnPayHoverBorderColor: 'rgba(227, 142, 8, 0.7)',
    btnPayHoverBorderBottomColor: 'rgba(93, 20, 3, 0.4)',
    btnPayActiveBg: '#fbb028',
    btnPayActiveShadow: 'inset 0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    btnPayActiveBorderColor: 'rgba(210, 144, 0, 0.7)',
    btnPayActiveBorderTopColor: 'rgba(0, 0, 0, 0.44)',
    selectPlaceholderColor: '#a0a0a0',
    tabColorFocus: '#5199db',
    tabColorError: '#e14c30',
    tabColorWarning: '#ffc943',
    tabColorSuccess: '#419d14',
    tabColorPrimary: '#1e8dd4',
    tabColorHover: '#bad7f1',
    tabColorHoverError: '#f1ac9f',
    tabColorHoverWarning: '#ffeec3',
    tabColorHoverSuccess: '#7de849',
    tabColorHoverPrimary: '#84c4ee',
    tooltipCloseBtnColor: '#808080',
    tooltipCloseBtnHoverColor: '#606060',
    modalBackBg: '#333',
    modalBackOpacity: '0.6',
    modalCloseButtonColor: 'rgba(255, 255, 255, 0.5)',
    modalCloseButtonDisabledColor: '#8b8b8b',
    modalCloseButtonHoverColor: 'rgba(255, 255, 255, 0.7)',
    modalFixedHeaderBg: '#333333',
    modalFixedHeaderShadow: '0 1px 7px #000000',
    modalFixedFooterShadow: '0 -1px 10px #000000',
    modalFooterBg: '#272727',
    modalAdaptiveThreshold: '425px',
    sidePageFooterPanelBg: '#272727',
    sidePageCloseButtonColor: 'rgba(255, 255, 255, 0.5)',
    sidePageCloseButtonHoverColor: 'rgba(255, 255, 255, 0.7)',
    sidePageContainerShadow: '0 5px 10px rgba(0, 0, 0, 0.2)',
    dateInputIconColor: '#666',
    dateInputMaskColor: '#4D4D4D',
    calendarCellBg: '#333333',
    calendarCellHoverBgColor: '#5199db',
    calendarCellHoverColor: 'white',
    calendarCellActiveHoverColor: 'white',
    calendarCellWeekendColor: '#FF1414',
    calendarCellTodayBorder: '1px solid #333333',
    calendarCellSelectedBgColor: '#5199db',
    calendarCellSelectedFontColor: 'inherit',
    calendarMonthHeaderStickedBgColor: '#333333',
    calendarMonthTitleBorderBottomColor: '#333333',
    dateSelectMenuBg: '#333333',
    dateSelectMenuItemBgActive: '#5199db',
    dateSelectMenuItemBgSelected: '#5199db',
    dateSelectMenuItemBgDisabled: '#333333',
    dateSelectMenuItemFontActive: '#fff',
    dateSelectMenuItemFontSelected: '#fff',
    dateSelectMenuItemFontDisabled: '#a0a0a0',
    datePickerOpenBtnColor: '#333',
    pickerBg: '#333333',
    pickerShadow: '0 0 0 1px #4d4d4d, 0 3px 10px 0 rgba(0, 0, 0, 0.2)',
    pickerTodayWrapperBgColor: '#333333',
    pickerTodayWrapperBorderTop: '1px solid #4D4D4D',
    pickerTodayWrapperHoverBgColor: '#5199db',
    pagingDotsColor: '#A0A0A0',
    pagingForwardLinkColor: '#00A8FF',
    pagingForwardLinkDisabledColor: '#A0A0A0',
    pagingPageLinkActiveBg: 'rgba(255, 255, 255, 0.06)',
    pagingPageLinkActiveColor: '#a0a0a0',
    pagingPageLinkHoverBg: 'rgba(255, 255, 255, 0.05)',
    pagingPageLinkHintColor: 'rgba(160, 160, 160, 0.35)',
    menuSeparatorBorderColor: '#404040',
    toastBg: 'rgba(0, 0, 0, 0.8)',
    toastColor: 'white',
    toastLinkColor: '#80caff',
    toastCloseColor: '#a0a0a0',
    toastCloseHoverColor: 'white',
    tdDividerBg: '#808080',
    menuItemPaddingForIcon: '36px',
    menuBorder: 'rgba(0, 0, 0, 0)',
    menuShadow: '0 0 0 1px #404040, 0 5px 20px 0 rgba(0, 0, 0, 0.4)',
    get toggleBaseBg() {
      return this.bgDefault;
    },
    toggleBgChecked: '#3072c4',
    toggleShadowColorWarning: '#f69c00',
    toggleShadowColorError: '#d70c17',
    toggleBgActive: '#e5e5e5',
    toggleFocusShadowColor: '#5199db',
    toggleBorderColor: 'rgba(255, 255, 255, 0.15)',
    get toggleBgDisabled() {
      return this.bgDefault;
    },
    toggleDisabledHandleBg: '#4D4D4D',
    btnMenuArrowColor: '#666',
    popupBorderRadius: '2px',
    popupBorder: '1px solid',
    popupBorderColor: '#4D4D4D',
    popupDropShadow: 'drop-shadow(0 0 1px rgba(0, 0, 0, 0.1)) drop-shadow(0 1px 2px rgba(0, 0, 0, 0.3))',
    popupBoxShadow: '0 0 0 1px rgba(0, 0, 0, 0.1), 0 3px 10px 0 rgba(0, 0, 0, 0.2)',
    popupTextColor: '#fff',
    inputColor: '#fff',
    inputTextColor: '#fff',
    inputBg: '#333',
    inputPlaceholderColorDisabled: '#aaa',
    btnDisabledTextColor: '#aaa',
    specificityLevel: '0',
    textareaBg: 'none',
    textareaColor: 'inherit',

    // react-ui-addons vars
    // live here because
    // dark theme is unofficial
    tbBg: '#262626',
    tbShadow: '0 1px 1px 0 rgba(0, 0, 0, 0.1), 0 1px 8px 0 rgba(0, 0, 0, 0.1)',
    logoColor: 'white',
    logoHoverColor: '#000',
  },
  DEFAULT_THEME_8PX_OLD,
);
