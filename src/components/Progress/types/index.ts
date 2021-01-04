import { CommonHTMLProps, MouseEvents } from '../../../types';

export type ProgressProps = {
    value: number;
    transitionColors?: string[];
} & CommonHTMLProps<HTMLDivElement> &
    MouseEvents<HTMLDivElement>;

export type ProgressBarProps = {} & ProgressProps;

export type ProgressCirleProps = {
    circleSize?: number;
} & ProgressProps;
