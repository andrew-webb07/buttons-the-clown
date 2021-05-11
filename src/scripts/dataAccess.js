const applicationState = {
    parents: [],
    children: [],
    partyRequests: [],
    chronologicalPartyOrder: []
}

const API = "http://localhost:8088"

export const fetchRequests = () => {
    return fetch(`${API}/partyRequests`) 
        .then(response => response.json())
        .then(
            (requests) => {
                applicationState.partyRequests = requests
            }
        )
}

export const getFetchRequests = () => {
    return [...applicationState.partyRequests]
}