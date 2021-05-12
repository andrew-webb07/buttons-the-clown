import { deleteRequest, getRequests } from "./dataAccess.js"

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", (clickEvent) => {
    if(clickEvent.target.id.startsWith("request")) {
        const [, requestId] = clickEvent.target.id.split("--")
        deleteRequest(parseInt(requestId))
    }
})

export const Requests = ()=> {
    const requests = getRequests()

    return `
        <ul>${requests.map((request) => {
            return `
        <li>
        ${request.description}

        <button class="delete__button" id="request--${request.id}">Deny</button>

        </li>
        `}).join("")}
            </ul>
    `
}