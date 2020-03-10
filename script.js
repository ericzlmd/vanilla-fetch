const url = "https://api.spacexdata.com/v3/launches";

async function getData(url) {
  let res = await fetch(url);
  let data = await res.json();

  return data; // this is a promise
}

getData(url).then(data => {
  // data - objects array
  data.forEach(launch => {
    console.log(launch); // checking

    // create div
    var newDiv = document.createElement("div"); // element container
    var newTitle = document.createElement("h3"); // mission_title
    var newPara = document.createElement("p"); // launch_success
    var newDate = document.createElement("p"); // launch_date
    var newLoc = document.createElement('p'); // launch_site.site_name_long

    var titleContent = document.createTextNode(`${launch.mission_name}`);
    var paraContent = document.createTextNode(`${launch.launch_success}`);
    var dateContent = document.createTextNode(`${launch.launch_year}`);
    var locContent = document.createTextNode(`${launch.launch_site.site_name_long}`)

    newTitle.append("Mission name: ", titleContent);
    newTitle.classList = "launch-title";
    newPara.append("Launch success: ", paraContent);
    newDate.append("Launch year: ", dateContent);
    newLoc.append("Launch site: ", locContent);
    

    newDiv.appendChild(newTitle);
    newDiv.appendChild(newPara);
    newDiv.appendChild(newDate);
    newDiv.appendChild(newLoc);
    newDiv.classList = "launch";
    document.querySelector("#app").appendChild(newDiv);
  });
});
