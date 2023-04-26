export interface UserInfo {
    userName: any;
    password: string;
    status: string;
    imageurl: string;
    newUser: boolean;
    statusUpdates: string[];
}

export interface FirebaseResponse {
    [key: string]: UserInfo;
}
