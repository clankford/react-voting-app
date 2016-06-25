const ProductList = React.createClass({
   render: function() {
       return (
           <div class='ui items'>
               Hello World!
           </div>
       );
   } 
});

ReactDOM.render(
    <ProductList />,
    document.getElementById('content')
);

const Product = React.createClass({
    render: function() {
        return (<div></div>)
    }
});