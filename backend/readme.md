API End Points

Route                   Type    Description

/Epc/GetAll             GET     Get sth
/Epc/GetById/:id        GET     Get sth
/Epc/GetByEpc/:epc      GET     Get sth
/Epc                    POST    Add new tag to system



/Item/GetAll
/Item/GetById/:id
/Item/GetByEpc/:epc

/products               GET     Get all products in an array
/products               POST    Add new product

/shelf                  GET     Get all shelves in an array
/shelf                  POST    Add new shelf

/shelf/:id              GET     Get shelf info, including products[]
/shelf/:id/products     POST    Add new product to shelf

================================================================================

Data

product
    ID
    Name

productInstance
    ?ID
    RFID
    product.ID
    Location() : shelf | lastCoordinates

shelf
    ID
    product.ID
    approxCapacit
    coordinates / Area
    Content() : productInstances[]

//"Extrat" / Document only

Kori
    ID
    GetRoute() : Coordinate[]
