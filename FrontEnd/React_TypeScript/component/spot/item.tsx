import * as React from 'react';
import {
    StyledBorderDiv7,
    StyledBackgroundDiv7,
    StyledFlex8,
    StyledDiv3,
    StyledRadio1,
    StyledDiv4,
    StyledTable1,
    StyledTableCell1,
} from '../../api/styled';
import { StyledH5, StyledH6 } from '../../api/styledFont';
import { IItem } from '../../api/interface';
import { StyledHeartOutlined1, StyledHeartFilled1, StyledMessageOutlined1 } from '../../api/styledAnt';

interface IChangeItem {
    item: IItem;
    onLikePress: (index: number) => void;
    onOpenComments: () => void;
}

const Item: React.FC<IChangeItem> = ({ item, onLikePress, onOpenComments }): JSX.Element => {
    return (
        <>
            <StyledBorderDiv7>
                <StyledBackgroundDiv7>
                    <StyledFlex8>
                        <StyledH5>{item.regId}</StyledH5>
                        <StyledH5>{item.regDate}</StyledH5>
                    </StyledFlex8>

                    <StyledDiv3>
                        <StyledRadio1 name="radio1" />
                        <StyledRadio1 name="radio1" />
                        <StyledRadio1 name="radio1" />
                    </StyledDiv3>

                    <StyledDiv4>
                        <StyledH5>{item.contents}</StyledH5>
                    </StyledDiv4>

                    <StyledTable1>
                        <StyledTableCell1 onClick={() => onLikePress(item.index as number)}>
                            {item.likePress ? <StyledHeartFilled1 /> : <StyledHeartOutlined1 />}
                            <StyledH6>{item.like}</StyledH6>
                        </StyledTableCell1>
                        <StyledTableCell1 onClick={onOpenComments}>
                            <StyledMessageOutlined1 />
                        </StyledTableCell1>
                    </StyledTable1>
                </StyledBackgroundDiv7>
            </StyledBorderDiv7>
        </>
    );
};

export default Item;
