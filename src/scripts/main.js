import { ButtonsTheClown } from "./ButtonsTheClown.js"
import {fetchRequests} from "./dataAccess.js"


const mainContainer = document.querySelector("#container")

const renderHTML = () => {
    fetchRequests().then(
        () => {
            mainContainer.innerHTML = ButtonsTheClown()
        }
    )
} 

renderHTML()

mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        renderHTML()
    }
)