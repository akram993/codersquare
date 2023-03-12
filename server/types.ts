export interface User {
    id: string;
    firsName: string;
    lastName: string;
    email: string;
    password: string;
    userName: String;
}

export interface Post {
    id: string;
    title: string;
    url: string;
    userId: string;
    postedAt: number;
}

export interface Like {
    userId: string;
    postId: string;
}

export interface Comment {
    id: string;
    userId: string;
    postId: string;
    comment: string;
    postedAt: number;
}


