import express from "express";
import Product from "../schema/product.model.js";

const router = express.Router();

// ➕ Create
router.post("/", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// 📃 Read all
router.get("/", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

// 📃 Read one
router.get("/:id", async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) return res.status(404).json({ error: "Not found" });
  res.json(product);
});

// ✏️ Update
router.put("/:id", async (req, res) => {
  const updated = await Product.d(req.params.id, req.body, { new: true });
  res.json(updated);
});

// ❌ Delete
router.delete("/:id", async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});

export default router;
