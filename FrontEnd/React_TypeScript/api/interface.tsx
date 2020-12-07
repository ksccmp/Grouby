export interface IUser {
    userId: string;
    userName?: string;
    userPassword?: string;
    userPhone?: string;
    regDate?: string;
    modDate?: string;

    add?: boolean;
}

export interface IGroup {
    groupId: number;
    groupName: string;
    regId: string;
    regDate: string;
    modDate: string;
}

export interface IGroupMember {
    groupId: number;
    userId: string;
    regDate: string;
}

export interface IFriend {
    userId: string;
    friendId: string;
    friendName?: string;
    friendPhone?: string;
    regDate?: string;
}

export interface ISpot {
    spotId: number;
    spotName: string;
    groupId: number;
    groupName: string;
    regId: string;
    totalRank: number;
    todayRank: number;
    regDate: string;
    modDate: string;
}

export interface IRank {
    spotId: number;
    regId?: string;
    rankCompId: number;
    rankCompName: string;
    rank: number;
    regDate: string;
}

export interface IRankComp {
    rankCompId: number;
    rankCompName: string;
    rankCompOrder?: number;
    rankCompSelect?: boolean;
}

export interface ITag {
    groupId: number;
    tagName: string;
}

export interface IItem {
    index?: number;
    itemId: number;
    groupId: number;
    groupName: string;
    spotId: number;
    spotName: string;
    regId: string;
    regDate: string;
    modDate: string;
    like: number;
    contents: string;
    likePress?: boolean;
}

export interface IComment {
    commentId: number;
    itemId: number;
    regId: string;
    regDate: string;
    modDate: string;
    comments: string;
}
