import * as React from 'react';
import { StyledCardDiv1, StyledFlex3, StyledDiv2, StyledFlex4 } from '../../api/styled';
import { StyledH5, StyledH6, StyledBorderH6 } from '../../api/styledFont';
import { IGroup, IGroupMember } from '../../api/interface';

interface IGroupCard {
    group: IGroup;
    groupMembers: IGroupMember[];
}

const GroupCard: React.FC<IGroupCard> = ({ group, groupMembers }): JSX.Element => {
    return (
        <StyledCardDiv1 extend={false}>
            <StyledDiv2>
                <StyledFlex3>
                    <StyledH5>{group.groupName}</StyledH5>
                    <StyledH6 style={{ color: 'red', opacity: '0.7' }}>99+</StyledH6>
                </StyledFlex3>
                <StyledFlex4 extend={false}>
                    {groupMembers.map((groupMember, key) => {
                        return <StyledBorderH6 key={key}>{groupMember.userId}</StyledBorderH6>;
                    })}
                </StyledFlex4>
            </StyledDiv2>
        </StyledCardDiv1>
    );
};

export default GroupCard;
