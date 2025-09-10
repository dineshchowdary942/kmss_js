const jsonsing=`{"name":"Klaus","age":25,"employee":true,"hobbies":["Hunting","Eating","Sleeping"]}`;
const parsedsing=JSON.parse(jsonsing);
console.log(parsedsing);


const jsonpeople=`[{"name":"Klaus","age":25,"employee":true,"hobbies":["Hunting","Eating","Sleeping"]},
                    {"name":"Robert","age":30,"employee":false,"hobbies":["read","Eating","Sleeping"]},
                    {"name":"Robb","age":15,"employee":false,"hobbies":["Fight","Eating","Run"]},
                    {"name":"Jon","age":14,"employee":true,"hobbies":["Command","Working","Ride"]}]`;

const parsedpeople=JSON.parse(jsonpeople);
console.log(parsedpeople);

