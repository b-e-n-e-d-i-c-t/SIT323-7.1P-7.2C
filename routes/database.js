const express = require('express')
const router = express.Router()
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId;
const uri = 'mongodb://admin:password@mongo-svc:27017/?authMechanism=DEFAULT'

router.get('/collection', async (req, res) => {
    try {
      const client = await MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
      const collection = client.db('documents').collection('cDocuments');
      const documents = await collection.find().toArray();
      client.close();
      res.send(documents);
    } catch (err) {
      console.log('ERROR!', err);
      res.status(500).send(err.message);
    }
  });

router.post('/collection', async (req, res) => {

    if (!req.body.title || !req.body.description) {
        return res.status(400).send({ message: 'Missing required fields' });
    }
    if (!req.body.name) {
        return res.status(400).send({ message: 'Missing required field: name' });
    }
    try {
      const client = await MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
      const collection = client.db('documents').collection('cDocuments');
      const result = await collection.insertOne(req.body);
      
      client.close();
      if (result.acknowledged == false){
        throw err;
      }
      res.status(201).send(req.body);
    } catch (err) {
      console.log('ERROR!', err);
      res.status(500).send({ message: err.message });
    }
  });

router.delete('/collection/:id', async (req, res) => {
    try {
      const client = await MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
      const collection = client.db('documents').collection('cDocuments');
      const result = await collection.findOneAndDelete({ _id: new ObjectId(req.params.id) });
      client.close();
      if (!result.value) {
        return res.status(404).send({ message: 'Document not found' });
      }
      res.send(result.value);
    } catch (err) {
      console.log('ERROR!', err);
      res.status(500).send({ message: err.message });
    }
  });

router.put('/collection/:id', async (req, res) => {
    try {
      const client = await MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
      const collection = client.db('documents').collection('cDocuments');
      const filter = { _id: new ObjectId(req.params.id) };
      const updateDoc = { $set: req.body };
      const options = { returnOriginal: false };
      const result = await collection.findOneAndUpdate(filter, updateDoc, options);
      client.close();
      if (!result.value) {
        return res.status(404).send({ message: 'Document not found' });
      }
      res.send(result.value);
    } catch (err) {
      console.log('ERROR!', err);
      res.status(500).send({ message: err.message });
    }
  });

  module.exports = router