import { ButtonsTheClown} from "./ButtonsTheClown.js"
import {fetchRequests, fetchClowns } from "./dataAccess.js"


const mainContainer = document.querySelector("#container")

const renderHTML = () => {
    fetchRequests().then(
        fetchClowns().then(
        () => {
            mainContainer.innerHTML = ButtonsTheClown()
        }
    )
    )
} 

renderHTML()

mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        renderHTML()
    }
)