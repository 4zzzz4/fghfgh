function pow(x, n) { // отсутствовал пробел между аргументами и фигурная скобка была на отдельной строке
  let result = 1; // не было пробелов вокруг знака =

  for(let i = 0; i < n; i++) {  // не было пробелов
    result *= x; // не было пробелов, result *= x; вынесли на отдельную строку
}

  return result;
}

// написали в 2 строки, дбавили пробелы и точки с запятой
let x = prompt("x?", '');
let n = prompt("n?", '');

if (n <= 0) {  // <- нет пробелов, добавили отступ в одну строку сверху, фигурная скобка была на отдельной строке
  alert(`Степень ${n} не поддерживается,  // была слишком длинная строка, разбили для улучшения читаемости
  введите целую степень, большую 0`);
} else { // фигурная скобка была на отдельной строке
  alert( pow(x, n) ); // не было пробелов и точки с запятой
}