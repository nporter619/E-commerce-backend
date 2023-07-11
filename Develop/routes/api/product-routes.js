router.get('/', (req, res) => {
  Product.findAll({
    include: [Category, {
      model: Tag,
      through: ProductTag,
    }],
  })
    .then((products) => res.json(products))
    .catch((err) => res.status(500).json(err));
});

router.get('/:id', (req, res) => {
  Product.findOne({
    where: {
      id: req.params.id,
    },
    include: [Category, {
      model: Tag,
      through: ProductTag,
    }],
  })
    .then((product) => res.json(product))
    .catch((err) => res.status(500).json(err));
});

router.delete('/:id', (req, res) => {
  Product.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((product) => res.json(product))
    .catch((err) => res.status(500).json(err));
});
