const { Brand } = require("../models");

async function index(req, res) {
  try {
    const brands = await Brand.findAll();
    return res.status(200).json(brands);
  } catch (err) {
    console.error(err);
    return res.json({ error: err });
  }
}

async function show(req, res) {
  try {
    const brandId = req.params.id;
    const brand = await Brand.findOne({ where: { id: brandId }});
    return res.status(200).json(brand);
  } catch (err) {
    console.error(err);
  }
}

async function store(req, res) {
  const { name } = req.body;
  try {
    const brand = await Brand.create({
      name
    });
    return res.status(200).json(brand);
  } catch (err) {
    console.error(err);
  }
}
async function update(req, res) {
  const { name } = req.body;
  try {
    const brand = Brand.update(
      { name },
      { where: { id: req.params.id } },
    );
    return res.status(200).json(brand);
  } catch (err) {
    console.error(err);
  }
}
async function destroy(req, res) {
  try {
    const brand = Brand.destroy({ where: { id: req.params.id } });
    return res.status(200).json(brand);
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
