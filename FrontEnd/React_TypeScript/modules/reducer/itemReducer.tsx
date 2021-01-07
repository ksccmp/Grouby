import * as actions from '../actions';

export interface IItemInitState {
    openItemId: number;
}

const itemInitState: IItemInitState = {
    openItemId: 0,
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const ItemReducer = (state = itemInitState, action: actions.Iactions) => {
    switch (action.type) {
        // not saga
        case actions.itemSetOpenItemId: {
            return {
                ...state,
                openItemId: (action as actions.IitemSetOpenItemIdAction).payload,
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

export default ItemReducer;
