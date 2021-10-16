const ProductController = require('../controllers/product.controller');
module.exports = function(app){
    app.get('/api', ProductController.index);
    app.post('/api/product/create', ProductController.createProduct)
    app.get('/api/product/', ProductController.findAllProduct)    
}