const grpc = require('grpc');

/*
* You'll import the keugsapis-grpcjs
* i showed you here and require the service you are
*/
const {RatingServiceService} = require('keugsapis-grpcjs');

const RatingService = require('./services/RatingService');

const server = new grpc.Server();

server.addService(RatingServiceService, new RatingService());

server.bind('0.0.0.0:50059', grpc.ServerCredentials.createInsecure());
server.start();