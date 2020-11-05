import { IRank } from '../api/interface';

export const rankSetRank = 'rankSetRank';

export interface IRankSetRankAction {
    type: typeof rankSetRank;
    payload: IRank;
}

export const RankSetRankAction = (res: IRank): IRankSetRankAction => {
    return {
        type: rankSetRank,
        payload: res,
    };
};

export type Iactions = IRankSetRankAction;
