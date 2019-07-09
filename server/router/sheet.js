const router = require("express").Router();
const db = require("./dbfuntions")

router.get("/", async (req, res) => {
    try {
        const cSheet = await db.findExample()
        const message = "The charater sheets were found in the database.";
        res.status(200).json({ message, cSheet });
    } catch (error) {
        res.status(500).json({
        message:
            "Sorry but something went wrong while retrieving the list of charater sheets"
        });

        throw new Error(error);
    }
    });

module.exports = router;