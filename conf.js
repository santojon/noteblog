var appConfig = {
    front: {
        styles: ['style'],
        scripts: ['utils'],
        externalStyles: [
            cache.css.bootstrap,
            cache.css.fa
        ],
        externalScripts: [
            cache.js.jquery,
            cache.js.bootstrap
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
            norse.bwf.full,
            norse.bhdr,
            norse.frgg,
            norse.hdllr,
            norse.loki
        ],
        dataPool: 'Bhdr',
        classLoader: 'Bwf',
        pageLoader: 'Frgg',
        securityWatcher: 'Hdllr',
        session: true,
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
}