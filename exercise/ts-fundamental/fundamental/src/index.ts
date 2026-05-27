// TASK 1

// interface User {
//    id: number;
//    name: string;
//    email: string;
//    role: "admin" | "mentor" | "student";
//    isActive: boolean;
// }

// let users: User[] = [
//    {
//       id: 1,
//       name: "Vincent",
//       email: "vincent@mail.com",
//       role: "admin",
//       isActive: true,
//    },
//    {
//       id: 2,
//       name: "Budi",
//       email: "budi@mail.com",
//       role: "mentor",
//       isActive: false,
//    }
// ]

// // Function untuk mengambil user aktif
// function getActiveUsers(users: User[]): User[] {
//    return users.filter((user) => user.isActive);
// }

// // Menjalankan function
// const activeUsers: User[] = getActiveUsers(users);

// // Menampilkan hasil
// console.log(activeUsers);

// TASK 2

// type Product = {
//    name: string;
//    price: number;
//    discount?: number;
// }

// function calculateFinalPrice(product: Product): number {
//    if (product.discount) {
//       return product.price - (product.price * product.discount) / 100;
//    }

//    return product.price;
// }

// // Data product
// const product1: Product = {
//    name: "Laptop",
//    price: 10000000,
//    discount: 10,
// };

// const product2: Product = {
//    name: "Mouse",
//    price: 500000,
// };

// // Menampilkan hasil
// console.log(calculateFinalPrice(product1)); // 9000000
// console.log(calculateFinalPrice(product2)); // 500000

// TASK 3

// =====================================
// SOAL 3 - API RESPONSE HANDLER
// =====================================

// // Membuat union type
// type ApiStatus = "success" | "error" | "loading";

// // Membuat function
// function handleResponse(status: ApiStatus): string {
//    switch (status) {
//       case "success":
//          return "Data loaded successfully";

//       case "error":
//          return "Failed to load data";

//       case "loading":
//          return "Loading...";

//       default:
//          return "Unknown status";
//    }
// }

// // Menjalankan function
// console.log(handleResponse("success"));
// console.log(handleResponse("error"));
// console.log(handleResponse("loading"));

// =====================================
// SOAL 4 - STUDENT SCORE ANALYZER
// =====================================

// Membuat interface Student
// interface Student {
//    name: string;
//    scores: number[];
// }

// // Function menghitung rata-rata
// function getAverage(student: Student): number {
//    const total = student.scores.reduce((sum, score) => sum + score, 0);
//    return total / student.scores.length;
// }

// // Function menentukan status student
// function checkStudentStatus(student: Student): string {
//    const average = getAverage(student);
//    if (average >= 75) {
//       return "Passed";
//    } else {
//       return "Failed";
//    }
// }

// // Data student
// const student1: Student = {
//    name: "Budi",
//    scores: [80, 85, 90],
// };

// const student2: Student = {
//    name: "Andi",
//    scores: [60, 70, 65],
// };

// // Menampilkan hasil
// console.log("Name:", student1.name);
// console.log("Average:", getAverage(student1));
// console.log("Status:", checkStudentStatus(student1));

// console.log("-------------------");

// console.log("Name:", student2.name);
// console.log("Average:", getAverage(student2));
// console.log("Status:", checkStudentStatus(student2));

// =====================================
// SOAL 5 - ORDER SYSTEM
// =====================================

// Membuat literal type
type OrderStatus =
   | "pending"
   | "processing"
   | "shipped"
   | "delivered";

// Membuat interface Order
interface Order {
   id: number;
   customerName: string;
   total: number;
   status: OrderStatus;
}

// Membuat array orders
const orders: Order[] = [
   {
      id: 1,
      customerName: "Vincent",
      total: 500000,
      status: "pending",
   },
   {
      id: 2,
      customerName: "Budi",
      total: 750000,
      status: "processing",
   },
   {
      id: 3,
      customerName: "Sinta",
      total: 300000,
      status: "shipped",
   },
   {
      id: 4,
      customerName: "Raka",
      total: 450000,
      status: "delivered",
   },
   {
      id: 5,
      customerName: "Dina",
      total: 600000,
      status: "delivered",
   },
];

// Function mengambil order delivered
function getDeliveredOrders(orders: Order[]): Order[] {
   return orders.filter((order) => order.status === "delivered");
}

// Function update status order
function updateOrderStatus(
   id: number,
   newStatus: OrderStatus
): Order[] {
   return orders.map((order) => {
      if (order.id === id) {
         return {
            ...order,
            status: newStatus,
         };
      }

      return order;
   });
}

// Menampilkan order delivered
console.log("Delivered Orders:");
console.log(getDeliveredOrders(orders));

console.log("----------------------");

// Update status order
const updatedOrders = updateOrderStatus(1, "shipped");

console.log("Updated Orders:");
console.log(updatedOrders);