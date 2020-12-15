function pathFinder(directories, targetFile) {
    //after we find a match, recursive call to beginning gathers path
    //you want to return file dict(target) and the directory (target)
    //or
    //1. return file
    //2. return directory
    // if (Object.prototype.toString.call(directories) !== '[object Object]') return "";
    
    
    for (let key in directories){
        // if (directories[key] === targetFile) return str += `/${key}/${targetFile}`
        if (key === targetFile)  return "/" + targetFile;
        
            
            let currDir = pathFinder(directories[key], targetFile)
            if (currDir !== null) {
                return key + currDir
            }
        // if (Object.prototype.toString.call(directories[key]) === '[object Object]'){
        //     console.log("reached", pathFinder(directories[key, targetFile]))
        //      str += `"${key}"/${pathFinder(directories[key], targetFile)}`
        // }
    }

    return null;
}

let desktop = {
    '/images': {
        'app_academy_logo.svg': null,
        '/parks': {
            'yosemite.jpeg': null,
            'acadia.jpeg': null,
            'yellowstone.png': null
        },
        '/pets': {
            'trixie_lou.jpeg': null,
            'rolo.jpeg': null,
            'opal.jpeg': null,
            'diana.jpeg': null,
        }
    },
    '/music': {
        'hey_programmers.mp3': null,
        '/genres': {
            '/rock': {
                'everlong.flac': null,
                'livin_on_a_prayer.mp3': null
            },
            '/hip_hop': {
                'express_yourself.wav': null,
                'ny_state_of_mind.mp3': null
            }
        }
    }
};
console.log(pathFinder(desktop, 'yosemite.jpeg'))