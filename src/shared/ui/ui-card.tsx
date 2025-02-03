import { FC, HTMLProps, PropsWithChildren, ReactNode } from 'react';

export interface UICardProps extends PropsWithChildren {
  title?: ReactNode;
  imageProps?: HTMLProps<HTMLImageElement>;
}

export const UiCard: FC<UICardProps> = (props,) => {
  return (
    <div className="rounded-[32px] px-6 py-8 bg-[#3D3D3D80] flex flex-col gap-2">
      {props.imageProps && (
        <div className="rounded-[24px] -mx-4 mb-4 -mt-6 bg-[#78788029] h-fit">
          <img alt="" {...props.imageProps} />
        </div>
      )}
      {props.title && (<div className="font-semibold text-white text-xl">{props.title}</div>)}
      <div className="text-[#EBEBF560] text-base font-normal">
        {props.children}
      </div>
    </div>
  )
}