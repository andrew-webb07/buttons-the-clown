import { getRequests } from "./dataAccess.js"


export const Requests = ()=> {
    const requests = getRequests()

    return `
        <ul>${requests.map((request) => {
            return `
        <li>
        ${request.description}
        </li>
        `}).join("")}
            </ul>
    `
}