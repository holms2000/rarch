const {MongoClient} = require('mongodb');
const url = "mongodb+srv://sasha:sas20061030@cluster0.aiqne49.mongodb.net/?retryWrites=true&w=majority";
// создаем объект MongoClient и передаем ему строку подключения
const mongoClient = new MongoClient(url,{ useNewUrlParser: true });
async function run() {
    try {
        // Подключаемся к серверу
        await mongoClient.connect();
        // обращаемся к базе данных admin
        const db = mongoClient.db("admin");
        // выполняем пинг для проверки подключения
        const result = await db.command({ ping: 1 });
        console.log("Подключение с сервером успешно установлено");
        console.log(result);
    }
    catch(err) {
        console.log("Возникла ошибка");
        console.log(err);
    } 
    finally {
        // Закрываем подключение при завершении работы или при ошибке
        await mongoClient.close();
        console.log("Подключение закрыто");
    }
}
run();