import { FC } from 'react';
import { Popup, PopupProps } from 'antd-mobile';

export interface UiPopupProps extends PopupProps {
  fullPage?: boolean,
}

export const UiPopup: FC<UiPopupProps> = ({ fullPage = false, children, ...props }) => {
  if (fullPage) {
    return (
      <Popup
        {...props}
      >
        <div className="h-[100vh] p-4">
          {children}
        </div>
      </Popup>
    );
  }

  return (
    <Popup
      {...props}
    >
      {children}
    </Popup>
  );
};
