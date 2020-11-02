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
import { getTime } from '../../api/common';
import { StyledHeartOutlined1, StyledHeartFilled1, StyledMessageOutlined1 } from '../../api/styledAnt';
import Comments from './comments';

const Item = (): JSX.Element => {
    const [data, setData] = React.useState<IItem>({
        itemId: 1,
        groupId: 1,
        spotId: 1,
        regId: 'asd',
        regDate: new Date(),
        modDate: new Date(),
        like: 5,
        contents: '처음 작성 내용',
        likePress: false,
    });
    const [openComments, setOpenComments] = React.useState<boolean>(false);

    const onOpenComments = () => {
        setOpenComments(!openComments);
    };

    const changeLike = () => {
        const newData: IItem = {
            itemId: data.itemId,
            groupId: data.groupId,
            spotId: data.spotId,
            regId: data.regId,
            regDate: data.regDate,
            modDate: data.modDate,
            like: data.like,
            contents: data.contents,
            likePress: data.likePress,
        };

        if (newData.likePress) {
            newData.likePress = false;
            newData.like = data.like - 1;
        } else {
            newData.likePress = true;
            newData.like = data.like + 1;
        }

        setData(newData);
    };

    return (
        <>
            <StyledBorderDiv7>
                <StyledBackgroundDiv7>
                    <StyledFlex8>
                        <StyledH5>{data.regId}</StyledH5>
                        <StyledH5>{getTime()}</StyledH5>
                    </StyledFlex8>

                    <StyledDiv3>
                        <StyledRadio1 name="radio1" />
                        <StyledRadio1 name="radio1" />
                        <StyledRadio1 name="radio1" />
                    </StyledDiv3>

                    <StyledDiv4>
                        <StyledH5>{data.contents}</StyledH5>
                    </StyledDiv4>

                    <StyledTable1>
                        <StyledTableCell1 onClick={changeLike}>
                            {data.likePress ? <StyledHeartFilled1 /> : <StyledHeartOutlined1 />}
                            <StyledH6>{data.like}</StyledH6>
                        </StyledTableCell1>
                        <StyledTableCell1 onClick={onOpenComments}>
                            <StyledMessageOutlined1 />
                        </StyledTableCell1>
                    </StyledTable1>
                </StyledBackgroundDiv7>
            </StyledBorderDiv7>

            <Comments openComments={openComments} onOpenComments={onOpenComments} />
        </>
    );
};

export default Item;
