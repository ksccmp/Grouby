import Router from 'next/router';
import moment from 'moment';

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

export const goGroupSpotRating = (): void => {
    Router.push('/group/groupSpotRating');
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

// moment
moment.locale('ko');

export const getTime = (): string => {
    return moment(new Date()).format('ll');
};
