const app = require('./src/configs/express');
const users = require('./src/routes/users');
const world = require('./src/routes/world');
const works = require('./src/routes/works');
const fitness = require('./src/routes/fitness');
const tiktok = require('./src/routes/tiktok');

app.use('/api/users', users);
app.use('/api/world', world);
app.use('/api/works', works);
app.use('/api/fitness', fitness);
app.use('/api/tiktok', tiktok);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});