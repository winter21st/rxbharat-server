module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
        host: env('DATABASE_HOST', '@alpha.g0fsc.mongodb.net/'),
        port: env.int('DATABASE_PORT', 27017),
        database: env('DATABASE_NAME', 'server'),
        username: env('DATABASE_USERNAME', 'myrxbharat'),
        password: env('DATABASE_PASSWORD', '0HUzwuNGZCkS7w2S'),
        ssl: env.bool('DATABASE_SRV', true),
      },
      options: {
        authenticationDatabase: env("AUTHENTICATION_DATABASE", null),
        ssl: env.bool("DATABASE_SSL", true),
      }
    },
  },
});
