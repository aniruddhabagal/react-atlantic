import React, { PropsWithChildren, ReactText } from 'react';
import { CollapseIconFactoryType } from '../../types';
import { Icon } from '../../../Icon';
import { HorizontalPosition } from '../../../../types';

export type CollapseProviderProps = {
    activeUnique: string[] | number[] | ReactText;
    isAccordion?: boolean;
    onClick?: SetUniqueKey;
    expandIconPosition?: HorizontalPosition;
};
export type CollapseProviderPropsWithChildren = PropsWithChildren<
    CollapseProviderProps & {
        expandIcon: CollapseIconFactoryType;
    }
>;

export type CollapseContextState = Pick<
    CollapseProviderProps,
    'activeUnique'
> & {
    expandIcon: CollapseIconFactoryType;
    expandIconPosition: HorizontalPosition;
    onClick?: SetUniqueKey;
};
export type CollapseContextValue = {};

export const defaultCollapseContextState: CollapseContextState = {
    activeUnique: 1,
    onClick: () => null,
    expandIcon: (props) => (
        <Icon name={props.isActive ? 'arrowDown' : 'arrowRight'} />
    ),
    expandIconPosition: 'left',
};

export type SetUniqueKey = (key: string | number) => void;
