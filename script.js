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


let currentQuestion = 0;


function init() {
    document.getElementById('all-questions').innerHTML = questions.length;
    showQuestion();
};


function showQuestion() {
    let question = questions[currentQuestion];
    document.getElementById('questiontext').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
}

function answer(selection) { // onclick auf answer() und Übergabe des Parameters, welche Card geclickt wurde
    let question = questions[currentQuestion]; //ziehe mir den Wert von des JSON questions an der Stelle currentQuestion (globale Variable)
    let selectedQuestionNumber = selection.slice(-1); // ich greife auf den Parameter selection zu und ziehe mir den letzten Wert (hier eine Zahl) heraus
    let idOfRightAnswer = `answer_${question['right_answer']}`; // Variable, die die richtige Antwort an else weitergibt 

    if (selectedQuestionNumber == question['right_answer']) { // ist slice(-1) Wert gleich questions an der Stelle currentQuestion aus dem Objekt?
        document.getElementById(selection).parentNode.classList.add('bg-success'); // fügt Klasse zum übergeordneten Div-Container zu, um Farbe zu ändern
    } else { // wenn nicht, dann falsche Antwort
        document.getElementById(selection).parentNode.classList.add('bg-danger'); // fügt Klasse zum übergeordneten Div-Container zu, um Farbe zu ändern
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success'); // bei falscher Antwort wird die richtige Antwort zusätzlich angezeigt
    }
    document.getElementById('next-button').disabled = false;
}
