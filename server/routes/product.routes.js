const ProductController = require('../controllers/product.controller');
module.exports = function(app){
    app.get('/api', ProductController.index);
    app.get('/api/product/list', ProductController.findAllProduct)
    app.get('/api/product/:id', ProductController.findDetail)
    app.post('/api/product/create', ProductController.createProduct)
    app.put('/api/product/update/:id', ProductController.updateProduct)
    app.delete('/api/product/:id', ProductController.deleteProduct);
    
}