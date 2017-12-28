module.exports = {
    auth0: {
        clientId: process.env.CLIENT_ID,
        domain: process.env.DOMAIN || 'etech-dev.eu.auth0.com',
        clientSecret: process.env.CLIENT_SECRET,
        connection: process.env.CONNECTION
    },
    auth0Client: {
        clientId: process.env.USER_AUTH_CLIENTID || 'peJql8GAWQbo2NlZaxTzEp3XoYQKKag5'
    }
}