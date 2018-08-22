'use strict';
import graphqlHTTP from 'express-graphql';
import dotenv from 'dotenv';
import app from './src';
import schema from './src/graphql/Schema';
import cors from 'cors';

dotenv.config();

process.on('unhandledRejection', error => {
	// Will print "unhandledRejection err is not defined"
	console.log('unhandledRejection', error.message);
});

app.use('/graphql', cors(), graphqlHTTP(req => ({
	schema,
	graphiql: process.env.MODE == 'development'
})))

var port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log('Node.js listening on port ' + port);
});
