// 1.Answer

var car={
    make:"tata",
    model:"H2r",
    year:2020,
}
Object.freeze(car);
car.model="ZX10r"
console.log(car);

// 2.Answer

var user={
    name:"ashok",
    age:"20",
    email:"hlo@gmail.com"
}
console.log(user);
console.log(Object.isFrozen(user));

// 3.Answer

var product={
    name:"rice",
    category:"A1",
    price:"1500",
}
Object.seal(product);
console.log(Object.isSealed(product));

// 4.Answer

var laptop={
    brand:"Asus",
    model:"vivobook",
    price:"50000",
}
console.log(Object.keys(laptop));

// 5.Answer

var house={
    location:"nalgonda",
    size:"120sqrpt",
    price:"150000",
}
console.log(Object.values(house));

// 6.Answer

var smartphone={
    brand:"redmi",
    model:"8A",
    price:"10000",
}
Object.seal(smartphone);
smartphone.price="99999"
console.log(smartphone);
console.log(Object.isSealed(smartphone));

// 7.Answwer

var book={
    title:"mystory",
    author:"ashok",
    publishedyear:"2025"
}
Object.freeze(book);
book.publishedyear="3000"
console.log(book);
console.log(Object.isFrozen(book));

// 8.Answer

var person={
    firstname:"ashok",
    lastname:"goud",
    age:"20"
}
console.log(Object.keys(person),Object.values(person));

// 9.Answer

var course={
    title:"fullstack",
    instructor:"vamshi",
    duration:"7months"
}
console.log(Object.entries(course));
delete course.duration
console.log( course)

// 10. Answer

var employee={
    name:"ravi",
    position:"softwaredeveloper",
    salary:"99999"
}
Object.seal(employee);
employee.position="tester"
employee.age="30"
console.log(employee);
console.log(Object.keys(employee));












