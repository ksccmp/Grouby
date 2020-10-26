import Router from 'next/router';

export const goBack = (): void => {
    Router.back();
};

export const goSignUp = (): void => {
    Router.push('/sign/signUp');
};

export const goMainRegGroup = (): void => {
    Router.push('/main/mainRegGroup');
};

export const goMainModFriends = (): void => {
    Router.push('/main/mainModFriends');
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

export const goGroupHome = (): void => {
    Router.push('/group/groupHome');
};

export const goGroupTalk = (): void => {
    Router.push('/group/groupTalk');
};

export const goGroupAdd = (): void => {
    Router.push('/group/groupAdd');
};
