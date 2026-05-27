const prompt = require("prompt-sync")();

function getUserData(): void {
   const name: string = prompt("Masukkan nama: ");
   const age: number = Number(prompt("Masukkan umur: "));
   const city: string = prompt("Masukkan kota: ");

   console.log("\n=== DATA USER ===");
   console.log(`Nama : ${name}`);
   console.log(`Umur : ${age}`);
   console.log(`Kota : ${city}`);
}


getUserData()