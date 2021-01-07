import { IFriend, IGroup, IRank, ISpot, IUser } from '../api/interface';

// not saga
export const rankSetRank = 'rankSetRank';
export const userSetUser = 'userSetUser';
export const friendInsCreateGroupFriends = 'friendInsCreateGroupFriends';
export const friendDelCreateGroupFriends = 'friendDelCreateGroupFriends';
export const friendResetCreateGroupFriends = 'friendResetCreateGroupFriends';
export const friendSetCreateGroupFriends = 'friendSetCreateGroupFriends';
export const friendSetonCreateGroupName = 'friendSetonCreateGroupName';
export const groupSetGroup = 'groupSetGroup';
export const spotSetSpot = 'spotSetSpot';
export const itemSetOpenItemId = 'itemSetOpenItemId';

// saga
export const userSelectByUserId = 'userSelectByUserId';

// not saga
export interface IRankSetRankAction {
    type: typeof rankSetRank;
    payload: IRank;
}

export interface IuserSetUserAction {
    type: typeof userSetUser;
    payload: IUser;
}

export interface IfriendInsCreateGroupFriendsAction {
    type: typeof friendInsCreateGroupFriends;
    payload: string;
}

export interface IfriendDelCreateGroupFriendsAction {
    type: typeof friendDelCreateGroupFriends;
    payload: string;
}

export interface IfriendResetCreateGroupFriendsAction {
    type: typeof friendResetCreateGroupFriends;
}

export interface IfriendSetCreateGroupFriendsAction {
    type: typeof friendSetCreateGroupFriends;
    payload: IUser[];
}

export interface IfriendSetonCreateGroupNameAction {
    type: typeof friendSetonCreateGroupName;
    payload: string;
}

export interface IgroupSetGroupAction {
    type: typeof groupSetGroup;
    payload: IGroup;
}

export interface IspotSetSpotAction {
    type: typeof spotSetSpot;
    payload: ISpot;
}

export interface IitemSetOpenItemIdAction {
    type: typeof itemSetOpenItemId;
    payload: number;
}

// saga
export interface IuserSelectByUserIdAction {
    type: typeof userSelectByUserId;
    payload: IUser;
}

// not saga
export const RankSetRankAction = (res: IRank): IRankSetRankAction => {
    return {
        type: rankSetRank,
        payload: res,
    };
};

export const userSetUserAction = (res: IUser): IuserSetUserAction => {
    return {
        type: userSetUser,
        payload: res,
    };
};

export const friendInsCreateGroupFriendsAction = (res: string): IfriendInsCreateGroupFriendsAction => {
    return {
        type: friendInsCreateGroupFriends,
        payload: res,
    };
};

export const friendDelCreateGroupFriendsAction = (res: string): IfriendDelCreateGroupFriendsAction => {
    return {
        type: friendDelCreateGroupFriends,
        payload: res,
    };
};

export const friendResetCreateGroupFriendsAction = (): IfriendResetCreateGroupFriendsAction => {
    return {
        type: friendResetCreateGroupFriends,
    };
};

export const friendSetCreateGroupFriendsAction = (res: IUser[]): IfriendSetCreateGroupFriendsAction => {
    return {
        type: friendSetCreateGroupFriends,
        payload: res,
    };
};

export const friendSetonCreateGroupNameAction = (res: string): IfriendSetonCreateGroupNameAction => {
    return {
        type: friendSetonCreateGroupName,
        payload: res,
    };
};

export const groupSetGroupAction = (res: IGroup): IgroupSetGroupAction => {
    return {
        type: groupSetGroup,
        payload: res,
    };
};

export const spotSetSpotAction = (res: ISpot): IspotSetSpotAction => {
    return {
        type: spotSetSpot,
        payload: res,
    };
};

export const itemSetOpenItemIdAction = (res: number): IitemSetOpenItemIdAction => {
    return {
        type: itemSetOpenItemId,
        payload: res,
    };
};

// saga
export const userSelectByUserIdAction = (res: IUser): IuserSelectByUserIdAction => {
    return {
        type: userSelectByUserId,
        payload: res,
    };
};

export type Iactions =
    // not saga
    | IRankSetRankAction
    | IuserSetUserAction
    | IfriendInsCreateGroupFriendsAction
    | IfriendDelCreateGroupFriendsAction
    | IfriendResetCreateGroupFriendsAction
    | IfriendSetCreateGroupFriendsAction
    | IfriendSetonCreateGroupNameAction
    | IgroupSetGroupAction
    | IspotSetSpotAction
    | IitemSetOpenItemIdAction
    // saga
    | IuserSelectByUserIdAction;
