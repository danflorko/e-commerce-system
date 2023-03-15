const fs = require('fs')
const { faker } = require('@faker-js/faker');

const getData = (count) => Array.from(new Array(count)).map((_, idx) => {
    const price = faker.commerce.price()

    return {
        id: idx,
        itemId: `${idx}-product-${faker.commerce.product()}`,
        name: faker.commerce.productName(),
        fullPrice: price,
        price: (price * 0.8).toFixed(),
        screen: `${faker.datatype.float({ min: 2, max: 5, precision: 0.1 })} IPS`,
        capacity: `${faker.datatype.number({ min: 60, max: 1600, precision: 1 })} GB`,
        color: faker.color.human(),
        ram: `${faker.datatype.number({ min: 2, max: 16, precision: 1 })} GB`,
        year: faker.date.past(5).getFullYear(),
        image: faker.image.transport(1080, 1440, true)
    }
})

fs.writeFileSync(
    "./db.json",
    JSON.stringify({ products: getData(250) })
);
