import * as React from 'react';
import { StyledFlex14, StyledFlex15 } from '../../api/styled';
import { StyledH5, StyledH6 } from '../../api/styledFont';
import { IGroup, IGroupMember } from '../../api/interface';
import { color2, goGroupHome } from '../../api/common';
import { useDispatch } from 'react-redux';
import { groupSetGroupAction } from '../../modules/actions';

interface IGroupCard {
    group: IGroup;
    groupMembers: IGroupMember[];
}

const GroupCard: React.FC<IGroupCard> = ({ group, groupMembers }): JSX.Element => {
    const dispatch = useDispatch();

    const onClickGroupCard = () => {
        dispatch(groupSetGroupAction(group));
        goGroupHome();
    };

    return (
        <>
            <StyledFlex14 onClick={onClickGroupCard}>
                <StyledFlex15>
                    <StyledH5 style={{ marginRight: '5px' }}>{group.groupName}</StyledH5>
                    <StyledH6 style={{ color: color2 }}>{groupMembers.length}</StyledH6>
                </StyledFlex15>
            </StyledFlex14>
        </>
    );
};

export default GroupCard;
