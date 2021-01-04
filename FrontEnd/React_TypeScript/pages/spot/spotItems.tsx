import * as React from 'react';
import { StyledDiv1, StyledFlex2, StyledDiv5, StyledDiv6, StyledFlex13, StyledDiv8 } from '../../api/styled';
import { StyledPlusCircleOutlined4 } from '../../api/styledAnt';
import { StyledH4, StyledH5 } from '../../api/styledFont';
import { goSpotRegItem, getTime } from '../../api/common';
import { IGroup, IItem, ISpot, IUploadFile, IUser } from '../../api/interface';
import Item from '../../component/spot/item';
import Comments from '../../component/spot/comments';
import { useSelector } from 'react-redux';
import { IIndexReducer } from '../../modules/reducer/indexReducer';
import axios from '../../api/axios';

const SpotItems = (): JSX.Element => {
    const reduxUser: IUser = useSelector((state: IIndexReducer) => state.UserReducer.user);
    const reduxGroup: IGroup = useSelector((state: IIndexReducer) => state.GroupReducer.group);
    const reduxSpot: ISpot = useSelector((state: IIndexReducer) => state.SpotReducer.spot);

    const [items, setItems] = React.useState<IItem[]>([]);
    const [openComments, setOpenComments] = React.useState<boolean>(false);

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

            resItems.forEach((resItem: IItem) => {
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
            });

            setItems(resItems);
        } else {
            alert('처리 중 오류가 발생했습니다.');
        }
    };

    // 코멘트 창 열기
    const onOpenComments = () => {
        setOpenComments(!openComments);
    };

    // 하트 누르기
    const onHeartPress = (index: number) => {
        const newItems = items.slice();
        if (newItems[index].heartPress) {
            (newItems[index].heart as number)--;
        } else {
            (newItems[index].heart as number)++;
        }
        newItems[index].heartPress = !newItems[index].heartPress;
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
                        <Item item={item} onHeartPress={onHeartPress} onOpenComments={onOpenComments} key={key} />
                    ))}
                </div>
            </StyledDiv1>

            <Comments openComments={openComments} onOpenComments={onOpenComments} />
        </>
    );
};

export default SpotItems;
