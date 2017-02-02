var appConfig = {
    front: {
        styles: ['style'],
        scripts: ['utils'],
        externalStyles: [
            'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css',
            'https://netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css'
        ],
        externalScripts: [
            'https://code.jquery.com/jquery-2.2.3.min.js',
            'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js',
            'https://use.fontawesome.com/670555b458.js'
        ]
    },
    back: {
        views: ['home', 'user', 'note', 'blog', 'login'],
        bridges: ['myjson'],
        bwfDomains: ['user'],
        services: ['user', 'login', 'note', 'blog', 'myjsonbridge'],
        controllers: ['home', 'user', 'login', 'note', 'blog']
    },
    conf: {
        appName: 'noteblog',
        language: navigator.language || 'pt-BR',
        dependencies: [
            norse.bwf + '/bwf.full.js',
            norse.bhdr + '/bhdr.js',
            norse.frgg + '/frgg.js'
        ],
        dataPool: 'Bhdr',
        classLoader: 'Bwf',
        pagesLoader: 'Frgg',
        bwfDomain: true,
        bootstrap: true,
        debug: {
            controllers: true,
            services: true,
            bridges: true
        },
        transactional: {
            controllers: false,
            services: true,
            bridges: false
        },
        production: false
    }
};