const express = require("express");
const router = express.Router();
// const passport = require("passport");
const Photo = require("../../models/Photo");
const upload = require("./photo_upload_aws");
const singleUpload = upload.single("photo");

// test
router.get("/test", (req, res) => {
  res.json({ msg: "This is the photo route" });
});

router.get("/", (req, res) => {
  Photo.find()
    .sort({ date: "asc" })
    .then((photos) => {
      let payload = {};
      photos.map((photo) => (payload[photo._id] = photo));
      return res.json(payload);
    })
    .catch((err) => res.status(400).json(err));
});

router.get("/posts/:post_id", (req, res) => {
  Photo.find({ postId: req.params.post_id })
    .then((photos) => res.json(photos))
    .catch((err) => res.status(400).json(err));
});

// upload photo here
router.post("/uploadPhoto", (req, res) => {
  console.log(req.body)
  singleUpload(req, res, function (err) {
    if (err) {
      console.log(err.field);
      return res.status(422).json({ errors: err });
    }
    // const newPhoto = new Photo({
    //   postId: req.body.data.postId,
    //   fileName: req.body.data.fileName,
    //   src: req.body.data.photoUrl,
    // });
    return res.json({
      photoUrl: req.file.location,
      postId: req.body.postId,
      fileName: req.file.originalname,
    });
  });
});

router.post("/uploadPhotoDB", (req, res) => {
  const newPhoto = new Photo({
    postId: req.body.data.postId,
    fileName: req.body.data.fileName,
    src: req.body.data.photoUrl,
  });
  newPhoto.save().then((photo) => res.json(photo));
});

module.exports = router;
