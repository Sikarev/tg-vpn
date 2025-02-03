import { FC } from 'react';
import { Button, ButtonProps } from 'antd-mobile';

export const UiButton: FC<ButtonProps> = ({ className, ...props }) => {
  return (
    <Button className={`!border-none !rounded-full text-base ${className ?? ''}`} { ...props } />
  )
}
