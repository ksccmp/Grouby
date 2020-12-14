import { IGroup } from '../../api/interface';
import * as actions from '../actions';

export interface IGroupInitState {
    group: IGroup;
}

const groupInitState: IGroupInitState = {
    group: {
        groupId: 0,
        groupName: '',
        regId: '',
        regDate: '',
        modDate: '',
    },
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const GroupReducer = (state = groupInitState, action: actions.Iactions) => {
    switch (action.type) {
        // not saga
        case actions.groupSetGroup: {
            return {
                ...state,
                group: (action as actions.IgroupSetGroupAction).payload,
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

export default GroupReducer;
