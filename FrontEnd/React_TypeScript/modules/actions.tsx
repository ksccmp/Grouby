import { IFriend, IRank, IUser } from '../api/interface';

// not saga
export const rankSetRank = 'rankSetRank';
export const userSetUser = 'userSetUser';
export const friendSetCreateGroupFriends = 'friendSetCreateGroupFriends';
export const friendDelCreateGroupFriends = 'friendDelCreateGroupFriends';
export const friendResetCreateGroupFriends = 'friendResetCreateGroupFriends';

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

export interface IfriendSetCreateGroupFriendsAction {
    type: typeof friendSetCreateGroupFriends;
    payload: IFriend;
}

export interface IfriendDelCreateGroupFriendsAction {
    type: typeof friendDelCreateGroupFriends;
    payload: string;
}

export interface IfriendResetCreateGroupFriendsAction {
    type: typeof friendResetCreateGroupFriends;
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

export const friendSetCreateGroupFriendsAction = (res: IFriend): IfriendSetCreateGroupFriendsAction => {
    return {
        type: friendSetCreateGroupFriends,
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
    | IfriendSetCreateGroupFriendsAction
    | IfriendDelCreateGroupFriendsAction
    | IfriendResetCreateGroupFriendsAction
    // saga
    | IuserSelectByUserIdAction;
