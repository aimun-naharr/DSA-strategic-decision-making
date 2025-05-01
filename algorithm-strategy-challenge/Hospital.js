class Client {
    constructor( id, name ) {
        this.id = id;
        this.name = name;
    }
}

class Hospital {
    constructor() {
        this.list = new Map();
    }
    set( id, name ) {
        const newClient = new Client( id, name );
        this.list.set( id, newClient )
    }
    get( id ) {
        return this.list.get( id )
    }

}
//Hash map is the best option for this random data where Searching by id will take o(1) time;
//Binary search will not be appropiate as this data is not sorted;
//Linear search will take o(n) time;