import { sendRequest } from "./dataAccess.js";

const mainContainer = document.querySelector("#container");

mainContainer.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id === "submitRequest") {
    const userDescription = document.querySelector("input[name=partyDescription").value;
    const userParentName = document.querySelector("input[name=partyParentName]").value;
    const userChildName = document.querySelector("input[name=partyChildName]").value;
    const userNumberOfChildren = document.querySelector("input[name=partyNumberOfChildren]").value;
    const userAddress = document.querySelector("input[name=partyAddress]").value;
    const userDate = document.querySelector("input[name=partyDate]").value;

    const dataToSendToAPI = {
      description: userDescription,
      parentName: userParentName,
      childName: userChildName,
      numberOfChildren: userNumberOfChildren,
      address: userAddress,
      date: userDate,
    };

    sendRequest(dataToSendToAPI);
  }
});

export const PartyForm = () => {
  return `
        <div class="field">
            <label class="label"
            for="partyDescription">Party Description</label>
            <input type="text" name="partyDescription" class="input" />
        </div>

        <div class="field">
            <label class="label"
            for="partyParentName">Parent Name</label>
            <input type="text" name="partyParentName" class="input" />
        </div>

        <div class="field">
            <label class="label"
            for="partyChildName">Child Name</label>
            <input type="text" name="partyChildName" class="input" />
        </div>

        <div class="field">
            <label class="label"
            for="partyNumberOfChildren">Number Of Children Attending</label>
            <input type="text" name="partyNumberOfChildren" class="input" />
        </div>

        <div class="field">
            <label class="label"
            for="partyAddress">Address</label>
            <input type="text" name="partyAddress" class="input" />
        </div>

        <div class="field">
            <label class="label"
            for="partyDate">Party Date</label>
            <input type="date" name="partyDate" class="input" />
        </div>
        
        <button class="button" id="submitRequest">Submit Request</button>
    `;
};
