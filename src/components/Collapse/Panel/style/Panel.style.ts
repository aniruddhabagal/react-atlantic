import { styled } from '../../../../styled';
import { StyledIcon } from '../../../Icon';

export const StyledPanel = styled.li`
    list-style-type: none;
`;

export const StyledPanelContent = styled.div``;
export const StyledPanelHeader = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;

    &:hover {
        ${StyledIcon} {
            color: ${(props) => props.theme.color.primary.alpha};
        }
    }
`;
