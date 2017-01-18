module.exports = [

    {
        entry: {
            "node-theme": "./app/components/node-theme.vue",
            "site-theme": "./app/components/site-theme.vue",
            "widget-theme": "./app/components/widget-theme.vue",
            "widget-contentbox": "./app/components/widget-contentbox.vue",
            "widget-downloader": "./app/components/widget-downloader.vue",
            "widget-events": "./app/components/widget-events.vue",
            "widget-events-server": "./app/components/widget-events-server.vue",
            "widget-fitinslide": "./app/components/widget-fitinslide.vue",
            "widget-googlemaps": "./app/components/widget-googlemaps.vue",
            "widget-portrait": "./app/components/widget-portrait.vue",
            "widget-slider": "./app/components/widget-slider.vue"
        },
        output: {
            filename: "./app/bundle/[name].js"
        },
        module: {
            loaders: [
                { test: /\.vue$/, loader: "vue" }
            ]
        }
    }

];
