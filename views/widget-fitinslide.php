<?php

  $parallax = ($app['content']->applyPlugins($widget->get('parallax')));
  $parallax_betrag = ($app['content']->applyPlugins($widget->get('parallaxBetrag')));

 ?>
<div id="<?= $app['content']->applyPlugins($widget->get('class')); ?>" class="tm-top uk-block uk-block-muted uk-cover-background uk-cover-background-head" <?= $app['content'] ? "style=\"background-image: url('{$view->url($widget->get('bg_image'))}'); height: {$widget->get('fixheight')};\"" : '' ?>

  <?php

   if ($app['content']->applyPlugins($widget->get('parallax') == true)){
      echo "data-uk-parallax='";
      echo '{media: 0, bg:"';
      echo $parallax_betrag;
      echo '"}';
      echo "'";
    }


    echo '>';
  ?>
    <div class="uk-container uk-container-center">
          <article class="uk-article uk-text-center uk-contrast">
              <?= $app['content']->applyPlugins($widget->get('content'), ['widget' => $widget, 'markdown' => $widget->get('markdown')]); ?>
          </article>

      </div>
</div>

<?php if ($app['content']->applyPlugins($widget->get('class') != "")) : ?>
<!-- if google Maps class is not empty -->

<script>
$(document).ready(function(){

// The latitude and longitude of your business / place
var position = [<?= $app['content']->applyPlugins($widget->get('latitude')); ?>, <?= $app['content']->applyPlugins($widget->get('longitude')); ?>];

function showGoogleMaps() {

    var latLng = new google.maps.LatLng(position[0], position[1]);

    var mapOptions = {
        zoom: <?= $app['content']->applyPlugins($widget->get('zoomlevel')); ?>, // initialize zoom level - the max value is 21
        streetViewControl: false, // hide the yellow Street View pegman
        scaleControl: true, // allow users to zoom the Google Map
        scrollwheel: false,
        mapTypeId: google.maps.MapTypeId.<?= $app['content']->applyPlugins($widget->get('mapstyle')); ?>,
        center: latLng
    };

    $(<?= $app['content']->applyPlugins($widget->get('class')); ?>).addClass("googlemaps");
    map = new google.maps.Map(document.getElementById('<?= $app['content']->applyPlugins($widget->get('class')); ?>'),
        mapOptions);

    // Show the default red marker at the location
    marker = new google.maps.Marker({
        position: latLng,
        map: map,
        draggable: false,
        animation: google.maps.Animation.DROP
    });


}

google.maps.event.addDomListener(window, 'load', showGoogleMaps);

});

</script>

<?php endif ?>
