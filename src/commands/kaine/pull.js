
const config = require('../../config.json');

module.exports = {
    name: 'pull',
    aliases: ["gitpull"],

    run: (_, message, args) => {




        const { exec } = require("child_process");
        let cmd = "nah"


        if(config.os = "Windows") cmd = "dir"
        else if(config.os = "Linux") cmd = "ls"


        exec(cmd, (error, stdout, stderr) => {
            if (error) {
                console.log(`error: ${error.message}`);
                return;
            }
            if (stderr) {
                console.log(`stderr: ${stderr}`);
                return;
            }
            console.log(`stdout: ${stdout}`);
        });




    }
}