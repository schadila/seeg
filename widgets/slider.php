<?php

return [

    'name' => 'theme-one/slider',

    'label' => 'News',

    'events' => [

        'view.scripts' => function ($event, $scripts) use($app) {
            $scripts->register('widget-slider', 'packages/seestrasse/seeg-one/app/bundle/widget-slider.js', '~widgets');
        }

    ],

    'render' => function ($widget) use ($app) {

        return $app['view']->render('widget-slider.php', compact('widget'));
    }

];
