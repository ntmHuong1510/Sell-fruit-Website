const product = require("../services/product.service");
const commonUtils = require("../utils/common.util");

async function getProductList(req, res, next) {
  const { currentPage, limit, cateId, sortKey, sortType } = req?.query;
  try {
    const listProduct = await product.getProductList(
      limit,
      currentPage,
      cateId,
      sortKey,
      sortType,
    );
    res.status(200).json(
      commonUtils.formatResponse("Get success!", 200, {
        ...listProduct,
      }),
    );
  } catch (err) {
    console.error(`Error while get`, err.message);
    next(err);
  }
}

async function searchProduct(req, res, next) {
  const { currentPage, limit, searchText, sortKey, sortType } = req?.query;
  try {
    const listProduct = await product.searchProduct(
      limit,
      currentPage,
      searchText,
      sortKey,
      sortType,
    );
    res.status(200).json(
      commonUtils.formatResponse("Get success!", 200, {
        ...listProduct,
      }),
    );
  } catch (err) {
    console.error(`Error while get`, err.message);
    next(err);
  }
}

module.exports = {
  getProductList,
  searchProduct,
};
