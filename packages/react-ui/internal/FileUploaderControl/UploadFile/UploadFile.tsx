import React, { ReactNode, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';

import { IUploadFile, UploadFileStatus } from '../../../lib/fileUtils';
import { formatBytes } from '../../../lib/utils';
import { TextWidthHelper } from '../../../internal/TextWidthHelper/TextWidthHelper';
import { truncate } from '../../../lib/stringUtils';
import { Spinner } from '../../../components/Spinner';
import { FileUploaderControlContext } from '../FileUploaderControlContext';
import { Tooltip } from '../../../components/Tooltip';
import { cx } from '../../../lib/theming/Emotion';
import { ThemeContext } from '../../..';
import { DeleteIcon, ErrorIcon, OkIcon } from '../../icons/16px';

import { jsStyles } from './UploadFile.styles';

interface IUploadFileProps {
  file: IUploadFile;
  showSize?: boolean;
}

interface IUploadFileState {
  fileNameWidth: number;
  fileNameElementWidth: number;
}

export const UploadFile = (props: IUploadFileProps) => {
  const { file, showSize } = props;
  const { id, originalFile, status, validationResult } = file;
  const { name, size } = originalFile;

  const [hovered, setHovered] = useState<boolean>(false);
  const textHelperRef = useRef<TextWidthHelper>(null);
  const fileNameElementRef = useRef<HTMLSpanElement>(null);
  const { removeFile } = useContext(FileUploaderControlContext);
  const theme = useContext(ThemeContext);

  const [state, setState] = useState<IUploadFileState>({
    fileNameWidth: 0,
    fileNameElementWidth: 0,
  });

  const { fileNameWidth, fileNameElementWidth } = state;

  const formattedSize = useMemo(() => formatBytes(size, 1), [size]);

  useEffect(() => {
    if (fileNameElementRef.current && textHelperRef.current) {
      setState({
        fileNameWidth: textHelperRef.current?.getTextWidth(),
        fileNameElementWidth: fileNameElementRef.current?.getBoundingClientRect().width,
      });
    }
  }, [fileNameElementRef.current, textHelperRef.current]);

  const truncatedFileName = useMemo(() => {
    if (!fileNameWidth && !fileNameElementWidth) {
      return null;
    }

    if (fileNameWidth <= fileNameElementWidth) {
      return name;
    }

    const charWidth = Math.ceil(fileNameWidth / name.length);
    const maxCharsCountInSpan = Math.ceil(fileNameElementWidth / charWidth);

    return truncate(name, maxCharsCountInSpan);
  }, [name, fileNameElementWidth, fileNameWidth]);

  const handleRemove = useCallback(
    (event: React.MouseEvent<HTMLSpanElement>) => {
      event.stopPropagation();
      removeFile(id);
    },
    [removeFile, id],
  );

  const { isValid, message } = validationResult;

  const icon: ReactNode = useMemo(() => {
    const deleteIcon = <DeleteIcon className={jsStyles.deleteIcon(theme)} />;

    if (hovered) {
      return deleteIcon;
    }

    switch (status) {
      case UploadFileStatus.Loading:
        return <Spinner type="mini" dimmed caption="" />;
      case UploadFileStatus.Uploaded:
        return <OkIcon color={theme.fileUploaderIconColor} />;
      default:
        if (!isValid) {
          return <ErrorIcon />;
        }
        return deleteIcon;
    }
  }, [hovered, status, isValid, theme]);

  const renderTooltipContent = useCallback((): ReactNode => {
    return isValid ? null : message;
  }, [isValid, message]);

  const contentClassNames = cx(jsStyles.content(), {
    [jsStyles.error(theme)]: !isValid,
  });

  const handleMouseEnter = useCallback(() => {
    setHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setHovered(false);
  }, []);

  return (
    <div
      data-tid="UploadFile"
      className={jsStyles.root()}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Tooltip data-tid="Tooltip" pos="right middle" render={renderTooltipContent}>
        <div className={contentClassNames}>
          <TextWidthHelper ref={textHelperRef} text={name} />
          <span data-tid="Name" ref={fileNameElementRef} className={jsStyles.name()}>
            {truncatedFileName}
          </span>
          {!!showSize && formattedSize && (
            <span data-tid="Size" className={jsStyles.size()}>
              {formattedSize}
            </span>
          )}
          <div data-tid="Icon" onClick={handleRemove} className={jsStyles.icon(theme)}>
            {icon}
          </div>
        </div>
      </Tooltip>
    </div>
  );
};

UploadFile.displayName = 'UploadFile';