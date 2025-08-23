const user = process.env.DB_USER
const password = process.env.DB_PASSWORD

export default {
    port: 3000,
    dbUri: `mongodb+srv://${user}:${password}@cluster0.tpt1c0v.mongodb.net/anhanga_database?retryWrites=true&w=majority&appName=Cluster0`,
    env: "development"
}