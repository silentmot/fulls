// data imports
import User from "./models/User.js";
import Product from "./models/Product.js";
import ProductStat from "./models/ProductStat.js";
import Transaction from "./models/Transaction.js";
import OverallStat from "./models/OverallStat.js";
import AffiliateStat from "./models/AffiliateStat.js";
import { dataUser, dataProduct, dataProductStat, dataTransaction, dataOverallStat, dataAffiliateStat, } from "./data/index.js";

/* ONLY ADD DATA ONE TIME */
// AffiliateStat.insertMany(dataAffiliateStat);
// OverallStat.insertMany(dataOverallStat);
// Product.insertMany(dataProduct);
// ProductStat.insertMany(dataProductStat);
// Transaction.insertMany(dataTransaction);
// User.insertMany(dataUser);
