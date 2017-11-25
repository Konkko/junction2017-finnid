let stalls = [
    {
        id: 1,
        productId: 1,
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
        productId: 2,
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
        productId: 3,
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
        productId: 4,
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
        productId: 5,
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
        productId: 6,
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
        productId: 7,
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
        productId: 8,
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
        productId: 9,
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
        productId: 10,
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
        productId: 11,
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
        productId: 12,
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
        productId: 13,
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
        productId: 14,
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
        productId: 15,
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
        productId: 16,
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
        productId: 17,
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

//From: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

//Generate demo items to stall
const demoItems = [];
stalls.forEach(stall => {
    const itemCount = getRandomInt(0, stall.approxCapacity + 1);

    const location = {
        x: (stall.x + (stall.x + stall.width)) / 2,
        y: (stall.y + (stall.y + stall.height)) / 2
    }

    for (let i = 0; i < itemCount; i++) {
        demoItems.push({
            epc: i.toString(),
            productId: stall.productId,
            lastLocation: location,
            stallId: stall.id 
        });
    }
})

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
    items: demoItems
}