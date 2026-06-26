//Tab1 : EmpId, EmpName
//Tab2 : EmpId, Salary, Project, TrasactionDateandTime    3rd highest salary

// SELECT e.EmpId, e.EmpName, t.Salary
// FROM (
//     SELECT EmpId, Salary,
//            DENSE_RANK() OVER (ORDER BY Salary DESC) AS rnk
//     FROM Tab2
// ) t
// JOIN Tab1 e ON e.EmpId = t.EmpId
// WHERE t.rnk = 3;

//Step-by-Step Explanation
//1.SELECT EmpId, Salary,
//        DENSE_RANK() OVER (ORDER BY Salary DESC) AS rnk
// FROM Tab2->inner query run first.
//2.The result of the inner query is treated as a temporary table named t:and
// Now you have a table with columns EmpId, Salary, and rnk.

//3.WHERE t.rnk = 3->This filters only those rows where the rank equals 3.
//4.Join with Employee Table -> JOIN Tab1 e ON e.EmpId = t.EmpId
//5.SELECT e.EmpId, e.EmpName, t.Salary-Displays the employee ID,
//  name, and salary for those ranked 3rd highest.->outer query at last inner query is the logic
//calculation layer

//single table
// SELECT *
// FROM (
//     SELECT
//         employee_id,
//         name,
//         salary,
//         DENSE_RANK() OVER (ORDER BY salary DESC) AS rnk
//     FROM employees
// )
// WHERE rnk <= 3
// ORDER BY salary DESC;

// SELECT Department, COUNT(*) AS EmployeeCount
// FROM Employees
// GROUP BY Department
// HAVING COUNT(*) > 10
// ORDER BY EmployeeCount DESC;
