import Router from 'next/router';

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
