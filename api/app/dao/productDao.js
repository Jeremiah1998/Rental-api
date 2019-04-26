const Product = require('../model/product');
const daoCommon = require('./common/daoCommon');

class ProductDao {
    constructor() {
        this.common = new daoCommon();
    }
    findAll() {
        let sqlRequest = "SELECT * FROM product";
        return this.common.findAll(sqlRequest).then(rows => {
            let products = [];
            for (const row of rows) {
                products.push(new Product(
                        row.id,
                        row.year,
                        row.make,
                        row.model,
                        row.price,
                        row.mileage
                    )
                );
            }
            return products;
        });
    }

    create(product) {
        let sqlRequest = "INSERT INTO product ( year, make, model, price, mileage) VALUES ($year, $make, $model, $price, $mileage)";
        let sqlParams = {
            $year: year,
            $make: make,
            $model: model,
            $color: price,
            $mileage: mileage
        };
        return this.common.run(sqlRequest, sqlParams);
    };

    update(product) {
        let sqlRequest = "UPDATE product SET year=$year, make=$make, model=$model, price=$price, mileage=$mileage, WHERE id=$id";
        let sqlParams = {
            $id: id,
            $year: year,
            $make: make,
            $model: model,
            $color: price,
            $mileage: mileage
        };
        return this.common.run(sqlRequest, sqlParams);
    };

}




module.exports = ProductDao; 