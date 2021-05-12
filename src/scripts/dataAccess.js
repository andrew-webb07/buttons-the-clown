const applicationState = {
    parents: [],
    children: [],
    partyRequests: [],
    chronologicalPartyOrder: []
}

const API = "http://localhost:8088"

const mainContainer = document.querySelector("#container")

export const fetchRequests = () => {
    return fetch(`${API}/partyRequests`) 
        .then(response => response.json())
        .then(
            (requests) => {
                applicationState.partyRequests = requests
            }
        )
}

export const getRequests = () => {
    return [...applicationState.partyRequests]
}

export const sendRequest = (userServiceRequest) => {
    return fetch(`${API}/partyRequests`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userServiceRequest)
    })
    .then(response => response.json())
    .then(
        () => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        }
    )
}

export const deleteRequest = (id) => {
    return fetch(`${API}/partyRequests/${id}`, {method:"DELETE"})
    .then(
        () => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        }
    )
}