API End Points
X not working yet (or ever)

Route                       Type    Description

/Epc/GetAll                 GET     Get all data in history
/Epc/GetById/:id            GET     Get a single datapoint by ID
/Epc/GetByEpc/:epc          GET     Get location history of specified tag
/Epc/GetByEpc/:epc/:amount  GET     Get :amount latest locations of :epc
X /Epc                      POST    Add new tag to system

/Item/GetAll                GET     Get all tags with the latest location data
X /Item/GetById/:id       
X /Item/GetByEpc/:epc

X /products                 GET     Get all products in an array
X /products                 POST    Add new product

X /shelf                    GET     Get all shelves in an array
X /shelf                    POST    Add new shelf

X /shelf/:id                GET     Get shelf info, including products[]
X /shelf/:id/products       POST    Add new product to shelf

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
