import { useState } from "react";

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
	const [department, setDepartment] = useState("");
	const [street, setStreet] = useState("");
	const [city, setCity] = useState("");
	const [countryState, setCountryState] = useState("AL");
	const [zipCode, setZipCode] = useState("");
	const [openModale, setOpenModal] = useState(false);
	const OpenModal = () => setOpenModal(true);
	const CloseModal = () => setOpenModal(false);

	const handleSub = (e) => {
		e.preventDefault();
		e.target.reset();
		OpenModal();
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
				<Input
					name="lastname"
					labelTitle="Last Name:"
					value={lastName}
					setIn={setLastName}
					type="text"
				/>
				<Input
					labelTitle="Birth Date:"
					name="lastname"
					value={dateOfBirth}
					setIn={setDateOfBirth}
					type="date"
				/>
				<Input
					labelTitle="Start Date:"
					placeholder="Select a start date"
					name="lastname"
					value={startDate}
					setIn={setStartDate}
					type="date"
				/>

				<div className="address">
					<div> Address:</div>
					<Input
						type="text"
						name="street"
						labelTitle="Street:"
						value={street}
						setIn={setStreet}
					/>
					<Input
						type="text"
						name="city"
						labelTitle="City:"
						value={city}
						setIn={setCity}
					/>
					<Select
						name="state"
						labelTitle="State:"
						value={countryState}
						setElement={setCountryState}
						options={statesData}
					/>

					<Input
						type="number"
						name="zipcode"
						labelTitle="Zipcode:"
						value={zipCode}
						setIn={setZipCode}
					/>
				</div>
				<Select
					name="department"
					labelTitle="Department:"
					value={department}
					setElement={setDepartment}
					options={departmentsData}
				/>
				<Input type="submit" name="submit" className="submit" value="Save" />
			</form>
			{openModale && <Modal close={CloseModal} text="Employee Created!" />}
		</>
	);
};

export default Form;
