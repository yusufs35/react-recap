import React, { useEffect, useState } from "react";
import employees from "../data/employees.json";
import { Dropdown } from "react-bootstrap";

const Recap6Child = () => {
	const [currentDepartment, setCurrentDepartment] = useState("");
	const [departments, setDepartments] = useState([]);
	const [totalSalary, setTotalSalary] = useState(0);

	useEffect(() => {
		let arr = employees.map((item) => item.department);
		arr = [...new Set(arr)].sort();
		setDepartments(arr);
	}, []);

	useEffect(() => {
		if (!currentDepartment) return;

		const salary = employees
			.filter((item) => item.department === currentDepartment)
			.reduce((total, item) => total + item.salary, 0);

		setTotalSalary(salary);
        
	}, [currentDepartment]);

	return (
		<div>
			<Dropdown>
				<Dropdown.Toggle variant="success" id="dropdown-basic">
					{currentDepartment || "Select a department"}
				</Dropdown.Toggle>

				<Dropdown.Menu>
					{departments.map((item) => (
						<Dropdown.Item
							onClick={() => setCurrentDepartment(item)}
							key={item}
						>
							{item}
						</Dropdown.Item>
					))}
				</Dropdown.Menu>
			</Dropdown>

			<p>
				<b>Total salary:</b> {totalSalary}
			</p>
		</div>
	);
};

export default Recap6Child;
