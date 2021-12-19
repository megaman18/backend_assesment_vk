const express = require('express');
// const db = require("../social/database/db");
const bodyParser = require('body-parser')

// const { initConsumer } = require('./utilities/consumer');
const { initProducer } = require('./utilities/producer');
// const { connectConsumer } = require('./utilities/consumer');
// const { connectProducer, connectAdmin } = require('./utilities/producer');
// const KeyMaster = require('./utilities/KeyMaster');
// const databaseConfig = require('./database/DatabaseConfig');
const routes = require('./index.route')

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.use(databaseConfig.initializeDB());
app.use('/api', routes)

app.use('/', async (req, res) => {
    // const command = await db('tenant').select()
    // console.log(command)
    // return res.status(200).json({
    //     command
    // });
	res.status(200).json({ message: `App is running on port. ${process.env.PORT || 4000}` });

});

app.listen(process.env.PORT || 4000, async () => {
	
	console.log('App started at port', process.env.PORT || 4000);
	await initProducer();

});