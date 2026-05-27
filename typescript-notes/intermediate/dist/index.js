"use strict";
// 1. Any type
/**
 * Apa itu any?
   any adalah tipe yang menonaktifkan pengecekan TypeScript

   Saat pakai any, variable bisa berisi apa saja.
 */
Object.defineProperty(exports, "__esModule", { value: true });
// let data: any = 10
// data = "oke"
// data = true
// console.log(data)
/**
 * Kapan Harus Dihindari?

   Hindari pada:

   Production project
   API response yang sudah jelas shape-nya
   Team collaboration
   Large scale application
 */
// Kapan bisa menggunakan any
// Ketika belum tau resultnya apa
// let response: any;
// Data 3rd party yang belum di ketahui
// let parsedData: any = JSON.parse(rawData)
// Better Alternative
// let rawData: unknown
// 2. Readonly
/**
 * Apa itu?

   Membuat property tidak bisa diubah
 */
// interface User {
//    readonly id: number;
//    name: string;
// }
// const user: User = {
//    id: 1,
//    name: "Admin"
// }
// user.name = "Vincent"
// user.id = 3 // tidak bisa di assign ulang
// console.log(user)
/**
 * Kapan Dipakai?

   Untuk data tetap:

   ID
   Version
   CreatedAt
   Config tetap
 */
// 3. Type Alias vs Interface
// type User = {
//    name: string,
//    age: number
// }
// // Type Union
// type role = "admin" | "member" | "guest"
// // Type Primitive Alias
// type ID = string | number
// // interface mirip dengan Class
// interface Person {
//    id: number,
//    fullname: string
// }
// interface Member extends Person {
//    email: string,
//    password: string
// }
// let members: Member[] = [
//    {
//       id: 1,
//       fullname: "Admin",
//       email: "admin@mail.com",
//       password: "123"
//    },
//    {
//       id: 2,
//       fullname: "Ncent",
//       email: "ncent@mail.com",
//       password: "123"
//    },
// ]
// console.log(members)
/**
 * Best Practice

Untuk project seperti Orange LMS:

Interface
→ entity besar

Type
→ status / utility type
 */
// 4. Index Signature
/**
 * Apa itu?

   Dipakai untuk object dengan key dinamis.
 */
// interface Settings {
//    [key: string]: string;
// }
// const settings: Settings = {
//    theme: "dark",
//    language: "id",
//    timezone: "GMT+7"
// };
// interface Stats {
//    [key: string]: number | string
// }
// const statistics: Stats = {
//    firstTest: 100,
//    secondTest: "90",
//    thirdTest: 95
// }
/**
 * Kapan Dipakai?
   Dynamic config
   Form errors
   Dictionary
   Translation map
 */
// 5. keyof dan type of
// keyof = Mengambil semua nama property.
// typeof = Mengambil type dari variable.
// interface Vehicle {
//    brand: string,
//    price: number
// }
// type VehicleKeys = keyof Vehicle
// hasilnya UNION "brand" | "price"
// const vehicle = {
//    id: 1,
//    name: "Civic"
// }
// type VehicleType = typeof vehicle
// hasilnya number atau string
// 6. as const
// Membuat nilai menjadi literal & readonly.
// Tanpa as  const
// const theme = "light"
// type => string
// const themes = "light" as const
// type => "light"
// 7. Simple Generic Function
function wrap(value) {
    return value;
}
function numberFunction(num) {
    return num;
}
function greetings(n) {
    if (n === 1) {
        return "true";
    }
    else {
        return "false";
    }
}
function showTask(task) {
    console.log("Hasilnya kosong");
}
console.log(numberFunction(10));
console.log(greetings(1));
showTask([]);
//# sourceMappingURL=index.js.map