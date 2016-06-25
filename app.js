const Product = React.createClass({
    render: function() {
        return (
            <div className='item'>
                <div className='image'>
                    <img src='images/products/image-aqua.png' />
                </div>
                <div class='middle aligned content'>
                    <div className='description'>
                        <a>Product Number 1</a>
                        <p>A description of product number 1.</p>
                    </div>
                    <div className='extra'>
                        <span>Submitted by:</span>
                        <img
                            className='ui avatar image'
                            src='images/avatars/daniel.jpg'
                        />
                    </div>
                </div>
            </div>
        );
    }
});

const ProductList = React.createClass({
   render: function() {
       return (
           <div class='ui items'>
               <Product />
           </div>
       );
   } 
});

ReactDOM.render(
    <ProductList />,
    document.getElementById('content')
);

