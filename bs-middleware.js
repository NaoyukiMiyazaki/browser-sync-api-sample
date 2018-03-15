module.exports = [{
    route: '/api',
    handle: (req, res) => {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({
            status: 200,
            text: 'hi'
        }));
    }
}];