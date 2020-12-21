exports.myip = (request, response) => {
	let ip = (request.headers['x-forwarded-for'] ||
		request.connection.remoteAddress ||
		request.socket.remoteAddress ||
		request.connection.socket.remoteAddress).split(",")[0];

	response.json({
		ipv4: ip
	});
};
