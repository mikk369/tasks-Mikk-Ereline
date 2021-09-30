const product = require(/products_result.json)

function getOneTypeProduct(type) {
        return product.filter((product) => {
            return product.type == type
        })
    }

const tropical = getOneTypeproducts('TROPICAL')
const tropiclTotal = tropical.reduce((previousValue, currentValue) => {
    return previousValue + currentValue.price
}, 0)

console.log('tropicalTotal', tropicalTotal)

const applesPears = getonetypeProducts('APPLES_PEARS')
console.log('applesPears', applesPears

)