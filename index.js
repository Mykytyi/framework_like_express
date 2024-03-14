const dotenv = require('dotenv');
const Application = require('./framework/Application');
const UserRouter = require('./routers/user-router');
const jsonParser = require('./middlewares/parseJson');
const urlParser = require('./middlewares/parseUrl');

dotenv.config();

const PORT = process.env.PORT;

const app = new Application();

app.use(urlParser(`http://localhost:${PORT}`));
app.use(jsonParser);

app.addRouter(UserRouter);

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
