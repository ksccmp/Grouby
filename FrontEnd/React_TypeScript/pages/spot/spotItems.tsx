import * as React from 'react';
import { StyledDiv1, StyledFlex2, StyledDiv10, StyledDiv6, StyledFlex13, StyledDiv8 } from '../../api/styled';
import { StyledPlusCircleOutlined4 } from '../../api/styledAnt';
import { StyledH4, StyledH5 } from '../../api/styledFont';
import { goSpotRegItem } from '../../api/common';
import { IComment, IGroup, IItem, ISpot, IUploadFile, IUser } from '../../api/interface';
import Item from '../../component/spot/item';
import Comments from '../../component/spot/comments';
import { useDispatch, useSelector } from 'react-redux';
import { IIndexReducer } from '../../modules/reducer/indexReducer';
import axios from '../../api/axios';
import { itemSetOpenItemIdAction } from '../../modules/actions';

const SpotItems = (): JSX.Element => {
    const dispatch = useDispatch();

    const reduxUser: IUser = useSelector((state: IIndexReducer) => state.UserReducer.user);
    const reduxGroup: IGroup = useSelector((state: IIndexReducer) => state.GroupReducer.group);
    const reduxSpot: ISpot = useSelector((state: IIndexReducer) => state.SpotReducer.spot);

    const [items, setItems] = React.useState<IItem[]>([]);
    const [openComments, setOpenComments] = React.useState<boolean>(false);
    const [comments, setComments] = React.useState<IComment[]>([]);

    React.useEffect(() => {
        getItems();
    }, []);

    // 아이템 불러오기
    const getItems = async () => {
        const res = await axios.get('/item/selectByIds', {
            params: {
                groupId: reduxGroup.groupId,
                spotId: reduxSpot.spotId,
                regId: reduxUser.userId,
            },
            headers: {
                'user-token': localStorage.userToken,
            },
        });

        if (res.data.success) {
            const resItems: IItem[] = res.data.data;

            resItems.forEach((resItem: IItem, index: number) => {
                const resUploadFiles: IUploadFile[] = resItem.uploadFiles as IUploadFile[];

                resUploadFiles.forEach((resUploadFile: IUploadFile) => {
                    // 이미지 src 생성하기
                    resUploadFile.src =
                        process.env.serverURL +
                        '/common/getImageFile/' +
                        resUploadFile.fileId +
                        '/' +
                        resUploadFile.fileType;
                });

                resItem.index = index;
            });

            setItems(resItems);
            console.log(resItems);
        } else {
            alert('처리 중 오류가 발생했습니다.');
        }
    };

    // 코멘트 창 열기
    const onOpenComments = async (itemId: number) => {
        if (!openComments) {
            dispatch(itemSetOpenItemIdAction(itemId));

            const res = await axios.get('/item/selectCommentsByItemId', {
                params: {
                    itemId,
                },
                headers: {
                    'user-token': localStorage.userToken,
                },
            });

            if (res.data.success) {
                setComments(res.data.data);
            } else {
                alert('처리 중 오류가 발생했습니다.');
            }
        } else {
            getItems();
        }

        setOpenComments(!openComments);
    };

    // 하트 누르기
    const onHeartPress = async (index: number) => {
        let isSuccess = true;
        const newItems = items.slice();
        if (newItems[index].heartPress) {
            (newItems[index].heart as number)--;

            const res = await axios.delete('/item/delHeart', {
                params: {
                    itemId: newItems[index].itemId,
                    regId: reduxUser.userId,
                },
                headers: {
                    'user-token': localStorage.userToken,
                },
            });

            if (!res.data.success) {
                isSuccess = false;
            }
        } else {
            (newItems[index].heart as number)++;

            const res = await axios.post(
                '/item/regHeart',
                {
                    itemId: newItems[index].itemId,
                    regId: reduxUser.userId,
                },
                {
                    headers: {
                        'user-token': localStorage.userToken,
                    },
                },
            );

            if (!res.data.success) {
                isSuccess = false;
            }
        }

        if (isSuccess) {
            newItems[index].heartPress = !newItems[index].heartPress;
            setItems(newItems);
        } else {
            alert('처리 중 오류가 발생했습니다.');
        }
    };

    return (
        <>
            <StyledDiv1>
                <StyledDiv10>
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
                </StyledDiv10>

                <div>
                    {items.map((item, key) => (
                        <Item item={item} onHeartPress={onHeartPress} onOpenComments={onOpenComments} key={key} />
                    ))}
                </div>
            </StyledDiv1>

            <Comments
                comments={comments}
                setComments={setComments}
                openComments={openComments}
                onOpenComments={onOpenComments}
            />
        </>
    );
};

export default SpotItems;
