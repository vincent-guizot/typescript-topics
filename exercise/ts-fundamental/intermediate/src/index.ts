// Task 1

// interface Settings {
//    [key: string]: string;
// }

// const settings: Settings = {
//    theme: "dark",
//    language: "Indonesia",
//    timezone: "GMT+7",
//    currency: "IDR",
// };

// function getSetting(key: keyof Settings): string {
//    const value = settings[key];

//    if (value === undefined) {
//       return "Setting not found";
//    }

//    return value;
// }
// console.log(getSetting("theme"));
// console.log(getSetting("currency"));

// Task 2

// interface UserProfile {
//    readonly id: number;
//    name: string;
//    email: string;
//    role: string;
// }

// const user1: UserProfile = {
//    id: 1,
//    name: "Vincent",
//    email: "vincent@mail.com",
//    role: "Admin",
// };

// const user2: UserProfile = {
//    id: 2,
//    name: "Budi",
//    email: "budi@mail.com",
//    role: "Mentor",
// };

// const user3: UserProfile = {
//    id: 3,
//    name: "Sinta",
//    email: "sinta@mail.com",
//    role: "Student",
// };

// // Valid
// user1.name = "Vincent Updated";

// // Error
// // user1.id = 10;

// console.log(user1);

/*
TypeScript menolak perubahan id
karena property readonly
hanya bisa diisi saat object dibuat
*/

// Task 3

// function wrap<T>(value: T): T {
//    return value;
// }

// console.log(wrap("Hello"));
// console.log(wrap(100));
// console.log(wrap(true));
// console.log(
//    wrap({
//       name: "Vincent",
//    })
// );

// Task 4

// import { type Post } from "./types"

// const post: Post = {
//    id: 1,
//    title: "Belajar TypeScript",
//    content: "TypeScript sangat powerful",
//    author: {
//       id: 1,
//       name: "Vincent",
//       email: "vincent@mail.com",
//    },
//    comments: [
//       {
//          id: 1,
//          message: "Great post",
//          userId: 2,
//       },
//       {
//          id: 2,
//          message: "Very helpful",
//          userId: 3,
//       },
//    ],
// };

// function printPostDetail(post: Post): void {
//    console.log("Title:", post.title);
//    console.log("Author:", post.author.name);
//    console.log("Jumlah Comment:", post.comments.length);
// }

// printPostDetail(post);

// Task 5

const config = {
   theme: "dark",
   layout: "grid",
   version: 1,
} as const;

type ConfigType = typeof config;

type ConfigKeys = keyof ConfigType;

let selectedKey: ConfigKeys;

selectedKey = "theme";
selectedKey = "layout";

// Error
// selectedKey = "color";

console.log(selectedKey);