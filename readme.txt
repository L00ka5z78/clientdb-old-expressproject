***!! katalog node_modules not included ***!!
****************************************
baza klientow crm            ***********
****************************************
gdyby handelbarsy nie dzialaly
to instalujemy:
npm i express-handlebars@5.3.4
****************************************


stworzyc baze klientow

przechowujemy ich imiona, maile, notatki i informacje
o kolejnej dacie kontaktu.

mozna wyswietlac, usuwac, dodawac i modyfikowac rekordy.

zastosuj CRUD (create, read, update, delete)
stworz poprawna architekture RESTOWa

NIE korzystamy z ciastek. przechowujemy na serwerze, aby miec
dostep do bazy klientow w kazdej chwili i z kazdego urzadzenia

stworz mechanizm oop do przechowywania danych w pliku JSON

dodac walidacje w pojedynczym rekordzie. Lapiemy bledy na
zewnatrz. Uzyc odpowiednie kody http

tworzac nowy element wysylamy 201 a nie 200.

zeby uruchomic aplikacje wpisz w terminalu: npm run



**
npm i method-override === aby nadpisac matody http.

prawidlowa struktura tabeli
<table>
    <thead>     -naglowek
    <tr>        -kolumna / linia pozioma
        <th>    -kolumna

        </th>
        <td>    -pojedyncza komorka
        </td>
    </tr>
    </thead>
</table>

            <td>
               <a href="/client/{{this.id}}"></a>      -nazwa kolekcji client.json w naszym przypadku i to co wyciagamy
            </td>

 <a href="mailto:{{this.mail}}" target="_blank">{{this.mail}}</a>  -przekierowanie do skrzynki w nowym oknie po kliknieciu maila

  <form method="POST" action="/client/{{this.id}}?_method=DELETE">  -nadpisanie na posta delete. Idzie metoda post ale
                                                                    wykonuje delete. method-override app.use(methodOverride('_method'))

 <input type="email" name="mail" //*** value="{{client.mail}} ***//"> //domyslan wartosc w formuarzu edycji

 class ValidationError extends Error {}         //tworzymy pusta klase ktora bedzie wyswietlala komuniakty bledu i pozwala rozróznic JSowe bledy od naszych wlasnych zaplanowanych komunikatow bledow