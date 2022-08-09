import { useState, useRef } from "react";

import statesData from "../datas/statesData.jsx";
import departmentsData from "../datas/departmentData.jsx";
import "../styling/form.css";
import Select from "./select.jsx";
import Input from "./input.jsx";
import { Modal } from "react_customizable_modal_boilerplate_clippens";

const Form = () => {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [dateOfBirth, setDateOfBirth] = useState("");
	const [startDate, setStartDate] = useState("");
	const [department, setDepartment] = useState(departmentsData[0].value);
	const [street, setStreet] = useState("");
	const [city, setCity] = useState("");
	const [countryState, setCountryState] = useState(statesData[0].value);
	const [zipCode, setZipCode] = useState("");
	const [openModale, setOpenModal] = useState(false);
	const OpenModal = () => setOpenModal(true);
	const CloseModal = () => setOpenModal(false);
	const errFirstName = useRef(null);
	const errLastName = useRef(null);
	const errStartDate = useRef(null);
	const errBirthDate = useRef(null);
	const errStreet = useRef(null);
	const errCity = useRef(null);
	const errStateName = useRef(null);
	const errZipCode = useRef(null);
	const errDepartment = useRef(null);
	const zipRegex = /^\d{5}$|^\d{5}$/;

	const dateTable = (date) => {
		const month = date.getMonth() + 1;
		const day = date.getDate();
		const year = date.getUTCFullYear();
		return `${month}/${day}/${year}`.toString();
	};
	const handleSub = (e) => {
		e.preventDefault();
		let errorCounter = 0;
		if (firstName.length < 2) {
			errFirstName.current.innerText = `First name should be at least 2 characters long.`;
			errorCounter++;
		} else {
			errFirstName.current.innerText = ` `;
		}
		if (lastName.length < 2) {
			errLastName.current.innerText = `Last name should be at least 2 characters long.`;
			errorCounter++;
		} else {
			errLastName.current.innerText = ` `;
		}
		if (street.length < 2) {
			errStreet.current.innerText = `Street is required.`;
			errorCounter++;
		} else {
			errStreet.current.innerText = ` `;
		}
		if (city.length < 2) {
			errCity.current.innerText = `City is required.`;
			errorCounter++;
		} else {
			errCity.current.innerText = ` `;
		}
		console.log(countryState);
		if (statesData.some((element) => element.value === countryState)) {
			errStateName.current.innerText = `State is required.`;
			errorCounter++;
		} else {
			errStateName.current.innerText = ` `;
		}
		if (departmentsData.some((element) => element.value === department)) {
			errDepartment.current.innerText = `Department is required.`;
			errorCounter++;
		} else {
			errDepartment.current.innerText = ` `;
		}
		if (!zipRegex.test(zipCode)) {
			errZipCode.current.innerText = `Correct Zip Code is required.`;
			errorCounter++;
		} else {
			errZipCode.current.innerText = ` `;
		}

		if (errorCounter > 0) {
			return;
		} else {
			let employees = JSON.parse(localStorage.getItem("employees")) || [];
			const employee = {
				firstName: firstName,
				lastName: lastName,
				startDate: dateTable(new Date(startDate)),
				department: department,
				dateOfBirth: dateTable(new Date(dateOfBirth)),
				street: street,
				city: city,
				state: countryState,
				zipCode: zipCode,
			};
			employees.push(employee);
			localStorage.setItem("employees", JSON.stringify(employees));
			OpenModal();
			setFirstName("");
			setLastName("");
			setFirstName("");
			setZipCode("");
			setStreet("");
			setDateOfBirth("");
			setCity("");
			setStartDate("");
		}
	};

	return (
		<>
			<form onSubmit={handleSub}>
				<div className="form-desc">Create Employee</div>
				<Input
					name="firstname"
					labelTitle="First Name:"
					value={firstName}
					setIn={setFirstName}
					type="text"
				/>
				<div ref={errFirstName}></div>
				<Input
					name="lastname"
					labelTitle="Last Name:"
					value={lastName}
					setIn={setLastName}
					type="text"
				/>
				<div ref={errLastName}></div>
				<Input
					labelTitle="Birth Date:"
					name="lastname"
					value={dateOfBirth}
					setIn={setDateOfBirth}
					type="date"
					min="1960-01-01"
					max="2022-12-31"
				/>
				<div ref={errBirthDate}></div>
				<Input
					labelTitle="Start Date:"
					placeholder="Select a start date"
					name="lastname"
					value={startDate}
					setIn={setStartDate}
					type="date"
					min="1960-01-01"
					max="2022-12-31"
				/>
				<div ref={errStartDate}></div>
				<div className="address">
					<div> Address:</div>
					<Input
						type="text"
						name="street"
						labelTitle="Street:"
						value={street}
						setIn={setStreet}
					/>
					<div ref={errStreet}></div>
					<Input
						type="text"
						name="city"
						labelTitle="City:"
						value={city}
						setIn={setCity}
					/>
					<div ref={errCity}></div>
					<Select
						name="state"
						labelTitle="State:"
						value={countryState}
						setElement={setCountryState}
						options={statesData}
					/>
					<div ref={errStateName}></div>
					<Input
						type="number"
						name="zipcode"
						labelTitle="Zipcode:"
						value={zipCode}
						setIn={setZipCode}
					/>
					<div ref={errZipCode}></div>
				</div>
				<Select
					name="department"
					labelTitle="Department:"
					value={department}
					setElement={setDepartment}
					options={departmentsData}
				/>
				<div ref={errDepartment}></div>
				<Input type="submit" name="submit" className="submit" value="Save" />
			</form>
			{openModale && <Modal close={CloseModal} text="Employee Created!" />}
		</>
	);
};

export default Form;
