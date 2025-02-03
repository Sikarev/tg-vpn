import CopySvg from './copy.svg';
import { FC, HTMLProps } from 'react';

export const CopyIcon: FC<HTMLProps<HTMLImageElement>> = (props) => (<img alt="" src={CopySvg} {...props} />);