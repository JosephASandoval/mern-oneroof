const express = require("express");
const router = express.Router();
// const passport = require("passport");
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

router.get("/posts/:post_id", (req, res) => {
  Image.find({ postId: req.params.post_id })
    .then((images) => res.json(images))
    .catch((err) => res.status(400).json(err));
});

// upload image here
router.post("/uploadImage", (req, res) => {
  console.log(req.body);
  singleUpload(req, res, function (err) {
    if (err) {
      console.log(err.field);
      return res.status(422).json({ errors: err });
    }
    // const newImage = new Image({
    //   postId: req.body.data.postId,
    //   fileName: req.body.data.fileName,
    //   src: req.body.data.imageUrl,
    // });
    return res.json({
      imageUrl: req.file.location,
      fileName: req.file.originalname,
    });
  });
});

router.post("/uploadImageDB", (req, res) => {
  const newImage = new Image({
    postId: req.body.data.postId,
    fileName: req.body.data.fileName,
    src: req.body.data.imageUrl,
  });
  newImage.save().then((image) => res.json(image));
});

module.exports = router;
