let questions = [
    {
        "question": "Die Zeichentrick-Familie Simpsons lebt in welcher Stadt?",
        "answer_1": "New York",
        "answer_2": "Springfield",
        "answer_3": "Chicago",
        "answer_4": "Minnesota",
        "right_answer": 2
    },
    {
        "question": "Folgt man dem Äquator um die Welt, legt man wie viele Kilometer zurück?",
        "answer_1": "Rund 40.070 km",
        "answer_2": "Rund 30.070 km",
        "answer_3": "Rund 60.070 km",
        "answer_4": "Rund 80.070 km",
        "right_answer": 1
    },
    {
        "question": "Wie viele Tasten hat ein Klavier?",
        "answer_1": "88",
        "answer_2": "70",
        "answer_3": "65",
        "answer_4": "80",
        "right_answer": 1
    },
    {
        "question": "Aus wie vielen Kräutern ist Jägermeister gemacht?",
        "answer_1": "13",
        "answer_2": "5",
        "answer_3": "24",
        "answer_4": "56",
        "right_answer": 4
    },
    {
        "question": "Von wem stammt die Relativitätstheorie?",
        "answer_1": "Nikola Tesla",
        "answer_2": "Stephen Hawking",
        "answer_3": "Albert Einstein",
        "answer_4": "Marie Curie",
        "right_answer": 3
    },
    {
        "question": "Wie lange dauerte der hundertjährige Krieg?",
        "answer_1": "100 Jahre",
        "answer_2": "70 Jahre",
        "answer_3": "150 Jahre",
        "answer_4": "116 Jahre",
        "right_answer": 4
    },
    {
        "question": "Auf welcher Buchreihe basiert die Erfolgsserie „Game of Thrones“?",
        "answer_1": "Earth, Wind and Fire",
        "answer_2": "A Song of Ice and Fire",
        "answer_3": "Storm and Fire",
        "answer_4": "Rain, Thunder and Lightning",
        "right_answer": 2
    }
];

let rightQuestions = 0;
let currentQuestion = 0;


function init() {
    document.getElementById('all-questions').innerHTML = questions.length;
    showQuestion();
};


function showQuestion() {
    if (currentQuestion >= questions.length) { // wenn currentQuestion gleich oder größer questions.length ist (hier 7) Ausführung stoppen
        document.getElementById('endScreen').style = ''; // leert das Inline-CSS, so dass display: none nicht mehr aktiv ist
        document.getElementById('questionBody').style = 'display: none'; //entfernt den Container mit den Fragen
        document.getElementById('amount-of-questions').innerHTML = questions.length; // Anzahl der Fragen im Endscreen-Element
        document.getElementById('amount-of-right-questions').innerHTML = rightQuestions; // Anzahl der richtig beantworten Fragen aus der Variablen rightQuestions
    } else { //Show Question
        let percent = Math.round((currentQuestion + 1) / questions.length * 100); // Prozentberechnung des Progress Bar gerundet auf Ganzzahl

        document.getElementById('progress-bar').innerHTML = `${percent} %`; // zugriff auf Progress Bar und verändern des Prozentzahl
        document.getElementById('progress-bar').style = `width: ${percent}%`; // Änderung der Größe des Balkens von Progress Bar

        let question = questions[currentQuestion]; // zieht Wert aus JSON und startet an der Stelle 0
        document.getElementById('question-number').innerHTML = currentQuestion + 1; // Anzeige der aktuellen Indexstelle des Array
        document.getElementById('questiontext').innerHTML = question['question'];
        document.getElementById('answer_1').innerHTML = question['answer_1'];
        document.getElementById('answer_2').innerHTML = question['answer_2'];
        document.getElementById('answer_3').innerHTML = question['answer_3'];
        document.getElementById('answer_4').innerHTML = question['answer_4'];
    }
}


function answer(selection) { // onclick auf answer() und Übergabe des Parameters, welche Card geclickt wurde
    let question = questions[currentQuestion]; //ziehe mir den Wert von des JSON questions an der Stelle currentQuestion (globale Variable)
    let selectedQuestionNumber = selection.slice(-1); // ich greife auf den Parameter selection zu und ziehe mir den letzten Wert (hier eine Zahl) heraus
    let idOfRightAnswer = `answer_${question['right_answer']}`; // Variable, die die richtige Antwort an else weitergibt 

    if (selectedQuestionNumber == question['right_answer']) { // ist slice(-1) Wert gleich questions an der Stelle currentQuestion aus dem Objekt?
        document.getElementById(selection).parentNode.classList.add('bg-success'); // fügt Klasse zum übergeordneten Div-Container zu, um Farbe zu ändern
        rightQuestions++; // erhöht Variable rightQuestions um 1
    } else { // wenn nicht, dann falsche Antwort
        document.getElementById(selection).parentNode.classList.add('bg-danger'); // fügt Klasse zum übergeordneten Div-Container zu, um Farbe zu ändern
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success'); // bei falscher Antwort wird die richtige Antwort zusätzlich angezeigt
    }
    document.getElementById('next-button').disabled = false; // aktivieren des im HTML mit disabled deaktivierten Buttons
}


function nextQuestion() {
    currentQuestion++; // globale Variable erhöht sich z.B. von 0 auf 1
    document.getElementById('next-button').disabled = true; // Weiterbutton-Funktion wird wieder deaktiviert (disabled)

    resetAnswerButtons();
    showQuestion();
}


function resetAnswerButtons() {
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger'); // zurücksetzen der hinzugefügten CSS-Klassen um Cardfarbe zu ändern
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
}

function restartGame() {
    document.getElementById('endScreen').style = 'display: none'; // Endscreen mit display: none wieder entfernen
    document.getElementById('questionBody').style = ''; // display: none von questionBody entfernen, so dass Fragen wieder angezeigt werden
    rightQuestions = 0; // zurücksetzen der Variablen auf 0
    currentQuestion = 0; // zurücksetzen der Variablen auf 0
    init(); // neustarten der Ausgangsfunktion
}