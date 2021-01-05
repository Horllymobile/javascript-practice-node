const data = [
    {
        id: 1,
        title: 'Data 1',
        price: 4.7,
        condition: 'New'
    },
    {
        id: 2,
        title: 'Data 1',
        price: 8.7,
        condition: 'Old'
    },
    {
        id: 3,
        title: 'Data 1',
        price: 1.7,
        condition: 'New'
    },
    {
        id: 4,
        title: 'Data 1',
        price: 10.5,
        condition: 'New'
    },
    {
        id: 5,
        title: 'Data 1',
        price: 6.7,
        condition: 'Old'
    }
]


// const sort = function(data) {

// }


console.log(data)

console.log(data.sort((a, b) => {
    return a.condition - b.condition
}));