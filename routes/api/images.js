const express = require("express");
const router = express.Router();
const passport = require("passport");

const Image = require("../../models/Image");
const upload = require("./image_upload_aws");
const singleUpload = upload.single("image");

// test
router.get("/test", (req, res) => {
  res.json({ msg: "This is the image route" });
});

router.get("/", (req, res) => {
  Image.find()
    .sort({ date: "asc" })
    .then((images) => {
      let payload = {};
      images.map((image) => (payload[image._id] = image));
      return res.json(payload);
    })
    .catch((err) => res.status(400).json(err));
});

router.post("/uploadImage", (req, res) => {
  singleUpload(req, res, function (err) {
    if (err) {
      return res.status(422).json({ errors: err.message });
    }
    return res.json({
      imageUrl: req.file.location,
      fileName: req.file.originalname,
    });
  });
});

module.exports = router;
