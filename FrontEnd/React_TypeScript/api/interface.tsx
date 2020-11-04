export interface IUser {
    userId: string;
    userName?: string;
    userPassword: string;
    userPhone?: string;
    regDate?: string;
    modDate?: string;
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
    friendName: string;
    friendPhone: string;
    regDate: string;
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
    rankOrder: number;
}

export interface IRank1 {
    index: number;
    rankName: string;
    rankScore: number;
}

export interface IItem {
    itemId: number;
    groupId: number;
    spotId: number;
    regId: string;
    regDate: Date;
    modDate: Date;
    like: number;
    contents: string;
    likePress: boolean;
}

export interface IComment {
    itemId: number;
    regId: string;
    regDate: Date;
    modDate: Date;
    comments: string;
}
