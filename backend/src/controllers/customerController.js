const Customer = require("../models/Customer");

const createCustomer = async (req, res) => {
  try {
    const { businessId, name, phone, email, tags, notes } = req.body;

    if (!businessId || !name || !phone) {
      return res.status(400).json({
        message: "businessId, name and phone are required",
      });
    }

    const customer = await Customer.create({
      businessId,
      name,
      phone,
      email,
      tags,
      notes,
    });

    res.status(201).json({
      message: "Customer created successfully",
      customer,
    });
  } catch (error) {
    res.status(500).json({
      message: "Customer creation failed",
      error: error.message,
    });
  }
};

const getCustomers = async (req, res) => {
  try {
    const customers = await Customer.find().sort({ createdAt: -1 });

    res.json({
      message: "Customers fetched successfully",
      count: customers.length,
      customers,
    });
  } catch (error) {
    res.status(500).json({
      message: "Fetching customers failed",
      error: error.message,
    });
  }
};


module.exports = { createCustomer, getCustomers };