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

    groupMembers?: IGroupMember[];
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
    spotId?: number;
    spotName: string;
    groupId: number;
    regId: string;
    regDate?: string;
    modDate?: string;

    groupName?: string;
    spotRanks?: ISpotRank[];
    tags?: ITag[];
    ranks?: IRank[];
}

export interface IRank {
    rankId?: number;
    spotId: number;
    regId?: string;
    rankCompId: number;
    rankScore: number;
    regDate?: string;
    modDate?: string;

    rankCompName: string;
}

export interface IRankComp {
    rankCompId: number;
    rankCompName: string;
    regDate: string;
    modDate: string;

    rankCompOrder?: number;
    rankCompSelect?: boolean;
}

export interface ITag {
    spotId?: number;
    tagName: string;
}

export interface ISpotRank {
    spotId?: number;
    rankCompId: number;
    regId: string;
    regDate?: string;
    modDate?: string;
}

export interface IItem {
    itemId?: number;
    groupId: number;
    spotId: number;
    regId: string;
    contents: string;
    regDate?: string;
    modDate?: string;

    index?: number;
    uploadFiles?: IUploadFile[];
    heart?: number;
    heartPress?: boolean;
    comment?: number;
}

export interface IComment {
    commentId?: number;
    itemId: number;
    regId: string;
    comments: string;
    regDate?: string;
    modDate?: string;
}

export interface IUploadFile {
    itemId: number;
    fileId: string;
    originName: string;
    fileSize: number;
    fileType: string;
    src?: string;
}
