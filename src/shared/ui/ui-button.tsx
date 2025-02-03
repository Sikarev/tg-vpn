import { FC } from 'react';
import { Button, ButtonProps } from 'antd-mobile';

export const UiButton: FC<ButtonProps> = ({ className, ...props }) => {
  return (
    <Button className={`w-full !rounded-full !py-4 text-base ${className ?? ''}`} { ...props } />
  )
}
