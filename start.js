const { exec } = require('child_process');
exec('http-server ./dist -p 80',(err, stdout, stderr) =>{
    console.log(err)
    console.log(stdout)
    console.log(stderr)
})