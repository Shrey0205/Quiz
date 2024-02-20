var quizdata = [

    {
        question : 'Which framework is related to JavaScript',
        a : '.net',
        b : 'flask',
        c : 'react',
        d : 'django',
        correct : 'c'
    },
    {
        question : 'Which is not a programming language',
        a : 'HTML',
        b : 'Python',
        c : 'Java',
        d : 'JavaScript',
        correct : 'a'
    },
    {
        question : 'CSS stands for',
        a : 'Cascading Sheet Style',
        b : 'Cascading Style State',
        c : 'Cascading Style Sheet',
        d : 'None of the above',
        correct : 'c'
    },
    {
        question : 'Which is not a framework',
        a : 'JavaScript',
        b : 'angular',
        c : 'react',
        d : 'django',
        correct : 'a'
    }

]

var quiz = document.getElementById('quizdiv')
var answer = document.querySelectorAll('.answer')
var question = document.getElementById('question')
var option_a = document.getElementById('a_val')
var option_b = document.getElementById('b_val')
var option_c = document.getElementById('c_val')
var option_d = document.getElementById('d_val')

var submit_btn = document.getElementById('submit')

var currquestion = 0
var quizScore = 0

loadQuiz()

function loadQuiz()
{

    deselect()

    question.innerHTML = quizdata[currquestion].question
    option_a.innerText = quizdata[currquestion].a
    option_b.innerText = quizdata[currquestion].b
    option_c.innerText = quizdata[currquestion].c
    option_d.innerText = quizdata[currquestion].d

}

function deselect()
{
    answer.forEach(answer => answer.checked = false)
}

submit_btn.addEventListener('click', () =>{

    var selectedoption;

    answer.forEach(answer =>{

        if(answer.checked)
        {
            selectedoption = answer.id
        }
    })

    if(selectedoption == quizdata[currquestion].correct)
    {
        quizScore = quizScore+1
    }
    currquestion = currquestion + 1
    
    if(currquestion == quizdata.length)
    {
        document.getElementById('quizdiv').innerHTML = `<h1>You have answered ${quizScore} correctly out of ${quizdata.length}</h1>`;

    }
    else
    {
        loadQuiz()
    }

})