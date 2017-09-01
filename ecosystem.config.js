module.exports = {
  apps: [{
    name: 'NSPwebPM',
    script: './index.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-18-194-36-77.eu-central-1.compute.amazonaws.com',
      key: '~/.ssh/nikolajslot.pem',
      ref: 'origin/master',
      repo: 'git@github.com:nikolajspetersen/website.git',
      path: '/home/ubuntu/server',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}
