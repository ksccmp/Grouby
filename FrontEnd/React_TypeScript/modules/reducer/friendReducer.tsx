import { IFriend } from '../../api/interface';
import * as actions from '../actions';

export interface IFriendInitState {
    createGroupFriends: IFriend[];
}

const friendInitState: IFriendInitState = {
    createGroupFriends: [],
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const FriendReducer = (state = friendInitState, action: actions.Iactions) => {
    switch (action.type) {
        // not saga
        case actions.friendSetCreateGroupFriends: {
            const newCreateGroupFriends: IFriend[] = state.createGroupFriends.slice();
            newCreateGroupFriends.push((action as actions.IfriendSetCreateGroupFriendsAction).payload);

            return {
                ...state,
                createGroupFriends: newCreateGroupFriends,
            };
        }

        case actions.friendDelCreateGroupFriends: {
            const newCreateGroupFriends: IFriend[] = state.createGroupFriends.filter(
                (friend) => friend.friendId !== (action as actions.IfriendDelCreateGroupFriendsAction).payload,
            );

            return {
                ...state,
                createGroupFriends: newCreateGroupFriends,
            };
        }

        case actions.friendResetCreateGroupFriends: {
            return {
                ...state,
                createGroupFriends: friendInitState.createGroupFriends,
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

export default FriendReducer;
