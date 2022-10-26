module.exports = {
    apps : [{
      name: 'LearnUp Indonesia',
      script: 'node_modules/.bin/next',
      args:'start',
      cwd:"/home/learnupindonesia.com/public_html/web/.next/server/pages/",
      instances: 3,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
          NODE_ENV: "production",
          PORT: 5000
      },
    }]
  };