export interface User {
    id: number;
    name: string;
    email: string;
    dob: string;
    country: string;
    language: string;
    watchlist: string;
}

export interface UpdateUser {
    userId: number;
    profile: {
        name: string;
        dob: string;
        country: string;
        language: string;
        watchlist: string;
    };
}

export interface UserProfile {
    name: string;
    dob: string;
    country: string;
    language: string;
    watchlist: string;
}
