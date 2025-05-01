class Product {
    constructor( id, name ) {
        this.id = id;
        this.name = name;
    }
}


class ProductCatalog {
    constructor() {
        this.products = []
    }
    add( id, name ) {
        const newProduct = new Product( id, name );
        this.products.push( newProduct )
    }
    getId( i ) {
        return this.products[i]?.id;
    }
    search( id ) {
        if ( !this.products.length ) {
            console.log( "No products in the catalog." );
            return null;
        }
        let start = 0;
        let end = this.products.length - 1;
        while ( start <= end ) {
            let mid = Math.floor( ( start + end ) / 2 );
            if ( this.getId( mid ) === id ) {
                console.log( `Product found: ${JSON.stringify( this.products[mid] )}` );
                return this.products[mid];
            }
            if ( this.getId( mid ) > id ) {
                end = mid - 1;
            } else if ( this.getId( mid ) < id ) {
                start = mid + 1;
            }
        }
        console.log( `Product with id ${id} not found.` );
        return -1;
    }
}


// Testing the ProductCatalog class
const list = new ProductCatalog();
list.add( 1, "Product A" );
list.add( 2, "Product B" );
list.add( 3, "Product C" );

console.log( "Searching for product with id 2:" );
list.search( 2 );

console.log( "Searching for product with id 4:" );
list.search( 4 );
