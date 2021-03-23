import styled, { css } from 'styled-components';
import { SimpleButtonProps } from '../../../types';
import { Button } from '../../default';

export const StyledSimpleButton = styled(Button).withConfig({
    shouldForwardProp: (prop) => !['isAlternative'].includes(prop),
})<SimpleButtonProps>`
    && {
        background: none;
        box-shadow: none;
        border: none;

        &:hover {
            background: ${(props) => props.theme.color.background.beta};
        }

        ${({ isAlternative = false, ...props }) =>
            isAlternative
                ? css`
                      background: none;

                      &:hover {
                          background: ${props.theme.color.background.alpha};
                      }
                  `
                : ``}

        ${({ type = 'default', ...props }) =>
            type
                ? css`
                      ${type === 'primary'
                          ? css`
                                background: ${props.theme.color.primary.alpha};

                                &:hover {
                                    background: ${props.theme.color.primary
                                        .beta};
                                }
                            `
                          : ``}

                      ${type === 'success'
                          ? css`
                                background: ${props.theme.color.success.alpha};

                                &:hover {
                                    background: ${props.theme.color.success
                                        .beta};
                                }
                            `
                          : ``}
          
          ${type === 'warning'
                          ? css`
                                background: ${props.theme.color.warning.alpha};

                                &:hover {
                                    background: ${props.theme.color.warning
                                        .beta};
                                }
                            `
                          : ``}
          
          ${type === 'error'
                          ? css`
                                background: ${props.theme.color.error.alpha};

                                &:hover {
                                    background: ${props.theme.color.error.beta};
                                }
                            `
                          : ``}
          
          ${type === 'dashed'
                          ? css`
                                border: 1px dashed ${props.theme.color.border};
                            `
                          : ``}
                  `
                : ``}
    }
`;