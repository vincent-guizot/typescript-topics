# 1. User Management System

Buat sebuah `interface User` dengan properti:

- id (number)
- name (string)
- email (string)
- role (hanya boleh: `"admin"` | `"mentor"` | `"student"`)
- isActive (boolean)

### Tugas:

- Buat array `users` berisi minimal 4 data
- Buat function `getActiveUsers()`
- Function harus mengembalikan hanya user yang aktif
- Tentukan return type secara eksplisit

### Output Example

```ts
[
  {
    id: 1,
    name: "Vincent",
    isActive: true,
  },
];
```

# 2. Product Discount Calculator

Buat sebuah `type Product` dengan properti:

- name (string)
- price (number)
- discount? (optional number)

## Tugas

Buat function:

```ts
calculateFinalPrice(product);
```

# 3. API Response Handler

Buat sebuah union type:

type ApiStatus = "success" | "error" | "loading";

Tugas:
Buat function berikut:

handleResponse(status: ApiStatus): string

Rules:

Jika status "success"
return:
"Data loaded successfully"

Jika status "error"
return:
"Failed to load data"

Jika status "loading"
return:
"Loading..."

Gunakan switch case.

Contoh Pemanggilan:

handleResponse("success");
handleResponse("error");
handleResponse("loading");

Expected Output:

Data loaded successfully
Failed to load data
Loading...

Ketentuan:

- Gunakan Union Type
- Gunakan Function Parameter Type
- Gunakan Explicit Return Type
- Gunakan Switch Case

Hint:

switch (status) {
case "...":
return "...";
}

# 4. Student Score Analyzer

Buat sebuah interface Student dengan properti:

- name (string)
- scores (number[])

Tugas 1:
Buat function berikut:

getAverage(student: Student): number

Function harus menghitung rata-rata nilai student.

Rumus:
total semua nilai ÷ jumlah nilai

---

Tugas 2:
Buat function berikut:

checkStudentStatus(student: Student): string

Rules:

Jika rata-rata >= 75
return:
"Passed"

Jika rata-rata < 75
return:
"Failed"

---

Contoh Input:

{
name: "Budi",
scores: [80, 85, 90]
}

---

Expected Output:

Average: 85
Status: Passed

---

Contoh Input 2:

{
name: "Andi",
scores: [60, 70, 65]
}

---

Expected Output:

Average: 65
Status: Failed

---

Ketentuan:

- Gunakan Interface
- Gunakan Array Type
- Gunakan Function Return Type
- Gunakan Conditional Statement
- Gunakan Perhitungan Rata-rata

Hint:

Gunakan:

- reduce()
- if else

# 5. Order System

Buat sebuah literal type:

type OrderStatus =
| "pending"
| "processing"
| "shipped"
| "delivered";

---

Buat sebuah interface Order dengan properti:

- id (number)
- customerName (string)
- total (number)
- status (OrderStatus)

---

Tugas 1:
Buat array orders minimal 5 data

Contoh:

- 1 order pending
- 1 order processing
- 1 order shipped
- 2 order delivered

---

Tugas 2:
Buat function berikut:

getDeliveredOrders(orders: Order[]): Order[]

Function harus mengembalikan semua order
yang memiliki status:

"delivered"

---

Tugas 3:
Buat function berikut:

updateOrderStatus(
id: number,
newStatus: OrderStatus
): Order[]

Function harus mengubah status order
berdasarkan id.

---

Contoh Pemanggilan:

getDeliveredOrders(orders);

updateOrderStatus(1, "shipped");

---

Expected Output 1

Menampilkan semua order
dengan status delivered

---

Expected Output 2

Order dengan id 1
berubah status menjadi shipped

---

Ketentuan:

- Gunakan Literal Type
- Gunakan Interface
- Gunakan Array of Object
- Gunakan filter()
- Gunakan map()
- Gunakan Function Return Type

---

Hint:

Gunakan:

filter()
untuk mengambil delivered order

map()
untuk update status order
