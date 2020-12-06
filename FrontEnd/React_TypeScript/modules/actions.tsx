import { IRank, IUser } from '../api/interface';

// not saga
export const rankSetRank = 'rankSetRank';
export const userSetUser = 'userSetUser';

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
    // saga
    | IuserSelectByUserIdAction;
