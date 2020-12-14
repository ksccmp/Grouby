import { IUser } from '../../api/interface';
import * as actions from '../actions';

export interface IFriendInitState {
    createGroupFriends: IUser[];
    createGroupName: string;
}

const friendInitState: IFriendInitState = {
    createGroupFriends: [],
    createGroupName: '',
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const FriendReducer = (state = friendInitState, action: actions.Iactions) => {
    switch (action.type) {
        // not saga
        case actions.friendInsCreateGroupFriends: {
            const userId: string = (action as actions.IfriendInsCreateGroupFriendsAction).payload;
            const newCreateGroupFriends: IUser[] = state.createGroupFriends.slice();

            newCreateGroupFriends.map((friend) => {
                if (friend.userId === userId) {
                    friend.add = true;
                }
            });

            return {
                ...state,
                createGroupFriends: newCreateGroupFriends,
            };
        }

        case actions.friendDelCreateGroupFriends: {
            const userId: string = (action as actions.IfriendDelCreateGroupFriendsAction).payload;
            const newCreateGroupFriends: IUser[] = state.createGroupFriends.slice();

            newCreateGroupFriends.map((friend) => {
                if (friend.userId === userId) {
                    friend.add = false;
                }
            });

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

        case actions.friendSetCreateGroupFriends: {
            return {
                ...state,
                createGroupFriends: (action as actions.IfriendSetCreateGroupFriendsAction).payload,
            };
        }

        case actions.friendSetonCreateGroupName: {
            return {
                ...state,
                createGroupName: (action as actions.IfriendSetonCreateGroupNameAction).payload,
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
