import { ISpot } from '../../api/interface';
import * as actions from '../actions';

export interface ISpotInitState {
    spot: ISpot;
}

const spotInitState: ISpotInitState = {
    spot: {
        spotId: 0,
        spotName: '',
        groupId: 0,
        regId: '',
        regDate: '',
        modDate: '',
    },
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const SpotReducer = (state = spotInitState, action: actions.Iactions) => {
    switch (action.type) {
        // not saga
        case actions.spotSetSpot: {
            return {
                ...state,
                spot: (action as actions.IspotSetSpotAction).payload,
            };
        }
        // saga

        default: {
            return {
                ...state,
            };
        }
    }
};

export default SpotReducer;
