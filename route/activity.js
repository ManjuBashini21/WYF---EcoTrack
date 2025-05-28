const multer = require('multer');
const Activity = require('./models/Activity');

const storage = multer.diskStorage({
  destination: './uploads/',
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname),
});
const upload = multer({ storage });

app.post('/submit-activity', upload.single('image'), async (req, res) => {
  const { theme, activityName, description, latitude, longitude } = req.body;

  const activity = new Activity({
    userId: req.user.id,
    theme,
    activityName,
    description,
    imageUrl: `/uploads/${req.file.filename}`,
    geo: { latitude, longitude },
  });

  await activity.save();
  res.send("Activity Submitted");
});

app.post('/login', async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user || !await bcrypt.compare(req.body.password, user.password))
    return res.status(401).send("Invalid credentials");

  const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET);
  res.json({ token });
});


app.get('/user/dashboard', async (req, res) => {
  const activities = await Activity.find({ userId: req.user.id });
  const themeData = activities.reduce((acc, act) => {
    acc[act.theme] = (acc[act.theme] || 0) + 1;
    return acc;
  }, {});
  res.render('dashboard', { themeData });
});

app.get('/admin/dashboard', async (req, res) => {
  const activities = await Activity.find({});
  res.render('admin-dashboard', { activities });
});

