const averageGrade = 69;
switch (true) { 
    case (averageGrade > 0 && averageGrade < 60): 
    value = "Незадовільно";
    break;

    case (averageGrade > 60 && averageGrade <= 70):
    value = "Задовільно";
    break;

    case (averageGrade > 70 && averageGrade <= 80):
    value = "Добре";
    break;

    case (averageGrade > 80 && averageGrade <= 90): 
    value = "Дуже добре";
    break;

    case (averageGrade > 90 && averageGrade <= 100):
    value = "Відмінно";
    break;

    default:
    value = "Помилка: оцінка повинна бути в межах від 0 до 100";
    break;
}
console.log(value);