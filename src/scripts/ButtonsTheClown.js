import { PartyForm } from "./PartyForm.js"


export const ButtonsTheClown = () => {
    return `
        <h1>Buttons and Lollipop the Clowns</h1>

        <section class="partyForm">
        ${PartyForm()}
        </section>

        <section class="partyRequests">
        <h2>Party Requests</h2>
        
        </section>

    `
}