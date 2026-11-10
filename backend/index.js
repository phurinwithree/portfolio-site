const name = "โลก"; //สร้างตัวแปรชื่อ name 
const year = "2026"; // สร้างตัวแปรชื่อ year 

function greet(person) { //สร้างฟังชั่นพารามิเตอร์คือ person
    return "สวัสดี" + person; //คืนค่า เป็น "สวัสดี" + person
}

console.log(greet(name)); //แสดงผลโดยการเรียกใช้ตัวแปร พารามิเตอร์เป็น name
console.log("ปีนี้คือ", year); //แสดงผลโดยการให้ "ปีนี้คือ" ขึ้นก่อนตามด้วย year
