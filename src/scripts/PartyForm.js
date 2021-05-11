

export const PartyForm = () => {
    return `
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
    `
}