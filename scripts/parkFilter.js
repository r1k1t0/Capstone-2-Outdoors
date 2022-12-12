window.onload = function LoadData() {

    initStatesDropdown();
    initParkDropDown();
    document.getElementById("stateSearchButton").addEventListener("click", runStateSearch);
    document.getElementById("parkTypeSearchButton").addEventListener("click", runParkTypeSearch);

};

function initStatesDropdown() {
    // load the dropdown list with Location Data
    const parkLocationList = document.getElementById("parkLocationList");
    let amountOfStates = locationsArray.length;
   
    for (let i = 0; i < amountOfStates; i++) {
    // create the option element
    let theOption = document.createElement("option");
    // set the text and value of the option you created
    theOption.textContent = locationsArray[i];
    theOption.value = locationsArray[i];
    // append the option as a child of (inside) the
    // select element
    parkLocationList.appendChild(theOption); //Adding to the dropdown
    }
}

function initParkDropDown() {

    const parkTypeData = document.getElementById("parkTypeList");
    let length2 = parkTypesArray.length;

    for (let i = 0; i < length2; i++) {
    let theOption2 = document.createElement("option");
    theOption2.textContent = parkTypesArray[i];
    theOption2.value = parkTypesArray[i];
    parkTypeData.appendChild(theOption2); 
    }

}

function parkTemplate(park) {
      return `
        <div class="park">
        <h2 class="parkLocationName">${park.LocationName}</h2>
        <h2 class="parkAddress">${park.Address}<br>${park.City}, ${park.State} ${park.ZipCode}</h2>
        <h2 class="parkPhoneFax">Phone #: ${park.Phone} Fax #: ${park.Fax}</h2>
        <h4 class="parkLatLong">Lat: ${park.Latitude} Long: ${park.Longitude}</h4>
        <h4 class="parkLocation">Coordinates: ${park.Location.coordinates}</h4>
        </div>
      `
    };

    document.getElementById("parkDiv").innerHTML = `
    <h1 class = "park-title">${nationalParksArray.length} parks to explore</h1>
    ${nationalParksArray.map(parkTemplate).join('')}
`;

function loadData() {
    var down = document.getElementById('park');
            for (let i = 0; i < nationalParksArray.length; i++) {
                var optn = nationalParksArray[i];
                var el = document.createElement("option");
                el.textContent = optn;
                el.value = optn;
                down.appendChild(el);
            }
            down.innerHTML = "";
        }


function runStateSearch() {

    const selectedStateFromDropdown = document.getElementById("parkLocationList").value;
    const filterStates = nationalParksArray.filter(park => park.State == selectedStateFromDropdown);
    document.getElementById("parkDiv").innerHTML = `${filterStates.map(parkTemplate).join("")}`;
}

function runParkTypeSearch() {

    const selectedParkTypeFromDropdown = document.getElementById("parkTypeList").value;
    const filterParkTypes = nationalParksArray.filter(park => park.LocationName == selectedParkTypeFromDropdown);
    document.getElementById("parkDiv").innerHTML = `${filterParkTypes.map(parkTemplate).join("")}`;
}