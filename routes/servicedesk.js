var soap = require('soap'); //Подключаем модуль
var userSoap = ''; //Пользак веб сервиса
var passSoap = ''; //Пароль пользака веб сервиса
var url = 'http://'+userSoap+':'+passSoap+'@url/service?wsdl'; //Урл до всдл с включенной аутентификацией, тут нужны пароли чтобы получить саму всдл

exports.newTasks = function(callback) {

    soap.createClient(url, function(err, client) { //Создаем клиента модуля
        client.setSecurity(new soap.BasicAuthSecurity(userSoap, passSoap)); //Говорим методам что они работают с сервисом которому нужна аутентификация
        client.MonitoringService.MonitoringServiceSoap.NewTasks({}, function(err, result) { //Вызываем метод Сервис.Порт.Метод(Аргументы, шняга)
            if (err) { console.log(err)} else {callback(result.return.Tasks);}
        });
    });
};

exports.overdueTasks = function(callback) {

    soap.createClient(url, function(err, client) { //Создаем клиента модуля
        client.setSecurity(new soap.BasicAuthSecurity(userSoap, passSoap)); //Говорим методам что они работают с сервисом которому нужна аутентификация
        client.MonitoringService.MonitoringServiceSoap.OverdueTasks({}, function(err, result) { //Вызываем метод Сервис.Порт.Метод(Аргументы, шняга)
            if (err) { console.log(err)} else {callback(result.return.Tasks);}
        });
    });
};

exports.taskCounter = function(callback) {

    soap.createClient(url, function(err, client) { //Создаем клиента модуля
        client.setSecurity(new soap.BasicAuthSecurity(userSoap, passSoap)); //Говорим методам что они работают с сервисом которому нужна аутентификация
        client.MonitoringService.MonitoringServiceSoap.TaskCounter({}, function(err, result) { //Вызываем метод Сервис.Порт.Метод(Аргументы, шняга)
            if (err) { console.log(err)} else {callback(result.return.Counters);}
        });
    });
}