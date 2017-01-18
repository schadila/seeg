
<?PHP

$link = mysql_connect("localhost", "web404", "swcfE8dejx");
mysql_select_db("usr_web404_5");

$query1 = ("SET NAMES utf8");
$results1 = mysql_query($query1);
$query = 'SELECT * FROM predigtPlayer ORDER BY date DESC';
$results = mysql_query($query);

setlocale(LC_TIME, 'de_CH');

$code = "";

$code .= "<br>";
$code .= '<table class="uk-table uk-table-striped uk-table-hover">';
$code .= '<tr><th>Titel</th><th></th><th>Datum</th><th>Referent</th><th>Grösse</th><th>Dauer</th></tr>';

while($line = mysql_fetch_assoc($results)) {
	$neue_zeit = str_replace("December","Dezember", date("d. F Y", strtotime($line["date"])) );
	$neue_zeit1 = str_replace("January","Januar", $neue_zeit);
	$neue_zeit2 = str_replace("February","Februar", $neue_zeit1);
	$neue_zeit3 = str_replace("March","März", $neue_zeit2);
	$neue_zeit4 = str_replace("May","Mai", $neue_zeit3);
	$neue_zeit5 = str_replace("June","Juni", $neue_zeit4);
	$neue_zeit6 = str_replace("July","Juli", $neue_zeit5);
	$neue_zeit7 = str_replace("October","Oktober", $neue_zeit6);

   //echo '<song title="'. $line["title"] . '" date="'. $neue_zeit7 . '" author="'.$line["author"].'" path="'.$line["path"].'" size="'.$line["size"].'" duration="'.$line["duration"].'" image="'.$line["image"].'" />';

   $code .= '<tr><td><img width="100px" src="'.$line["image"].'"</img></td>';
   $code .= '<td style="max-width: 300px;"><h3><a href="'.$line["path"].'" download="'.$line["title"].'.mp3">'.$line["title"].'</a></h3></td>';
   $code .= '<td>'.$neue_zeit7.'</td>';
   $code .= '<td>'.$line["author"].'</td>';
   //$code .= '<path>'.$line["path"].'</path>';
   $code .= '<td>'.round($line["size"]/1024/1024).' MB</td>';
   $code .= '<td>'.$line["duration"].'</td></tr>';



}
$code .= '</table>';
$code .= "</br>";

echo($code);

mysql_close($link);

?>
