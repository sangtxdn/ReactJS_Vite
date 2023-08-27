module.exports = {
  apps: [
    {
      name: 'app_name',
      script: 'serve',
      exec_mode: 'cluster',
      instances: 4,
      env: {
        PM2_SERVE_PATH: './dist',
        PM2_SERVE_PORT: 8081,
      },
    },
  ],
};
