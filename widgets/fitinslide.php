<?php

return [

    'name' => 'theme-one/fitinslide',

    'label' => 'Bild oder Karte',

    'events' => [

        'view.scripts' => function ($event, $scripts) use($app) {
            $scripts->register('widget-fitinslide', 'packages/seestrasse/seeg-one/app/bundle/widget-fitinslide.js', '~widgets');
            $scripts->register('widget-googlemaps', 'packages/seestrasse/seeg-one/app/bundle/widget-googlemaps.js', '~widgets');
        }

    ],

    'render' => function ($widget) use ($app) {

        return $app['view']->render('widget-fitinslide.php', compact('widget'));
    }

];
