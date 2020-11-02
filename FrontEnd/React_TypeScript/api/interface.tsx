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

export interface IRank {
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
