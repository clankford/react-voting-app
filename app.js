const Product = React.createClass({
    handleUpVote: function() {
        this.props.onUpVote(this.props.id);
    },
    handleDownVote: function() {
        this.props.onDownVote(this.props.id);
    },
    render: function() {
        return (
            <div className='item'>
                <div className='image'>
                    <img src={this.props.product_image_url} />
                </div>
                <div class='middle aligned content'>
                    <div className='header'>
                        <a onClick={this.handleUpVote}>
                            <i className='large caret up icon'></i>
                        </a>
                        {this.props.votes}
                    </div>
                    <div className='header'>
                        <a onClick={this.handleDownVote}>
                            <i className='large caret down icon'></i>
                        </a>
                    </div>
                    <div className='description'>
                        <a href={this.props.url}>
                            {this.props.title}
                        </a>
                    </div>
                    <div className='extra'>
                        <span>Submitted by:</span>
                        <img
                            className='ui avatar image'
                            src={this.props.submitter_avatar_url}
                        />
                    </div>
                </div>
            </div>
        );
    }
});

const ProductList = React.createClass({
    getInitialState: function() {
       return {
           products: [],
           sort: 'descending'
       };
    },
    componentDidMount: function() {
       this.updateState();
    },
    updateState: function() {
        if (this.state.sort === 'descending') {
            const products = Data.sort((a, b) => {
                return b.votes - a.votes;
            });
            this.setState({ products: products, sort: 'ascending' });
        }
        else {
            const products = Data.sort((a, b) => {
                return a.votes - b.votes;
            });
            this.setState({ products: products });
        }   
    },
    handleProductUpVote: function(productId) {
        Data.forEach((el) => {
            if (el.id === productId) {
                el.votes = el.votes + 1;
                return;
            }
        });
        this.updateState();
    },
    handleProductDownVote: function(productId) {
        Data.forEach((el) => {
            if (el.id === productId) {
                el.votes = el.votes - 1;
                return;
            }
        });
        this.updateState();
    },
    handleToggleSort: function() {
        if (this.state.sort === 'descending') {
            this.setState({ sort: 'ascending'});
            this.updateState(); 
        }
        else {
            this.setState({ sort: 'descending'}); 
            this.updateState();
        }
    },
    render: function() {
        const products = this.state.products.map((product) => {      
            return (
                    <Product 
                        key={'product-' + product.id}
                        id={product.id}
                        title={product.title}
                        description={product.description}
                        url={product.url}
                        votes={product.votes}
                        submitter_avatar_url={product.submitter_avatar_url}
                        product_image_url={product.product_image_url}
                        onUpVote={this.handleProductUpVote}
                        onDownVote={this.handleProductDownVote}
                    />
            );
        });
        return (
            
            <div className='ui items'>
                <div className='header'>
                <a onClick={this.handleToggleSort}>
                    Sort Toggle
                </a>
            </div>
                {products}
            </div>
        )
    }
});

ReactDOM.render(
    <ProductList />,
    document.getElementById('content')
);

