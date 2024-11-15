const { Order } = require("../models");

// Display a listing of the resource.
async function index(req, res) {
  try {
    
  } catch (err) {
   
  }
}

// Display the specified resource.
async function show(req, res) {
  try {
    
  } catch (err) {
    
  }
}

// Store a newly created resource in storage.
async function store(req, res) {
 const {address, cart, nanoId} = req.body;
 try {
    const order = await Order.create({
      address,
      productList: cart,
      userId: req.auth.sub,
      nanoId,
      status: "Pending",
    })
    return res.status(200).json(order);
  } catch (err) {
    console.error(err)
  }
  
}

// Update the specified resource in storage.
async function update(req, res) {}

// Remove the specified resource from storage.
async function destroy(req, res) {}

// Otros handlers...
// ...

module.exports = {
  index,
  show,
  store,
  update,
  destroy,
};
