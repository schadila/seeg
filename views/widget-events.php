<div id="<?= $app['content']->applyPlugins($widget->get('class')); ?>" class="tm-top uk-block uk-block-muted uk-cover-background uk-cover-background-head" <?= $app['content'] ? "style=\"background-image: url('{$view->url($widget->get('bg_image'))}'); height: {$widget->get('fixheight')};\"" : '' ?>>
    <div class="uk-container uk-container-center" >

          <article class="uk-article uk-text-center uk-contrast uk-text-break">
              <?= $app['content']->applyPlugins($widget->get('content'), ['widget' => $widget, 'markdown' => $widget->get('markdown')]); ?>
          </article>

          <div><p>&nbsp;</p></div>

          <ul class="uk-grid uk-grid-large uk-text-center uk-grid-match" data-uk-grid-margin data-uk-scrollspy="{cls:'uk-animation-fade', target:'.scrollspy', delay:100}">






<?php
  $limit = $app['content']->applyPlugins($widget->get('eventlimit'));
  //$server = $app['content']->applyPlugins($widget->get('db_server'));
  //$user = $app['content']->applyPlugins($widget->get('db_user'));
  //$password = $app['content']->applyPlugins($widget->get('db_password'));
  $database = $app['content']->applyPlugins($widget->get('db'));
  $table = $app['content']->applyPlugins($widget->get('db_table'));
  $pid = $app['content']->applyPlugins($widget->get('calendar'));
?>


            <?PHP

            $link = mysql_connect('localhost', 'web404', 'swcfE8dejx');
            mysql_select_db($database);

            $query1 = ("SET NAMES utf8");
            $results1 = mysql_query($query1);
            $query = 'SELECT * FROM '.$table.' WHERE pid = '.$pid.' AND published = 1 AND startTime>=UNIX_TIMESTAMP() ORDER BY startTime ASC LIMIT '.$limit.';';
            $results = mysql_query($query);

            setlocale(LC_TIME, 'de_CH');
            date_default_timezone_set('Europe/Berlin');

            $code = "";

            while($line = mysql_fetch_assoc($results)) {
              //while($i < 6){
              	$neue_zeit = str_replace("December","DEZ", date("j. F", $line["startDate"]) );
              	$neue_zeit = str_replace("January","JAN", $neue_zeit);
              	$neue_zeit = str_replace("February","FEB", $neue_zeit);
              	$neue_zeit = str_replace("March","MÄRZ", $neue_zeit);
              	$neue_zeit = str_replace("April","APRIL", $neue_zeit);
              	$neue_zeit = str_replace("May","MAI", $neue_zeit);
              	$neue_zeit = str_replace("June","JUNI", $neue_zeit);
              	$neue_zeit = str_replace("July","JULI", $neue_zeit);
              	$neue_zeit = str_replace("August","AUG", $neue_zeit);
              	$neue_zeit = str_replace("September","SEPT", $neue_zeit);
              	$neue_zeit = str_replace("October","OKT", $neue_zeit);
              	$neue_zeit = str_replace("November","NOV", $neue_zeit);

              	$day = date("d", $line["startDate"]);
                $dayname = date("D", $line["startDate"]);
                $year = date("Y", $line["startDate"]);

                $dayname = str_replace("Mon","Mo", $dayname);
              	$dayname = str_replace("Tue","Di", $dayname);
              	$dayname = str_replace("Wed","Mi", $dayname);
              	$dayname = str_replace("Thu","Do", $dayname);
              	$dayname = str_replace("Fri","Fr", $dayname);
              	$dayname = str_replace("Sat","Sa", $dayname);
              	$dayname = str_replace("Sun","So", $dayname);

              	$month = date("F", $line["startDate"]);
              	$month = str_replace("January","JAN", $month);
              	$month = str_replace("February","FEB", $month);
              	$month = str_replace("March","MÄRZ", $month);
              	$month = str_replace("April","APRIL", $month);
              	$month = str_replace("May","MAI", $month);
              	$month = str_replace("June","JUNI", $month);
              	$month = str_replace("July","JULI", $month);
              	$month = str_replace("August","AUG", $month);
              	$month = str_replace("September","SEPT", $month);
              	$month = str_replace("October","OKT", $month);
              	$month = str_replace("November","NOV", $month);
              	$month = str_replace("December", "DEZ", $month);

                //echo '<song title="'. $line["title"] . '" date="'. $neue_zeit7 . '" author="'.$line["author"].'" path="'.$line["path"].'" size="'.$line["size"].'" duration="'.$line["duration"].'" image="'.$line["image"].'" />';

                $code .= '<li class="uk-width-medium-1-3 scrollspy" style="opacity:0;">';
                  $code .= '<div class="uk-panel-box-secondary uk-panel uk-panel-box uk-panel-hover uk-panel-box-secondary-hover">';
                  if($line['url'] != ""){ //Nur erstellen, wenn url in der db tabelle nicht leer ist
                    $code .= '<a class="uk-panel" href="'.$line['url'];
                    if($line['target'] == 1){ //Nur einfügen, wenn target in der db tabelle auf 1 gestellt ist
                      $code .= '" target="_blank';
                    }
                    $code .= '">'; //End a-Element-Open
                  }
                    $code .= '<p style="font-size:15px;margin:0px;color:#c5b687;">'.$year.'</p>';
                    $code .= '<p style="font-size:25px;text-transform:uppercase;margin:15px 0 0;color:#c5b687;">'.$dayname.' | '.$day.'. '.$month.'</p>';
                    $code .= '<h3 class="" style="margin:8px 0 0;">'.$line["title"].'</h2>';
                    $code .= '<p style="font-size:15px;margin:15px 0 0;color:#c5b687;">'.gmdate("H:i", $line["startTime"])." - ".gmdate("H:i", $line["endTime"]).'</p>';
                	  //$code .= '<span>'.$day.'</span>';
                  	//$code .= '<month>'.$month.'</month>';
                    //$code .= '<time>'.gmdate("H:i", $line["startTime"])." - ".gmdate("H:i", $line["endTime"]).'</time>';
                  	//$code .= '<date>'.gmdate("d-m-Y", $line["startDate"])." ".gmdate("H:i:s", $line["startTime"]).'</date>';
                  	//$code .= '<date>'.gmdate("d-m-Y", $line["startDate"])." ".gmdate("H:i:s", $line["endTime"]).'</date>';

                    if($line['url'] != ""){ //Nur schliessen, wenn auch erstellt ist
                      $code .= '</a>';
                    }
                  $code .= '</div>';
                $code .= '</li>';


              //}
            }

            echo($code);
            $file = 'test.html';
            file_put_contents($file, $code);

            mysql_close($link);

            ?>











          </ul>
          <!--END EVENT-LIST -->

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
        mapTypeId: google.maps.MapTypeId.<?= $app['content']->applyPlugins($widget->get('mapstyle')); ?>,
        center: latLng
    };

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
