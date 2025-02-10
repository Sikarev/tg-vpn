import { FC, HTMLProps, PropsWithChildren, ReactNode } from 'react';

export interface UICardProps extends PropsWithChildren, Pick<HTMLProps<HTMLDivElement>, 'onClick' | 'className'> {
  title?: ReactNode;
  imageProps?: HTMLProps<HTMLImageElement>;
  size?: 'default' | 'small',
  startIcon?: ReactNode;
}

export const UiCard: FC<UICardProps> = ({ size = 'default', ...props }) => {
  return (
    <div
      className={`rounded-[32px] ${size === 'small' ? 'px-4 py-5' : 'px-6 py-8'} bg-[#3D3D3D80] flex flex-col gap-2 ${props.className}`}
      onClick={props.onClick}
    >
      {props.imageProps && (
        <div className="rounded-[24px] -mx-4 mb-4 -mt-6 bg-[#78788029] h-fit">
          <img alt="" {...props.imageProps} />
        </div>
      )}
      {props.title && (<div className="font-semibold text-white text-xl">{props.title}</div>)}
      <div className="text-[#EBEBF560] text-base font-normal">
        {props.startIcon != null ? (
          <div className="flex gap-4 items-center">
            <div className="flex justify-center items-center size-[72px] bg-[#2C2C2E] rounded-[24px]">
              {props.startIcon}
            </div>
            {props.children}
          </div>
        ) : (props.children)}
      </div>
    </div>
  )
}