<?php

return [

    'name' => 'theme-one/contentbox',

    'label' => 'Inhalt Boxen',

    'events' => [

        'view.scripts' => function ($event, $scripts) use($app) {
            $scripts->register('widget-contentbox', 'packages/seestrasse/seeg-one/app/bundle/widget-contentbox.js', '~widgets');
        }

    ],

    'render' => function ($widget) use ($app) {

        return $app['view']->render('widget-contentbox.php', compact('widget'));
    }

];
