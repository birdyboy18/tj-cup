module.exports = {
    /**
    * Application configuration section
    * http://pm2.keymetrics.io/docs/usage/application-declaration/
    */
    apps : [
        // Main Application
        {
            name      : 'TJ Cup App',
            script    : 'server.js',
            env: {
                NODE_ENV: "production",
            }
        }
    ]
};
