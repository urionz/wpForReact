<?php
header('Content-type:text/json'); 
$REQUEST_URL = 'http://music.163.com/api/playlist/detail?id=73097868';
$cURL = curl_init();
curl_setopt($cURL, CURLOPT_URL,$REQUEST_URL);
curl_setopt($cURL, CURLOPT_RETURNTRANSFER, 1);
$src = curl_exec($cURL);
$src_array = json_decode($src,true);
$output = $src_array['result']['tracks'];
echo json_encode($output);