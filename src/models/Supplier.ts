import mongoose from 'mongoose';

const supplierSchema = new mongoose.Schema({
  name: { type: String, required: true },
  contactInfo: { type: String }
});

const Supplier = mongoose.model('Supplier', supplierSchema);

export default Supplier;
