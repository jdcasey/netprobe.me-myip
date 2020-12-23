exports.myip = (req, res) => {
	res.set('Access-Control-Allow-Origin', "*");
  res.set('Access-Control-Allow-Methods', 'GET');

	let ip = (req.headers['x-forwarded-for'] ||
		req.connection.remoteAddress ||
		req.socket.remoteAddress ||
		req.connection.socket.remoteAddress).split(",")[0];

	res.json({
		ipv4: ip
	});
};
