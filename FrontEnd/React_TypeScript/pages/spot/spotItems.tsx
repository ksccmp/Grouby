import * as React from 'react';
import { StyledDiv1, StyledFlex2, StyledDiv5, StyledDiv6, StyledFlex13, StyledDiv8 } from '../../api/styled';
import { StyledPlusCircleOutlined4 } from '../../api/styledAnt';
import { StyledH4, StyledH5 } from '../../api/styledFont';
import { goSpotRegItem, getTime } from '../../api/common';
import { IGroup, IItem, ISpot } from '../../api/interface';
import Item from '../../component/spot/item';
import Comments from '../../component/spot/comments';
import { useSelector } from 'react-redux';
import { IIndexReducer } from '../../modules/reducer/indexReducer';

const SpotItems = (): JSX.Element => {
    const reduxGroup: IGroup = useSelector((state: IIndexReducer) => state.GroupReducer.group);
    const reduxSpot: ISpot = useSelector((state: IIndexReducer) => state.SpotReducer.spot);

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
            <StyledDiv1>
                <StyledDiv5 style={{ marginBottom: '0.5rem' }}>
                    <StyledDiv6>
                        <StyledFlex2>
                            <StyledDiv8>
                                <StyledH5 style={{ opacity: '0.6', marginRight: '5px' }}>
                                    {reduxGroup.groupName}
                                </StyledH5>
                                <StyledH4>{reduxSpot.spotName}</StyledH4>
                            </StyledDiv8>
                            <StyledFlex13>
                                <StyledPlusCircleOutlined4 onClick={goSpotRegItem} />
                            </StyledFlex13>
                        </StyledFlex2>
                    </StyledDiv6>
                </StyledDiv5>

                <div>
                    {items.map((item, key) => (
                        <Item item={item} onLikePress={onLikePress} onOpenComments={onOpenComments} key={key} />
                    ))}
                </div>
            </StyledDiv1>

            <Comments openComments={openComments} onOpenComments={onOpenComments} />
        </>
    );
};

export default SpotItems;
