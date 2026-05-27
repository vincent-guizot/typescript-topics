export interface User {
   id: number;
   name: string;
   email: string;
}

export interface Comment {
   id: number;
   message: string;
   userId: number;
}

export interface Post {
   id: number;
   title: string;
   content: string;
   author: User;
   comments: Comment[];
}
