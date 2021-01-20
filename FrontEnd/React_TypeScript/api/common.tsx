import Router from 'next/router';
import moment from 'moment';

//color
export const color1 = '#f2f2f2'; // 배경색
export const color2 = '#B8B8B8'; // 친구 숫자
export const color3 = '#E6951A'; // 메인색
export const color4 = '#FF5C5C'; // 삭제하기 색
export const color5 = '#358BFF'; // 추가하기 색

// page
export const goBack = (): void => {
    Router.back();
};

export const goSignIn = (): void => {
    Router.push('/sign/signIn');
};

export const goSignUp = (): void => {
    Router.push('/sign/signUp');
};

export const goMainHome = (): void => {
    Router.push('/main/mainHome');
};

export const goMainFriends = (): void => {
    Router.push('/main/mainFriends');
};

export const goMainAdd = (): void => {
    Router.push('/main/mainAdd');
};

export const goMainModFriends = (): void => {
    Router.push('/main/mainModFriends');
};

export const goMainRegGroup = (): void => {
    Router.push('/main/mainRegGroup');
};

export const goGroupHome = (): void => {
    Router.push('/group/groupHome');
};

export const goGroupTalk = (): void => {
    Router.push('/group/groupTalk');
};

export const goGroupAdd = (): void => {
    Router.push('/group/groupAdd');
};

export const goGroupRegSpot = (): void => {
    Router.push('/group/groupRegSpot');
};

export const goSpotItems = (): void => {
    Router.push('/spot/spotItems');
};

export const goSpotRanks = (): void => {
    Router.push('/spot/spotRanks');
};

export const goSpotAdd = (): void => {
    Router.push('/spot/spotAdd');
};

export const goSpotRegItem = (): void => {
    Router.push('/spot/spotRegItem');
};

export const goSpotRating = (): void => {
    Router.push('/spot/spotRating');
};

// moment
moment.locale('ko');

export const getTime = (date: string): string => {
    const time = new Date().getTime() - new Date(date).getTime();

    const second = Math.floor(time / 1000);
    const minute = Math.floor(time / 1000 / 60);
    const hour = Math.floor(time / 1000 / 60 / 60);
    const day = Math.floor(time / 1000 / 60 / 60 / 24);

    if (day > 1) {
        return moment(date).format('lll');
    }

    if (day > 0) {
        return '하루 전';
    }

    if (hour > 0) {
        return `${hour}시간 전`;
    }

    if (minute > 0) {
        return `${minute}분 전`;
    }

    return `${second}초 전`;
};
