const { Product } = require("../models");

async function index(req, res) {
  try {
    const products = (await Product.findAll({include: "brand"}));
    return res.status(200).json(products);
  } catch (err) {
    console.error(err);
    return res.json({ error: err });
  }
}

async function show(req, res) {
  try {
    const productId = req.params.id;
    const product = await Product.findOne({ where: { id: productId }, include: "brand"});
    return res.status(200).json(product);
  } catch (err) {
    console.error(err);
  }
}

async function store(req, res) {
  const { model, description, image, imageProduct, photos, price, stock, year, power, brandId } = req.body;
  try {
    const product = await Product.create({
      model,
      description,
      image,
      imageProduct,
      photos,
      featured: false,
      price,
      stock,
      year,
      power,
      brandId,
    });
    return res.status(200).json(product);
  } catch (err) {
    console.error(err);
  }
}
async function update(req, res) {
  const { model, description, image, imageProduct, photos, price, featured, stock, year, power, brandId } = req.body;
  try {
    const product = Product.update(
      { model, description, image, imageProduct, photos, price, featured, stock, year, power, brandId },
      { where: { id:req.params.id } },
    );
    return res.status(200).json(product);
  } catch (err) {
    console.error(err);
  }
}
async function destroy(req, res) {
  try {
    const product = Product.destroy({ where: { id: req.params.id } });
    return res.status(200).json(product);
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  index,
  show,
  store,
  update,
  destroy,
};
