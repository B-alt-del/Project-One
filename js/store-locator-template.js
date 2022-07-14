
// store locator instructions: https://github.com/mapbox/StoreLocatorTemplate/blob/main/docs/storeLocator-with-filters.md

export const config = {
    style: "mapbox://styles/mapbox/streets-v11", //mapbox://styles/mapbox/dark-v10 , mapbox://styles/mapbox/outdoors-v11, mapbox://styles/mapbox/streets-v11, your custom style URL
    accessToken: "Replace with your Accecc Token",
    
    tileset: "mapbox://replace with you tileset URL",//only needed if using tileset as backend
    sourceLayerName: "replace with your source layer name",//only needed if using tileset as backend

    algoliaAppID: 'Replace with your App ID', //only needed if using algolia as backend
    algoliaToken: 'Replace with your Algolia Token',  //only needed if using algolia as backend
    algoliaIndex: 'Replace with your Algolia index name', //only needed if using algolia as backend

     
    center: [-86.8104, 33.5186], //Lng, Lat for the map center
    pitch: 60, //Deafualt pitch
    zoom: 4, //Default zoom
    title: "Booze search",
    description: "Search for liquor stores near you.",
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