<?
if (strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest')
{
	$FORM = strip_tags ($_POST['form']);
	$FORM = trim ($FORM);
	$DATE = date("d/m/y", time()); //$ДД/ММ/ГГ
	$TIME = date("H:i", time()); //$ЧЧ:ММ

	$arEmail = array(
		"borisov213@yandex.ru",
		//"unitbron@mail.ru",
		 "lenarzn.unit@gmail.com",
		 "info@unitcamp.ru",
		/*"apashkof@yandex.ru",*/
	);

	$headers = "MIME-Version: 1.0\r\n";
	$headers.="Content-type: text/html; charset=utf-8\r\n"; //кодировка
	$headers.="From: robot@unitcamp.ru\r\n"; // откуда письмо

	switch ($FORM) {
		case 'r2d2__form':

			$name = strip_tags ($_POST['name']);
			$arFields["NAME"] = trim ($name);
			$tel = strip_tags ($_POST['tel']);
			$arFields["TEL"] = trim ($tel);
			PrepareForm($arFields);

			$title = 'Новая бронь с сайта! ( ' . $DATE . ' в ' . $TIME . ')'; //Тема сообщения
			$mess = '
				<div>Новая заявка от: ' . $arFields["NAME"]. '</div>
				<div>Контактный телефон для уточнения даты заезда: ' . $arFields["TEL"] . '</div>
				<br>
				<div>Важно! Чем меньше время ожидания клиентом, тем выше качество сервиса!</div>
			';
			break;
		case 'call':

			$name = strip_tags ($_POST['name']);
			$arFields["NAME"] = trim ($name);
			$utime = strip_tags ($_POST['time']);
			$arFields["UTIME"] = trim ($utime);
			$tel = strip_tags ($_POST['tel']);
			$arFields["TEL"] = trim ($tel);
			PrepareForm($arFields);

			$title = 'Заказ звонка с сайта! ( ' . $DATE . ' в ' . $TIME . ')'; //Тема сообщения
			$mess = '
				<div>Заказ звонка от: ' . $arFields["NAME"] . '</div>
				<div>Удобное время: ' . $arFields["UTIME"] . '</div>
				<div>Контактный телефон: ' . $arFields["TEL"] . '</div>
				<br>
				<div>Важно! Если клиент не указал удобное время, перезвонить нужно немедленно!</div>
			';
			break;
		case 'subscribe':
			$email = strip_tags ($_POST['email']);
			$arFields["EMAIL"] = trim ($email);
			PrepareForm($arFields);

			$title = 'Новый подписчик на сайте! ( ' . $DATE . ' в ' . $TIME . ')'; //Тема сообщения
			$mess = '
				<div>Нужно добавить в базу подписчиков: ' . $arFields["EMAIL"] . '</div>
				<br>
			';

	/*		Автоматическая отправка подробной программы

			require($_SERVER["DOCUMENT_ROOT"]."/ajax/sendProgramm.php");

			$title = 'Запрос подробной программы с сайта! ( ' . $DATE . ' в ' . $TIME . ')'; //Тема сообщения
			$mess = '';

			if(SendProgramm($arFields["EMAIL"])){
				$mess .= "<div>Подробная программа была отправлена на почту " . $arFields["EMAIL"] . "</div>
				<br><div>Важно! Добавьте пользователя в рассылку!</div>";
			} else{
				$mess .= "<div>Произошла ошибка. Подробная программа НЕ была атоматически отправлена на почту " . $arFields["EMAIL"] . " Обратитесь к администратору сайта или попробуйте отправить вручную!</div>";
			}
	*/
			break;
		case 'subscribe-mobile':
			$email = strip_tags ($_POST['email']);
			$arFields["EMAIL"] = trim ($email);
			PrepareForm($arFields);

			require($_SERVER["DOCUMENT_ROOT"]."/ajax/sendProgramm.php");


			$title = 'Запрос подробной программы с мобильной заглушки! ( ' . $DATE . ' в ' . $TIME . ')'; //Тема сообщения
			$mess = '';

			if(SendProgramm($arFields["EMAIL"])){
				$mess .= "<div>Подробная программа была отправлена на почту " . $arFields["EMAIL"] . "</div>
				<br><div>Важно! Добавьте пользователя в рассылку!</div>";
			} else{
				$mess .= "<div>Произошла ошибка. Подробная программа НЕ была автоматически отправлена на почту " . $arFields["EMAIL"] . " Обратитесь к администратору сайта или попробуйте отправить вручную!</div>";
			}

			break;
		case 'p-subscribe':
			$email = strip_tags ($_POST['email']);
			$arFields["EMAIL"] = trim ($email);
			PrepareForm($arFields);

			require($_SERVER["DOCUMENT_ROOT"]."/ajax/sendProgramm.php");


			$title = 'Ребёнок просит помочь рассказать родителям! ( ' . $DATE . ' в ' . $TIME . ')'; //Тема сообщения
			$mess = '';

			if(SendParent($arFields["EMAIL"])){
				$mess .= '<div>Нужно добавить в подписчики родителя: '.$arFields["EMAIL"]. '</div>';
			} else{
				$mess .= "<div>Произошла ошибка. Подробная программа НЕ была автоматически отправлена родителям о нашем лагере на email " . $arFields["EMAIL"] . " Обратитесь к администратору сайта или попробуйте отправить вручную!</div>";
			}

			break;
		default:
			die("Ошибка определения формы");
	}


	{ //Все отправляемые письма в конце должны содержать

	//http://unitcamp.ru/?utm_source=yandex_search&utm_medium=cpc&utm_term=%D0%94%D0%B5%D1%82%D1%81%D0%BA%D0%B8%D0%B5%20%D0%BB%D0%B0%D0%B3%D0%B5%D1%80%D1%8F%20%D0%9F%D0%BE%D0%B4%D0%BC%D0%BE%D1%81%D0%BA%D0%BE%D0%B2%D1%8C%D0%B5&utm_campaign=nch_search&yclid=624753318742985731&utm_expid=113999037-0.d8XQVbYwTziFV2ulQd4N7g.0&utm_referrer=http%3A%2F%2Fyabs.yandex.ru%2Fcount%2FLqIPFGK16Wa40000ZhwjCcm5KfK2cm5kGxS2BG4qYB_RiD43YRETcwu3c1kThVLU5QOyYhoL4Be4lR9FB9y4gYwbefgL1xoa3987ZG6HlntA6mQNy7qfcbPYD_aDauKDcGL2Z9DsphQKy3src7qqeAKTW06latREiv2eORIOVJJPfHs00TgGg66KbdFTfvql5gYdvyizhkfo0c06XBQAiG6of1400hcjzLuLk_XxrAoN0JMu0S7__________m_2yHC0_mEveY88n075Zm_J0dmO%3Fq%3D%25D0%25B4%25D0%25B5%25D1%2582%25D1%2581%25D0%25BA%25D0%25B8%25D0%25B9%2B%25D0%25BB%25D0%25B0%25D0%25B3%25D0%25B5%25D1%2580%25D1%258C%2B%25D0%25BF%25D0%25BE%25D0%25B4%25D0%25BC%25D0%25BE%25D1%2581%25D0%25BA%25D0%25BE%25D0%25B2%25D1%258C%25D0%25B5

		// $SERVER_REFER = $_SERVER["HTTP REFERER"];
		$URL = $_SERVER["HTTP_HOST"];
		$UTM_SOURCE = strip_tags ($_POST['utm_source']);
		$UTM_SOURCE = trim ($UTM_SOURCE);
		$UTM_MEDIUM = strip_tags ($_POST['utm_medium']);
		$UTM_MEDIUM = trim ($UTM_MEDIUM);
		$UTM_TERM = strip_tags ($_POST['utm_term']);
		$UTM_TERM = trim ($UTM_TERM);
		$UTM_TERM = urldecode ($UTM_TERM);
		$UTM_CAMPAIGN = strip_tags ($_POST['utm_campaign']);
		$UTM_CAMPAIGN = trim ($UTM_CAMPAIGN);
		$YCLID = strip_tags ($_POST['yclid']);
		$YCLID = trim ($YCLID);
		$UTM_EXPID = strip_tags ($_POST['utm_expid']);
		$UTM_EXPID = trim ($UTM_EXPID);
		$UTM_REFERRER = strip_tags ($_POST['utm_referrer']);
		$UTM_REFERRER = trim ($UTM_REFERRER);
		$UTM_REFERRER = urldecode ($UTM_REFERRER);

		$mess .= '
			<div>——————————————————————————</div>
			<div>Дополнительная информация:</div>
			<div>Источник заполнения: ' . $URL . '</div>
			<div>Канал трафика: ' . $UTM_SOURCE . '</div>
			<div>Рекламная кампания: ' . $UTM_CAMPAIGN . '</div>
			<div>Формат рекламы: ' . $UTM_MEDIUM . '</div>
			<div>Откуда пришел: ' . $UTM_REFERRER . '</div>

		';
	}


	$reult = mail(implode(", ", $arEmail), '=?UTF-8?B?' . base64_encode($title) . '?=', $mess, $headers);

	if($reult){
		print json_encode(array('result' => 1));
	}
	else die("Ошибка отправки формы");

} else die("Ошибка чтения данных");

function PrepareForm($arFields)
{
	$arError = array();

	$arInit = array(
		"NAME" => array(
			"text" => "Имя введено не верно",
			"eng" => "name incorrect",
			"require" => false,
			"reg" => "/^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']*$/ui"
		),
		"TEL" => array(
			"text" => "Телефон введен не верно",
			"eng" => "tel incorrect",
			"require" => true,
			"reg" => "/^((8|\+7)[\- ]?)?(\(?\d{3,5}\)?[\- ]?)?[\d\- ]{5,15}$/ui"
		),
		"EMAIL" => array(
			"text" => "Email введен не верно",
			"eng" => "email incorrect",
			"require" => true,
			"reg" => "/^([a-zёа-я0-9_-]+\.)*[a-zёа-я0-9_-]+@[a-zёа-я0-9_-]+(\.[a-zёа-я0-9_-]+)*\.[a-zёа-я]{2,6}$/i",
			// "reg" => "/[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,6}/"
		),
		"UTIME" => array(
			"text" => "Удобное время введено не верно",
			"eng" => "time incorrect",
			"require" => false,
			"reg" => "/^[\-\:\.0-9A-zа-яёЁ-\s]+$/ui"
		)
	);
	foreach($arFields as $name => $value)
	{

		if($value == "" && $arInit[$name]["require"] == false) continue;

		if(!preg_match($arInit[$name]["reg"], $value))
		{
				$arError[$name] = $arInit[$name]["text"];
		}

	}
	if(!empty($arError)) die("Неверно заполнены данные формы. ".implode(". ", $arError));
}


?>