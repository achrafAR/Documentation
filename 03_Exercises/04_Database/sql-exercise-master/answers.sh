### Basic Queries
{
-1-select name from students
-2-select * from students WHERE age>30
-3-select name from students where age=30 AND Gender='F'
-4-SELECT Points from students WHERE name='Alex'
-5-INSERT INTO students VALUES('7','Achraf','33','M','150');
-6-update students set Points=Points+50 WHERE name = 'Basma'
-7-update students set Points=Points-50 WHERE name = 'Alex' 
}

### Creating Table
{
-1-INSERT INTO gradutes (ID,name,Age,Gender,Points) SELECT ID,name,Age,Gender,Points from students where name= 'Layal'
-2-UPDATE  gradutes set Graduation="08/09/2018" where name='Layal'
}


### Joins
{
-1-SELECT employees.Name,companies.Name,companies.Date from employees INNER JOIN companies where employees.Company=companies.Name
-2-SELECT employees.Name from employees INNER JOIN companies where companies.name=employees.Company AND companies.date<2000
-3-SELECT companies.Name from companies INNER JOIN employees WHERE companies.Name = employees.Company AND employees.Role='Graphic Designer'


}


### Count & Filter
{
-1-SELECT  name FROM students WHERE Points = (SELECT MAX(Points) FROM students);
-2-SELECT avg(points) FROM students
-3-SELECT count(name) from students where Points=500
-4-SELECT * FROM students WHERE name LIKE '%s%';
-5-SELECT * FROM students ORDER BY Points
}
