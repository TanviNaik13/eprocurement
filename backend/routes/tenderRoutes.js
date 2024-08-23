const express = require("express");
const router = express.Router();

const verifyJWT = require("../middleware/jwtAuth");  // Assuming JWT middleware is required
const tenderController = require("../controllers/tenderController.js");

router.get("/", tenderController.getAllTenders);
router.get("/location/:location", tenderController.searchByLocation);
router.get("/organisation/:organisation",tenderController.searchByOrganisation);
router.get("/classification/:classification",tenderController.searchByClassification);
router.get("/name/:name",tenderController.searchByName);
router.get("/archive/:tenderId",tenderController.searchById);
router.get("/status/:status",tenderController.searchByStatus);
router.get("/current/:filter",tenderController.searchByCancelStatus);
router.get("/latest", tenderController.getLatestTender);

router.post("/create",tenderController.createTender);

module.exports = router;