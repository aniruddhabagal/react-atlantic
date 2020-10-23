import { ElementProps } from './utils';

export type HTMLInputElementProps = Pick<
    ElementProps<HTMLInputElement>,
    'value' | 'readOnly' | 'name' | 'accept'
>;

export type HTMLInputDefaultElementProps = Pick<
    ElementProps<HTMLInputElement>,
    'defaultValue'
>;
