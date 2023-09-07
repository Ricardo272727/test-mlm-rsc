import express from "express";
import _ from "lodash";

const app = express();
const port = 5400;

const findCategories = (result) => {
  const filter = _.get(result, "filters").find(
    (filter) => filter.id === "category"
  );
  return _.get(filter, "values[0].path_from_root", []).map((category) =>
    _.get(category, "name")
  );
};
const findItems = (result) => {
  return _.get(result, "results", [])
    .slice(0, 4)
    .map((item) => ({
      id: _.get(item, "id"),
      title: _.get(item, "title"),
      price: {
        currency: _.get(item, "currency_id"),
        amount: _.get(item, "price"),
        decimals: null,
      },
      author: {
        name: _.get(item, "seller.nickname"),
        lastname: _.get(item, "seller.nickname"),
      },
      picture: _.get(item, "thumbnail"),
      condition: _.get(item, "condition"),
      free_shipping: _.get(item, "shipping.free_shipping"),
    }));
};

app.get("/api/items", (req, res) => {
  const query = req.query.q;

  return fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${query}`)
    .then((result) => result.json())
    .then((result) =>
      res.send({
        categories: findCategories(result),
        items: findItems(result),
      })
    )
    .catch((err) => {
      console.log({ err });
      return res.send({ error: "Cannot get data from api" });
    });
});

const fetchItem = async (id) => {
  try {
    const response = await fetch(`https://api.mercadolibre.com/items/${id}`);
    return await response.json();
  } catch (error) {
    console.log({ error });
  }
  return {};
};

const fetchItemDescription = async (id) => {
  try {
    const response = await fetch(
      `https://api.mercadolibre.com/items/${id}/description`
    );
    return await response.json();
  } catch (error) {
    console.log({ error });
  }
  return {};
};

app.get("/api/items/:id", async (req, res) => {
  const id = req.params.id;
  const item = await fetchItem(id);
  const itemDescription = await fetchItemDescription(id);

  return res.send({
    author: {},
    item: {
        id: _.get(item, 'id'),
        title: _.get(item, 'title'),
        price: {
            currency: _.get(item, 'currency_id'),
            amount: _.get(item, 'price'),
            decimals: null,
        },
        picture: _.get(item, 'secure_thumbnail'),
        condition: _.get(item, 'condition'),
        free_shipping: _.get(item, 'shipping.free_shipping'),
        sold_quantity: _.get(item, 'sold_quantity'),
        description: _.get(itemDescription, 'text')
    },
  });
});

app.listen(port, () => {
  console.info(`Express server listening on port ${port}`);
});
