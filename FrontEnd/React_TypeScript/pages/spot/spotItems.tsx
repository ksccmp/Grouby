import * as React from 'react';
import {
    StyledNineDiv1,
    StyledDiv1,
    StyledFlex2,
    StyledNineDiv2,
    StyledBorderDiv1,
    StyledBackgroundDiv1,
    StyledText1,
    StyledGrid1,
    StyledFlex1,
    StyledWidthLine1,
} from '../../api/styled';
import { StyledLeftOutLined1 } from '../../api/styledAnt';
import { StyledH3, StyledH5, StyledH4 } from '../../api/styledFont';
import { goBack, goSpotRegItem, getTime } from '../../api/common';
import { IItem } from '../../api/interface';
import Item from '../../component/spot/item';
import Comments from '../../component/spot/comments';

const SpotItems = (): JSX.Element => {
    const [items, setItems] = React.useState<IItem[]>([
        {
            index: 0,
            itemId: 1,
            groupId: 1,
            groupName: '수찬 커플',
            spotId: 1,
            spotName: '사당 요란한식당',
            regId: 'ksccmp',
            regDate: getTime(),
            modDate: getTime(),
            like: 5,
            contents: '처음 작성 내용',
            likePress: true,
        },
        {
            index: 1,
            itemId: 2,
            groupId: 1,
            groupName: '수찬 커플',
            spotId: 1,
            spotName: '사당 요란한식당',
            regId: 'intan',
            regDate: getTime(),
            modDate: getTime(),
            like: 3,
            contents: '저는 기요미에용',
            likePress: true,
        },
        {
            index: 2,
            itemId: 3,
            groupId: 1,
            groupName: '수찬 커플',
            spotId: 1,
            spotName: '사당 요란한식당',
            regId: 'ksccmp',
            regDate: getTime(),
            modDate: getTime(),
            like: 1,
            contents: '으에에에에에엑',
            likePress: false,
        },
    ]);
    const [openComments, setOpenComments] = React.useState<boolean>(false);

    const onOpenComments = () => {
        setOpenComments(!openComments);
    };

    const onLikePress = (index: number) => {
        const newItems = items.slice();
        if (newItems[index].likePress) {
            newItems[index].like--;
        } else {
            newItems[index].like++;
        }
        newItems[index].likePress = !newItems[index].likePress;
        setItems(newItems);
    };

    return (
        <>
            <StyledNineDiv1>
                <StyledDiv1>
                    <div style={{ margin: '0.5rem 0' }}>
                        <StyledFlex2>
                            <div>
                                <StyledH4>수찬 커플/사당 요란한식당</StyledH4>
                            </div>
                            <div onClick={goSpotRegItem}>
                                <StyledH4>등록</StyledH4>
                            </div>
                        </StyledFlex2>
                    </div>

                    <div>
                        <StyledBorderDiv1>
                            <StyledBackgroundDiv1>
                                <StyledText1 placeholder="검색"></StyledText1>
                            </StyledBackgroundDiv1>
                        </StyledBorderDiv1>
                    </div>

                    <div style={{ textAlign: 'center' }}>
                        <StyledGrid1>
                            <StyledFlex1>
                                <StyledWidthLine1 />
                            </StyledFlex1>
                            <StyledH5>1건</StyledH5>
                            <StyledFlex1>
                                <StyledWidthLine1 />
                            </StyledFlex1>
                        </StyledGrid1>
                    </div>

                    <div>
                        {items.map((item, key) => (
                            <Item item={item} onLikePress={onLikePress} onOpenComments={onOpenComments} key={key} />
                        ))}
                    </div>
                </StyledDiv1>
            </StyledNineDiv1>

            <Comments openComments={openComments} onOpenComments={onOpenComments} />
        </>
    );
};

export default SpotItems;
