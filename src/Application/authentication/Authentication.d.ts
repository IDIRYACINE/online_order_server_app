export declare let AuthKey: string;
declare function loginWithUsernameAndPassword(username: string, password: string): void;
declare function setOnConnectAction(action: () => void): void;
export declare const Authentication: {
    loginWithUsernameAndPassword: typeof loginWithUsernameAndPassword;
    setOnConnectAction: typeof setOnConnectAction;
    isLoggedIn: () => boolean;
};
export {};
