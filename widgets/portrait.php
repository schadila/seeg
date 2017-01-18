<?php

return [

    'name' => 'theme-one/portrait',

    'label' => 'Portrait Bild',

    'events' => [

        'view.scripts' => function ($event, $scripts) use($app) {
            $scripts->register('widget-portrait', 'packages/seestrasse/seeg-one/app/bundle/widget-portrait.js', '~widgets');
        }

    ],

    'render' => function ($widget) use ($app) {

        return $app['view']->render('widget-portrait.php', compact('widget'));
    }

];
