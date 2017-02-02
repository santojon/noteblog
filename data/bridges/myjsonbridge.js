with (Sgfd.Base) {
    var MyjsonBridge = new Sgfd.Bridge({
        metaName: 'MyjsonBridge',
        type: 'json',
        base: 'https://api.myjson.com/bins',
        paths: {
            //all: 'UID',
        },
        bridgeTo: (to) => {
            with (MyjsonBridge) {
                return base + '/' + paths[to]
            }
        }
    })
}