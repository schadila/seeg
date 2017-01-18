<?php

return [

    'name' => 'theme-one/downloader',

    'label' => 'Datei Downloader',

    'events' => [

        'view.scripts' => function ($event, $scripts) use($app) {
            $scripts->register('widget-downloader', 'packages/seestrasse/seeg-one/app/bundle/widget-downloader.js', '~widgets');
            //$scripts->register('widget-events-server', 'packages/pagekit/theme-one/app/bundle/widget-events-server.js', '~widgets');
        }

    ],

    'render' => function ($widget) use ($app) {

        return $app['view']->render('widget-downloader.php', compact('widget'));
    }

];
