// Normalize text (string in minuscule)
const normalizeTxt = (text) => {
	return text
		.toLowerCase()
		.normalize("NFD")
		.replace(/[\u0300-\u036f]/g, "")
		.trim();
};

export { normalizeTxt };
