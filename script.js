const data = [
  { name: "john", age: 24, profession: "developer" },
  { name: "jane", age: 27, profession: "admin" },
];

// 1. Print Developers
function printDeveloper() {
  for(let i=0;i<data.length;i++){
    if(data[i].profession==="developer"){
      console.log(data[i])
    }
    
  }
}
printDeveloper()
// 2. Add Data
function addData() {
  let name=prompt("enter your name")
  let age=prompt("enter your age")
  let profession=prompt("enter your profession")
  let object = {name: name, age:age, profession:profession}
  data.push(object)
  console.log(object)
}
addData()

// 3. Remove Admins
function removeAdmin() {
  for(let i=0;i<data.length;i++){
    if (data[i].profession==="admin"){
      data.pop(data[i])
    }
  }
  console.log(data)
}
removeAdmin()
// 4. Concatenate Array
function concatenateArray() {
  const example= [
    {name: "prasad", age:5,profession:"student"},
    {name: "anupama", age:10,profession:"student"},
    {name: "kalyani", age:15,profession:"developer"}
  ];
  for(let i=0;i<example.length;i++){
    data.push(example[i]);
  }
  console.log(data);
}
concatenateArray()

// 5. Average Age
function averageAge() {
  let x=0;
  for(let i=0;i<data.length;i++){
    x=x+data[i].age/data.length;
}
console.log(x)
}
averageAge()

// 6. Age Check
function checkAgeAbove25() {
  for(let i=0;i<data.length;i++){
    if(data[i].age>=25){
      console.log(data[i]);
    }
  }
}
checkAgeAbove25()

// 7. Unique Professions
function uniqueProfessions() {

  let arr = [];
  for(let i=0;i<data.length;i++){
       if(arr.includes(data[i].profession)==true){
            continue;
       }else{
            arr.push(data[i].profession);
       }
  }
  console.log(arr)
}
uniqueProfessions()

// 8. Sort by Age
function sortByAge() {
  data.sort((a,b)=>a.age-b.age);
  console.log(data)
}

sortByAge()
// 9. Update Profession
function updateJohnsProfession() {
  for(let i=0;i<data.length;i++){
    if(data[i].name==="john"){
         data[i].profession="manager";
    console.log(data[i]);
    }
}
}
updateJohnsProfession()

// 10. Profession Count
function getTotalProfessions() {
  let admin=0;
  let dev=0;
  for(let i=0;i<data.length;i++){
    if(data[i].profession==="admin"){
      admin++;
    }else if(data[i].profession === "developer"){
      dev++;
    }
  }
  console.log(`total admins are ${admin}`);
  console.log(`total developers are ${dev}`)
}
getTotalProfessions()
