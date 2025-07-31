const Agent = require('../models/Agent');
const ListItem = require('../models/ListItem');
const csv = require('csv-parse');
const fs = require('fs');

exports.uploadList = async (req, res) => {
  if (!req.file) return res.status(400).json({ message: 'No file uploaded' });
  const ext = req.file.originalname.split('.').pop();
  if (!['csv', 'xlsx', 'xls'].includes(ext)) {
    fs.unlinkSync(req.file.path);
    return res.status(400).json({ message: 'Invalid file type' });
  }
  const agents = await Agent.find();
  if (agents.length < 1) return res.status(400).json({ message: 'No agents found' });
  const items = [];
  const parser = fs.createReadStream(req.file.path).pipe(csv({ columns: true }));
  for await (const record of parser) {
    if (!record.FirstName || !record.Phone) continue;
    items.push({ firstName: record.FirstName, phone: record.Phone, notes: record.Notes || '' });
  }
  fs.unlinkSync(req.file.path);
  // Distribute items
  const perAgent = Math.floor(items.length / agents.length);
  let idx = 0;
  for (let i = 0; i < agents.length; i++) {
    const count = i < items.length % agents.length ? perAgent + 1 : perAgent;
    for (let j = 0; j < count; j++) {
      if (idx >= items.length) break;
      await ListItem.create({ ...items[idx], agent: agents[i]._id });
      idx++;
    }
  }
  res.json({ message: 'List uploaded and distributed' });
};

exports.getAgentLists = async (req, res) => {
  try {
    const items = await ListItem.find({ agent: req.params.agentId });
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};
