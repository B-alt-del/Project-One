
var citySearch = document.querySelector("#citySubmit")
var apiKey = "0342aa5e399ecd0cd610e5858ede6f30"

// var latitude = (data[0].lat)
// var longitude = (data[0].lon)

function cityFetch(searchedCity) {
    fetch('http://api.openweathermap.org/geo/1.0/direct?q=' + searchedCity + '&appid=' + apiKey)
        .then(function (response) {
            response.json();
        })
        console.log()

        // console.log(latitude);
}

citySearch.addEventListener("click", function() {
    var searchedCity = document.querySelector("#searchedCity").value
    cityFetch(searchedCity)

    console.log(searchedCity)
})

// export const config = {
//     style: "mapbox://styles/mapbox/streets-v11",
//     accessToken: "pk.eyJ1Ijoic3N1bGxpdmFuMDgiLCJhIjoiY2w1Z3lwMXQ5MDJ2MTNwbnhqZHc3N2ZrciJ9.92YYbfMFkbFFGdQqniegVw",

     
//     center: [-93.2299, 44.9747], //Lng, Lat for the map center
//     pitch: 60, //Default pitch
//     zoom: 4, //Default zoom
//     title: "Replace with your title",
//     description: "Replace with information about your application. Ex. You can search by address to sort the list below by distance. You can also filter the list by language support options, which days a location is open, and whether they have devices to use to complete the survey by phone or online.",
//     sideBarInfo: ["Header", "Info 1", "Info 2"],
//     popupInfo: ["Popup Information"],
//     filters: [
//         {
//             type: "dropdown",
//             title: "Title of filter: ",
//             columnHeader: "Column Name",
//             listItems: [
//                 'filter one',
//                 'filter two',
//                 'filter three',
//                 'filter four',
//                 'filter five',
//                 'filter six',
//                 'filter seven'
//             ]
//         },
//         {
//             type: "checkbox",
//             title: "Title of filter: ",
//             columnHeader: "Column Name",
//             listItems: ["filter one", "filter two", "filter three"]
//         },
//         {
//             type: "dropdown",
//             title: "Title of filter: ",
//             columnHeader: "Column Name",
//             listItems: [
//                 'filter one',
//                 'filter two',
//                 'filter three',
//                 'filter four',
//                 'filter five',
//                 'filter six',
//                 'filter seven'
//             ]
//         }
//     ]
// };