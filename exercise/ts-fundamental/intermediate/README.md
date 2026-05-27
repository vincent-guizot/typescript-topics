# Intermediate TypeScript Challenge

## 1. Dynamic Settings Manager

### Deskripsi

Buat sebuah interface menggunakan **Index Signature**
untuk menyimpan setting aplikasi.

### Contoh Data

- theme
- language
- timezone
- currency

Semua value harus bertipe `string`.

### Task

- Buat object `settings`
- Tambahkan minimal 4 property
- Buat function `getSetting()`
- Function menerima key dan menampilkan value

### Gunakan

- Index Signature
- keyof
- Function return type

---

## 2. User Profile Immutable System

### Deskripsi

Buat interface `UserProfile` dengan property:

- readonly id
- name
- email
- role

### Task

- Buat 3 data user
- Ubah property yang diperbolehkan
- Coba ubah readonly id

### Pertanyaan

Kenapa TypeScript menolak perubahan `id`?

### Gunakan

- readonly
- interface

---

## 3. Generic Wrapper Function

### Deskripsi

Buat generic function:

wrap<T>(value: T): T

### Task

Gunakan function untuk membungkus data berikut:

- string
- number
- boolean
- object

### Contoh

wrap("Hello")

wrap(100)

wrap(true)

wrap({ name: "Vincent" })

### Expected Result

Output harus mengembalikan nilai
dengan type yang sama.

### Gunakan

- Generic
- Type inference

---

## 4. API Data Mapping

### Buat Interface

### User

- id
- name
- email

### Post

- id
- title
- content
- author (User)

### Comment

- id
- message
- userId

### Task

Buat object `post` lengkap
yang memiliki:

- author
- minimal 2 comments

Lalu buat function:

printPostDetail()

### Output

- Title
- Author
- Jumlah Comment

### Gunakan

- Nested Interface
- Array Object
- API Shape Mapping

---

## 5. Type Utility Challenge

### Buat Object Config

- theme: "dark"
- layout: "grid"
- version: 1

Gunakan:

as const

### Task

- Ambil type object menggunakan `typeof`
- Ambil semua key menggunakan `keyof`
- Buat variable yang hanya bisa berisi key config

### Contoh Valid

- "theme"
- "layout"

### Contoh Invalid

- "color"

### Gunakan

- as const
- typeof
- keyof

---

# Bonus

## Jelaskan Perbedaan

- any
- unknown
- readonly
- as const
