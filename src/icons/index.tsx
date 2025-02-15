import CopySvg from './copy.svg';
import WalletSvg from './wallet.svg';
import PeopleSvg from './people.svg';
import PasswordSvg from './password.svg';
import DocumentSvg from './document.svg';
import { FC, HTMLProps } from 'react';

export const CopyIcon: FC<HTMLProps<HTMLImageElement>> = (props) => (<img alt="" src={CopySvg} {...props} />);
export const WalletIcon: FC<HTMLProps<HTMLImageElement>> = (props) => (<img alt="" src={WalletSvg} {...props} />);
export const PeopleIcon: FC<HTMLProps<HTMLImageElement>> = (props) => (<img alt="" src={PeopleSvg} {...props} />);
export const PasswordIcon: FC<HTMLProps<HTMLImageElement>> = (props) => (<img alt="" src={PasswordSvg} {...props} />);
export const DocumentIcon: FC<HTMLProps<HTMLImageElement>> = (props) => (<img alt="" src={DocumentSvg} {...props} />);
