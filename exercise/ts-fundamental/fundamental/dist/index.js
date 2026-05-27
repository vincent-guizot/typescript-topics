"use strict";
// TASK 1
Object.defineProperty(exports, "__esModule", { value: true });
// Membuat array orders
const orders = [
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
function getDeliveredOrders(orders) {
    return orders.filter((order) => order.status === "delivered");
}
// Function update status order
function updateOrderStatus(id, newStatus) {
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
//# sourceMappingURL=index.js.map