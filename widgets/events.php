<?php

return [

    'name' => 'theme-one/events',

    'label' => 'Events',

    'events' => [

        'view.scripts' => function ($event, $scripts) use($app) {
            $scripts->register('widget-events-server', 'packages/seestrasse/seeg-one/app/bundle/widget-events-server.js', '~widgets');
            $scripts->register('widget-events', 'packages/seestrasse/seeg-one/app/bundle/widget-events.js', '~widgets');
        }

    ],

    'render' => function ($widget) use ($app) {

        return $app['view']->render('widget-events.php', compact('widget'));
    }

];
