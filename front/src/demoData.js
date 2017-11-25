let stalls = [
    {
        id: 1,
        location: {
            width: 25,
            height: 75,
            x: 100,
            y: 100
        },
        approxCapacity: 10
    },
    {
        id: 2,
        location: {
            width: 25,
            height: 75,
            x: 100,
            y: 200
        },
        approxCapacity: 20
    },
    {
        id: 3,
        location: {
            width: 25,
            height: 75,
            x: 100,
            y: 300
        },
        approxCapacity: 10
    },
    {
        id: 4,
        location: {
            width: 25,
            height: 75,
            x: 200,
            y: 125
        },
        approxCapacity: 7
    },
    {
        id: 5,
        location: {
            width: 25,
            height: 75,
            x: 200,
            y: 275
        },
        approxCapacity: 7
    },
    {
        id: 6,
        location: {
            width: 25,
            height: 75,
            x: 225,
            y: 125
        },
        approxCapacity: 7
    },
    {
        id: 7,
        location: {
            width: 25,
            height: 75,
            x: 225,
            y: 275
        },
        approxCapacity: 7
    },
    {
        id: 8,
        location: {
            width: 25,
            height: 75,
            x: 325,
            y: 125
        },
        approxCapacity: 7
    },
    {
        id: 9,
        location: {
            width: 25,
            height: 75,
            x: 325,
            y: 275
        },
        approxCapacity: 7
    },
    {
        id: 10,
        location: {
            width: 25,
            height: 75,
            x: 350,
            y: 125
        },
        approxCapacity: 7
    },
    {
        id: 11,
        location: {
            width: 25,
            height: 75,
            x: 350,
            y: 275
        },
        approxCapacity: 7
    },
    {
        id: 12,
        location: {
            width: 25,
            height: 75,
            x: 450,
            y: 100
        },
        approxCapacity: 10
    },
    {
        id: 13,
        location: {
            width: 25,
            height: 75,
            x: 450,
            y: 200
        },
        approxCapacity: 20
    },
    {
        id: 14,
        location: {
            width: 25,
            height: 75,
            x: 450,
            y: 300
        },
        approxCapacity: 10
    },
    {
        id: 15,
        location: {
            width: 125,
            height: 25,
            x: 100,
            y: 425
        },
        approxCapacity: 10
    },
    {
        id: 16,
        location: {
            width: 125,
            height: 25,
            x: 225,
            y: 425
        },
        approxCapacity: 10
    },
    {
        id: 17,
        location: {
            width: 125,
            height: 25,
            x: 350,
            y: 425
        },
        approxCapacity: 10
    }
]

const scale = 1.8;
const dimensions = {
    width: 525,
    height: 500,
}

function transform(a) {
    return (a - 50) * scale;
}



stalls.forEach(s => {
    s.location = {
        width: s.location.width * scale,
        height: s.location.height * scale,
        x: transform(s.location.x),
        y: transform(s.location.y)
    }
});

export default {
    dimensions: {
        width: transform(dimensions.width),
        height: transform(dimensions.height)
    },
    stalls: stalls,
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
}