"use strict"; // cara penggunakan JS/ES Modern

// 1. STRING
let fullName: string = "Vincent";

// 2. NUMBER
let age: number = 25;
let price: number = 15000;
let rating: number = 4.8;

// 3. BOOLEAN
let isLogin: boolean = true;
let isActive: boolean = false;

// 4. NULL
let emptyData: null = null;

// 5. UNDEFINED
let notAssigned: undefined = undefined;

// 6. ARRAY TYPE (cara 1)
let fruits: string[] = ["Apple", "Orange", "Banana"];

// 7. ARRAY TYPE (cara 2)
let scores: Array<number> = [90, 85, 100];

// 8. OBJECT TYPE
let user: {
   name: string;
   age: number;
   isAdmin: boolean;
} = {
   name: "Vincent",
   age: 25,
   isAdmin: true,
};

// 9. TYPE
type Student = {
   name: string;
   age: number;
   className: string;
}

let student1: Student = {
   name: "Alice",
   age: 20,
   className: "Math",
}
let student2: Student = {
   name: "Bob",
   age: 22,
   className: "Science",
}

// console.log(student1);
// console.log(student2);

// 10. UNION TYPE
type Access = "admin" | "editor" | "viewer";
type Status = "active" | "inactive" | "pending";

let userAccess: Access = "admin";
let userStatus: Status = "pending";

// 11. INTERFACE (mirip Class)

interface Person {
   name: string;
   subject: string;
   yearsOfExperience: number;
   isAvailable?: boolean; // Optional property
}

let person1: Person = {
   name: "Mr. Smith",
   subject: "Mathematics",
   yearsOfExperience: 10,
}

interface Teacher extends Person {
   gradeLevel: string;
}

let teacher1: Teacher = {
   name: "Ms. Johnson",
   subject: "Science",
   yearsOfExperience: 8,
   gradeLevel: "High School",
   isAvailable: true,
}