import { IRank1 } from '../api/interface';

export const rankSetRank = 'rankSetRank';

export interface IRankSetRankAction {
    type: typeof rankSetRank;
    payload: IRank1;
}

export const RankSetRankAction = (res: IRank1): IRankSetRankAction => {
    return {
        type: rankSetRank,
        payload: res,
    };
};

export type Iactions = IRankSetRankAction;
