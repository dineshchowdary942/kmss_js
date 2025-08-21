var marks=86;
var grade;
switch (true)
{
    case (marks>=90):
        grade="A";
        break;
    case (marks>=70 && marks<90):
        grade="B";
        break;
    case (marks>40 && marks<70):
        grade="C";
        break;
    case(marks<40):
    grade="F";
    break;
}
console.log(marks,grade)