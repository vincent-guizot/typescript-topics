# Setup TypeScript Project dengan Prompt-Sync

![Flow Ts](flowts.png)

## 1. Buat Folder Project

mkdir prompt-sync

## 2. Masuk ke Folder Project

cd prompt-sync

## 3. Inisialisasi NPM

npm init -y

## 4. Install TypeScript

npm install typescript --save-dev

## 5. Install Type Definition Node

npm install @types/node --save-dev

## 6. Install Prompt-Sync

npm install prompt-sync

## 7. Generate tsconfig.json

npx tsc --init

---

## 8. Buat Folder Source

mkdir source

## 9. Buat File TypeScript

code source/index.ts

---

## Struktur Project

prompt-sync/
│
├── build/
├── node_modules/
├── source/
│ └── index.ts
│
├── package.json
├── package-lock.json
├── tsconfig.json
├── .gitignore
└── README.md

---

## 10. Edit tsconfig.json

{
"compilerOptions": {
"target": "ES2020",
"module": "commonjs",
"rootDir": "./source",
"outDir": "./build",
"strict": true,
"types": ["node"]
}
}

Penjelasan:

- rootDir → folder source TypeScript
- outDir → hasil compile JavaScript
- types → support Node.js

---

## 11. Isi source/index.ts

const prompt = require("prompt-sync")();

const name: string = prompt("Masukkan nama kamu: ");
const age: number = Number(prompt("Masukkan umur kamu: "));

console.log(`Halo ${name}, umur kamu ${age} tahun`);

---

## 12. Edit package.json

"scripts": {
"build": "tsc -p .",
"start": "node build/index.js",
"dev": "npm run build && npm run start"
}

---

## 13. Compile TypeScript

npm run build

Hasil:
build/index.js

---

## 14. Jalankan Program

npm run start

Contoh Output:

Masukkan nama kamu: Vincent
Masukkan umur kamu: 25

Halo Vincent, umur kamu 25 tahun

---

## 15. Mode Development

npm run dev

---

## Flow Project

source/index.ts
↓
npm run build
↓
build/index.js
↓
npm run start

---

## Ringkasan Command

Install semua dependency:
npm install typescript @types/node prompt-sync

Build:
npm run build

Run:
npm run start

Build + Run:
npm run dev
