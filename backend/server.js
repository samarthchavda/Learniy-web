const port = 8080;
const express = require("express");
const app = express();

const bcrypt = require("bcrypt");
const cors = require("cors");
const { mongoose } = require("mongoose");

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/LearningWeb")
    .then(() => console.log("DataBase connected"))
    .catch((err) => console.log("error", err));

const userSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String
});

const userModel = mongoose.model("signupData", userSchema);


app.get("/api/users/add", async (req, res) => {
    const userData = await userModel.find();
    res.json(userData);
});

app.post("/api/users/add", async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.json({ status: false, message: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new userModel({ name, email, password: hashedPassword });

        await newUser.save();
        res.json({ status: true, message: "New user added" });

    } catch (err) {
        console.error(err);
        res.status(500).json({ status: false, message: "Server error" });
    }
});

app.post("/api/users/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await userModel.findOne({ email });

        if (!user) {
            return res.json({
                status: false,
                message: "User not found"
            });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.json({
                status: false,
                message: "Invalid email or password"
            });
        }

        return res.json({ status: true, message: "Login successful" });

    } catch (error) {
        console.error(error);
        res.status(500).json({ status: false, message: "Internal server error" });
    }
});


const contactSchema = mongoose.Schema({
    name: String,
    email: String,
    message: String
})

const contactModel = mongoose.model("contactdata", contactSchema)

app.post("/api/users/contact", async (req, res) => {
    const { name, email, message } = req.body;
    const newdata = contactModel({ name, email, message });
    await newdata.save();
    res.json({ status: true, message: "New user added" });


})

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});
