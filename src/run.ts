const app = require("./app/app");

// start http server.
app.listen(app.get("port"), () => {
	console.log("[*] - App is running at http://%s:%s", app.get("host"), app.get("port"));
});
