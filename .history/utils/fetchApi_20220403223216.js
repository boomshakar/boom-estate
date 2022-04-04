import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";
export const baseUrl2 = "https://realty-in-us.p.rapidapi.com";

export const fetchApi = async (url) => {
	const { data } = await axios.get(url, {
		headers: {
			"X-RapidAPI-Host": "bayut.p.rapidapi.com",
			"X-RapidAPI-Key": "f3666f333cmsh302b5634d41171bp1f5ceajsn7e396f7db55c",
		},
	});

	return data;
};
export const fetchApi2 = async (url) => {
	const { data } = await axios.get(url, {
		headers: {
			"X-RapidAPI-Host": "realty-in-us.p.rapidapi.com",
			"X-RapidAPI-Key": "f3666f333cmsh302b5634d41171bp1f5ceajsn7e396f7db55c",
		},
	});
	return data;
};
