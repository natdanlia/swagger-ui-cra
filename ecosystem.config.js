module.exports = {
  apps : [{
    name: 'app_prod_build',
    script: 'npm',

    // Options reference: https://pm2.keymetrics.io/docs/usage/application-declaration/
    args: 'run start:production',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }],

  deploy : {
    // production : {
    //   user : 'node',
    //   host : '212.83.163.1',
    //   ref  : 'origin/master',
    //   repo : 'git@github.com:repo.git',
    //   path : '/var/www/production',
    //   'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production'
    // }
    staging : {
      user : 'node',
      host : 'localhost',
      ref  : 'origin/master',
      repo : 'git@github.com:natdanlia/swagger-ui-cra.git',
      path : '/Users/nathangezahegne/Documents/OPADOL/swagger-ui-cra',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production'
    },
    production: {

    }
  }
};
