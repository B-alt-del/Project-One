export const config = {
    style: "mapbox://styles/mapbox/streets-v11",
    accessToken: "pk.eyJ1Ijoic3N1bGxpdmFuMDgiLCJhIjoiY2w1Z3lwMXQ5MDJ2MTNwbnhqZHc3N2ZrciJ9.92YYbfMFkbFFGdQqniegVw",
    
    tileset: "mapbox://replace with you tileset URL",//only needed if using tileset as backend
    sourceLayerName: "replace with your source layer name",//only needed if using tileset as backend

    algoliaAppID: 'Replace with your App ID', //only needed if using algolia as backend
    algoliaToken: 'Replace with your Algolia Token',  //only needed if using algolia as backend
    algoliaIndex: 'Replace with your Algolia index name', //only needed if using algolia as backend

     
    center: [-93.2299, 44.9747], //Lng, Lat for the map center
    pitch: 60, //Default pitch
    zoom: 4, //Default zoom
    title: "Replace with your title",
    description: "Replace with information about your application. Ex. You can search by address to sort the list below by distance. You can also filter the list by language support options, which days a location is open, and whether they have devices to use to complete the survey by phone or online.",
    sideBarInfo: ["Header", "Info 1", "Info 2"],
    popupInfo: ["Popup Information"],
    filters: [
        {
            type: "dropdown",
            title: "Title of filter: ",
            columnHeader: "Column Name",
            listItems: [
                'filter one',
                'filter two',
                'filter three',
                'filter four',
                'filter five',
                'filter six',
                'filter seven'
            ]
        },
        {
            type: "checkbox",
            title: "Title of filter: ",
            columnHeader: "Column Name",
            listItems: ["filter one", "filter two", "filter three"]
        },
        {
            type: "dropdown",
            title: "Title of filter: ",
            columnHeader: "Column Name",
            listItems: [
                'filter one',
                'filter two',
                'filter three',
                'filter four',
                'filter five',
                'filter six',
                'filter seven'
            ]
        }
    ]

};