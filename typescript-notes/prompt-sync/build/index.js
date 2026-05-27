"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prompt = require("prompt-sync")();
function getUserData() {
    const name = prompt("Masukkan nama: ");
    const age = Number(prompt("Masukkan umur: "));
    const city = prompt("Masukkan kota: ");
    console.log("\n=== DATA USER ===");
    console.log(`Nama : ${name}`);
    console.log(`Umur : ${age}`);
    console.log(`Kota : ${city}`);
}
getUserData();
//# sourceMappingURL=index.js.map