import * as React from 'react';
import { StyledFlex14, StyledFlex15 } from '../../api/styled';
import { StyledH5, StyledH6 } from '../../api/styledFont';
import { IGroup, IGroupMember } from '../../api/interface';
import { color2 } from '../../api/common';

interface IGroupCard {
    group: IGroup;
    groupMembers: IGroupMember[];
}

const GroupCard: React.FC<IGroupCard> = ({ group, groupMembers }): JSX.Element => {
    return (
        <>
            <StyledFlex14>
                <StyledFlex15>
                    <StyledH5 style={{ marginRight: '5px' }}>{group.groupName}</StyledH5>
                    <StyledH6 style={{ color: color2 }}>{groupMembers.length}</StyledH6>
                </StyledFlex15>

                <div>
                    <StyledH6 style={{ color: 'red', opacity: '0.7' }}>99+</StyledH6>
                </div>
            </StyledFlex14>
        </>
    );
};

export default GroupCard;
