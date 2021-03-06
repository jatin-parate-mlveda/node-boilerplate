exports.serverPort = parseInt(process.env.SERVER_PORT || 3000, 10);
exports.websocketPort = parseInt(process.env.WEBSOCKET_PORT || 3001, 10);

exports.dbUrl = process.env.DB_URL;
