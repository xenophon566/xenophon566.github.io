<?php
function prt() {
    $m = sprintf("%04d", decbin(abs($mode)%15));
    if($m[1]) $_STR = is_array($_STR) ? $_STR : (array)($_STR);
    if($m[1]) foreach($_STR as $key=>$value) $_STR[$key] = strip_tags($value);
    echo"<pre>"; if($m[2]) echo"<b>";
        $m[0] ? var_dump($_STR) : print_r($_STR);
    if($m[2]) echo"</b>"; echo"</pre>";
    if($m[3]) exit;
}

function console($value, $argu=log) {
    echo '<script type="text/javascript">';
    if(!is_callable($argu) || $argu==log) {
        if(is_array($value) || is_object($value)) {
            $value = str_replace("'", "\'", json_encode($value));
            echo 'console.'. $argu .'('. $value .');';
        } else {
            $value = str_replace('"', '\\"', $value);
            echo 'console.'. $argu .'("'. $value .'");';
        }
    } else $argu($value);
    echo '</script>';
}
?>
