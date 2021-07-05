async function preInit(inputObj) {

}

async function postInit(inputObj) {
    console.log(`\n     ____  _     _ ___  _ _     _        _____ ____ 
    /  _ \\/ \\   / \\\\  \\/// \\ /\\/ \\  /|  /    //   _\\
    | / \\|| |   | | \\  / | | ||| |\\ ||  |  __\\|  /  
    | |-||| |_/\\| | / /  | \\_/|| | \\||  | |   |  \\__
    \\_/ \\|\\____/\\_//_/   \\____/\\_/  \\|  \\_/   \\____/
                                                
                                        `)
    console.log(`\n    Welcome to the Aliyun FC start application
     This application requires to open these services: 
         FC : https://fc.console.aliyun.com/
     This application can help you quickly deploy the aliyun fc project.
     The application uses FC component：
        * Help Docs  : https://github.com/devsapp/fc
        * Yaml Config: https://github.com/devsapp/fc/blob/main/docs/Others/yaml.md
     The application homepage: https://github.com/devsapp/start-fc
     
     Step:
        * Open Alibaba Cloud ACR service, and fill the 'registry/image:tags' to the image in s.yaml
        * Run 's deploy --push-registry acr-internet --use-local -y'
            > The system will automatically help you to build image, push image, and deploy
     \n`)
}

module.exports = {
    postInit,
    preInit
}