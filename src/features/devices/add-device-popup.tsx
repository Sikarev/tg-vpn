import { FC, Fragment, ReactNode, useState } from 'react';
import { LeftOutlined } from '@ant-design/icons';
import { UiButton } from '../../shared/ui';
import { Input } from 'antd-mobile';
import { UiPopup } from '../../shared/ui/ui-popup.tsx';

export interface AddDevicePopupProps {
  renderOpener: (open: () => void) => ReactNode;
}

export const AddDevicePopup: FC<AddDevicePopupProps> = (props) => {
  const [isVisible, setIsVisible] = useState(false);

  const openPopup = () => {
    setIsVisible(true);
  }
  const closePopup = () => {
    setIsVisible(false);
  }

  return (
    <Fragment>
      {props.renderOpener(openPopup)}
      <UiPopup
        fullPage
        onClose={closePopup}
        visible={isVisible}
      >
        <div className="h-full flex flex-col justify-between">
          <div className="flex flex-col items-center">
            <LeftOutlined className="self-start mx-4 mb-2 text-base" onClick={closePopup}/>
            <div className="font-bold text-xl mb-3">Добавление устройства</div>
            <div className="text-[#EBEBF560]">Придумайте имя</div>
          </div>

          <Input
            className="[&_.adm-input-element]:!text-center [&_.adm-input-element]:!text-[28px]"
            placeholder="Устройство 1"
          />

          <UiButton
            onClick={closePopup}
            className="!w-full !h-[56px]"
            color="primary"
          >
            Далее
          </UiButton>
        </div>
      </UiPopup>
    </Fragment>
  );
}
