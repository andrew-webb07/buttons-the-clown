const applicationState = {
    parents: [],
    children: [],
    partyRequests: [],
    chronologicalPartyOrder: [],
    clowns: [],
    completions: []
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

export const fetchClowns = () => {
    return fetch(`${API}/clowns`)
    .then(response => response.json())
    .then(
        (clowns) => {
            applicationState.clowns = clowns
        }
    )
}

export const getClowns = () => {
    return [...applicationState.clowns]
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

export const sendCompletion = (completedPerformance) => {
    return fetch(`${API}/completions`, {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(completedPerformance)
    })
    .then(response => response.json())
    .then(() => {
        mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
    })
}

export const fetchCompletions = () => {
    return fetch(`${API}/completions`)
        .then(response => response.json())
        .then((completedParties) => {
            applicationState.completions = completedParties
        })
}