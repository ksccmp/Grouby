export const init = 'init';

export interface IinitAction {
    type: typeof init;
}

export const initAction = (): IinitAction => {
    return {
        type: init,
    };
};

export type Iactions = IinitAction;
