import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/courses";

export function getCourse() {
	return fetch(baseUrl).then(handleResponse).catch(handleError);
}
