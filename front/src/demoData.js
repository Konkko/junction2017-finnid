export default {
    products: [
        {
            id: 1,
            name: "Iphone X"
        },
        {
            id: 2,
            name: "Seinäkello"
        }
    ],
    items: [
        {
            productId: 1,
            lastLocation: {
                x: 300,
                y: 500
            }
        },
        {
            productId: 2,
            lastLocation: {
                x: 400,
                y: 500
            }
        },
        {
            productId: 1,
            lastLocation: {/*TODO: should have content*/},
            stallId: 1
        },
        {
            productId: 2,
            lastLocation: {/*TODO: should have content*/},
            stallId: 2
        }
    ],
    stalls: [
        {
            id: 1,
            location: {
                width: 50,
                height: 50,
                x: 250,
                y: 250
            },
            approxCapacity: 10,
            productInstances: [{},{},{},{},{},{},{},{},{},{}]
        },
        {
            id: 2,
            location: {
                width: 50,
                height: 50,
                x: 500,
                y: 250
            },
            approxCapacity: 20,
            productInstances: [{},{},{},{},{},{},{},{}]
        },
        {
            id: 3,
            location: {
                width: 50,
                height: 50,
                x: 500,
                y: 500
            },
            approxCapacity: 10,
            productInstances: [{},{},{}]
        },
        {
            id: 4,
            location: {
                width: 50,
                height: 50,
                x: 250,
                y: 500
            },
            approxCapacity: 7,
            productInstances: []
        }
    ]
}