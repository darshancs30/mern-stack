require('dotenv').config();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('./models/User');

async function seedAdmin() {
  await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const email = 'admin@example.com';
  const password = 'admin123';
  const existing = await User.findOne({ email });
  if (existing) {
    console.log('Admin user already exists');
    process.exit();
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  await User.create({ email, password: hashedPassword, role: 'admin' });
  console.log('Admin user created:', email, password);
  process.exit();
}

seedAdmin();
