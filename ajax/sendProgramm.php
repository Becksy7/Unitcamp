<?
function SendMail($mail_to, $thema, $html, $path)
{
	if(!$mail_to || !$thema || !$html || !$path)
		return false;  
	
	if ($path) {  
    $fp = fopen($path,"rb");   
    if (!$fp)   
    { 
		return false; 
    }   
    $file = fread($fp, filesize($path));   
    fclose($fp);   
    }  
    $name = "ЮНИТ_подробная_программа_лагеря.pdf"; // в этой переменной надо сформировать имя файла (без всякого пути)  
    $EOL = "\r\n"; // ограничитель строк, некоторые почтовые сервера требуют \n - подобрать опытным путём
    $boundary     = "--".md5(uniqid(time()));  // любая строка, которой не будет ниже в потоке данных.  
    $headers    = "MIME-Version: 1.0;$EOL";   
    $headers   .= "Content-Type: multipart/mixed; boundary=\"$boundary\"$EOL";  
    $headers   .= "From: info@unitcamp.ru";  
      
    $multipart  = "--$boundary$EOL";   
    $multipart .= "Content-Type: text/html; charset=utf-8$EOL";   
    $multipart .= "Content-Transfer-Encoding: base64$EOL";   
    $multipart .= $EOL; // раздел между заголовками и телом html-части 
    $multipart .= chunk_split(base64_encode($html));   

    $multipart .=  "$EOL--$boundary$EOL";   
    $multipart .= "Content-Type: application/octet-stream; name=\"$name\"$EOL";   
    $multipart .= "Content-Transfer-Encoding: base64$EOL";   
    $multipart .= "Content-Disposition: attachment; filename=\"$name\"$EOL";   
    $multipart .= $EOL; // раздел между заголовками и телом прикрепленного файла 
    $multipart .= chunk_split(base64_encode($file));   

    $multipart .= "$EOL--$boundary--$EOL";
    if(mail($mail_to, $thema, $multipart, $headers)) {
		return true;
    }  
    else {
		return false;  
	}
}
function SendProgramm($mail_to)
{
	$thema = "ЮНИТ: подробная программа лагеря";
	$html = "
		<p>Добрый день! Вы запрашивали подробное описание программы. Всю информацию можно найти в приложенном файле.</p>

		<p>Хотим отдельно отметить, что основной своей задачей считаем качественную подготовку программы для создания благоприятной, творческой работы и включение каждого ребенка в активный процесс постановки своей цели и управления временем.</p>

		<p>Основная цель данной смены - глубоко интегрировать получение полезных знаний и навыков в сюжетно-ролевую игру (квест).</p>

		<p>Таким образом, каждое прохождение квестового задания будет способствовать выработке навыков целеполагания, управления временем, работы в команде и формированию активной жизненной позиции.</p>

		<p>———————————</p>
		<p>С уважением,<br>
		команда Unitcamp<br>
		Тел.: +7 (495) 968-48-84<br>
		www.unitcamp.ru</p>
	";
	$path = $_SERVER["DOCUMENT_ROOT"]."/ajax/unitcamp_programm.pdf";
	
	$res = SendMail($mail_to, $thema, $html, $path);
	return $res;
}
function SendParent($mail_to)
{
	$thema = "Ребенок хочет в лагерь!";
	$html = "
		<p>Добрый день! Ваш ребенок попросил рассказать Вам о лагере для школьников. </p>

		<p>Мы объединили вместе каникулы в лагере, увлекательный квест и полезные знания! <br>
		На протяжении всех каникул ребёнок пройдет все уровни квеста, выберет свою миссию, разгадает древние космические пророчества, найдет подсказки, сложит воедино все коды Галактики, испытает силу дружбы и станет властелином времени.</p>

		<p>Подробнее на сайте www.unitcamp.ru </p>

		<p>———————————</p>
		<p>С уважением,<br>
		команда Unitcamp<br>
		Тел.: +7 (495) 968-48-84<br>
		www.unitcamp.ru</p>
	";
	$path = $_SERVER["DOCUMENT_ROOT"]."/ajax/unitcamp_programm.pdf";
	
	$res = SendMail($mail_to, $thema, $html, $path);
	return $res;
}


?>