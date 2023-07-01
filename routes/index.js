const blogRoutes = require("./routes");

const constructorMethod = (app) => {
    app.use("/", blogRoutes);

    app.use("*", (req, res) => {
        res.status(404).json({ error: "Not found" });
    });
};

module.exports = constructorMethod;
