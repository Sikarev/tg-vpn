import { FC, Fragment, ReactNode, useState } from 'react';
import { FloatingPanel, FloatingPanelProps } from 'antd-mobile';
import { CloseOutlined } from '@ant-design/icons';

const anchors = [100, window.innerHeight * 0.4, window.innerHeight * 0.8]

export interface UiFloatingPanelProps extends Omit<FloatingPanelProps, 'anchors'> {
  renderOpener: (open: () => void) => ReactNode;
}

export const UiFloatingPanel: FC<UiFloatingPanelProps> = ({ children, renderOpener, ...props}) => {
  const [isVisible, setIsVisible] = useState(false);

  const showPanel = () => {
    setIsVisible(true);
  }
  const hidePanel = () => {
    setIsVisible(false);
  }


  return (
    <Fragment>
      {renderOpener(showPanel)}
      {isVisible && (
        <FloatingPanel
          anchors={anchors}
          {...props}
        >
          <div className="p-4 pt-0">
            <div className="w-full flex justify-end">
              <div
                onClick={hidePanel}
                className="flex justify-center items-center rounded-full size-[30px] bg-[#3D3D3D80]"
              >
                <CloseOutlined className="text-sm !text-[#EBEBF560]" />
              </div>
            </div>

            {children}
          </div>
        </FloatingPanel>
      )}
    </Fragment>
  );
}
