const {Product}  = require('../models/product.model')
module.exports.index = (request, response) => {
    response.json({
       message: "Hello World"
    });
}

module.exports.createProduct = (request, response) => {
    const { title, price, description } = request.body;
    Product.create({
        title,
        price,
        description
    }).then(product => response.json(product))
    .catch(err => response.json(err));
}

module.exports.findDetail = (request, response) => {
   
    Product.findById({_id:request.params.id}).then(product => response.json(product))
    .catch(err => response.json(err));
}
/*
module.exports.findDetail = (request, response) => {
    const _id = request.params.id;
    Product.findById({_id}).then(product => response.json(product))
    .catch(err => response.json(err));
}*/
module.exports.findAllProduct = (request, response) => {
    Product.find({}).then(product => response.json(product))
    .catch(err => response.json(err));
}

