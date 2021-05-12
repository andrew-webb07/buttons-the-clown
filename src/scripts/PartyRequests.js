import { deleteRequest, getRequests, getClowns, sendCompletion} from "./dataAccess.js"

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", (clickEvent) => {
    if(clickEvent.target.id.startsWith("request")) {
        const [, requestId] = clickEvent.target.id.split("--")
        deleteRequest(parseInt(requestId))
    }
})

mainContainer.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "clowns") {
            const [requestId, clownId] = event.target.value.split("--")

            const newDate = new Date()
            const completion = {
                requestId : requestId,
                clownId : clownId,
                date : newDate.toLocaleDateString()
            }

            sendCompletion(completion)
        }
    }
)

export const Requests = ()=> {
    const requests = getRequests()
    const clowns = getClowns()

    return `
        <ul>${requests.map((request) => {
            return `
        <li>
        ${request.description}

        <select class="clowns" id="clowns">
        <option value="">Choose</option>
        ${clowns.map(
            clown => {
                return `<option value="${request.id}--${clown.id}">${clown.name}</option>`
                }
            ).join("")
        }
        </select>

        <button class="delete__button" id="request--${request.id}">Deny</button>

        </li>
        `}).join("")}
            </ul>
    `
}