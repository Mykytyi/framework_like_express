module.exports = (batheUrl) => (req, res) => {
	const parsedUrl = new URL(req.url, batheUrl);
	console.log('parsedUrl: ', parsedUrl);
}
