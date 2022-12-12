window.onload = function LoadData() {
    mountainCards()
  }
  
  function mountainTemplate(mountain) {
      // let mySunrise = getSunsetForMountain(`${mountain.coords.lat},${mountain.coords.lng}`);
       
       return `
         <div class="mountain">
         <img class="mountain-photo" src="images/${mountain.img}">
         <h2 class="mountain-name">${mountain.name} <span class="species">(${mountain.elevation} feet)</span></h2>
         <h4 class="mountain-desc">${mountain.desc} </h4>
         <p><strong>Effort:</strong> ${mountain.effort}</p>
         <strong>Coordinates:</strong> lat: ${mountain.coords.lat} lng: ${mountain.coords.lng}
      
         </div>
         `;
     }
  
     ///mountain cards
     function mountainCards() {
     
          document.getElementById("mountainsDiv").innerHTML = `
            <h1 class="app-title"> ${mountainsArray.length} Mountains to climb</h1>
            ${mountainsArray.map(mountainTemplate).join("")}
            <p class="footer">These ${mountainsArray.length} mountants were added recently. Check back soon for updates.</p>
          `;  
     }

     function loadData() {
        var down = document.getElementById('mountainDropDown');
               for (let i = 0; i < mountainsArray.length; i++) {
                   var optn = mountainsArray[i].name;
                   var el = document.createElement("option");
                   el.textContent = optn;
                   el.value = optn;
              down.appendChild(el);
               }
               ///down.innerHTML = "Elements Added";
           }
           loadData()
   
           function dropDownSelect () {
              mountainCards ()


           }