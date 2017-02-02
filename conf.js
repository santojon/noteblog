var appConfig = {
    front: {},
    back: {
        views: ['home', 'user', 'note', 'blog'],
        bridges: ['myjson'],
        services: ['user', 'login', 'note', 'blog', 'myjsonbridge'],
        controllers: ['home', 'user', 'note', 'blog']
    },
    conf: {
        appName: 'noteblog',
        dependencies: [
            // Your needed libs locations
        ],
        bootstrap: false
    }
};