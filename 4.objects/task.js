function Student(name, gender, age) {
	this.name = name; // Сохраняем имя студента
	this.gender = gender; // Сохраняем пол студента
	this.age = age; // Сохраняем возраст студента
	this.marks = []; // Инициализируем пустой массив для оценок
}

Student.prototype.setSubject = function(subjectName) {
	this.subject = subjectName; // Устанавливаем переданное имя предмета
}

Student.prototype.addMarks = function(...marks) {
	// Проверяем, есть ли свойство marks; если студент отчислен, свойство не будет существовать
	if (!this.marks) return;
	this.marks.push(...marks); // Добавляем переданные оценки в массив marks
}

Student.prototype.getAverage = function() {
	// Проверяем наличие оценок
	if (!this.marks || this.marks.length === 0) return 0;
	// Вычисляем среднее значение
	const sum = this.marks.reduce((acc, mark) => acc + mark, 0);
	return sum / this.marks.length;
}

Student.prototype.exclude = function(reason) {
	delete this.subject; // Удаляем свойство subject
	delete this.marks; // Удаляем свойство marks
	this.excluded = reason; // Устанавливаем причину исключения
}
