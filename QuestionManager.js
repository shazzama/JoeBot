const User = require ("./User.js")
const question = require ("./Question.js")

//const singleton = require('./Singleton')

//const instance = singleton.getInstance();

const singleton = {}


function questionManager (user) {
    this.currentUser = user
    this.Q1 = new question.questionFaculty()
    this.Q2 = new question.questionFaculty()
    this.Q3 = new question.questionFaculty()
    this.Q4 = new question.questionFaculty()
    this.Q5 = new question.questionFaculty()

    this.Q6;
    this.Q7;
    this.Q8;

}

questionManager.prototype.makeQuestions = function(){
    this.Q1.setQuestion("How long do you want to study in college?");
    this.Q1.setAnswer1("3 years", 1, 0 , 0 , 1 );
    this.Q1.setAnswer2("4 years", 1, 2 , 2 , 1);
    this.Q1.setAnswer3("5 years with work experience", 0, 2, 3 , 1);
    this.Q1.setAnswer4("2 years", 0, 0 , 0 , 0);

    this.Q2.setQuestion("Tell me your favorite class in school right now");
    this.Q2.setAnswer1("Mathematics / Physics", 0, 2 , 4 , 1 );
    this.Q2.setAnswer2("Chemistry / Biology", 0, 4 , 2 , 0);
    this.Q2.setAnswer3("English / Economics ", 4, 0, 0 , 1);
    this.Q2.setAnswer4("Accounting / Finance", 1, 0 , 0 , 4);

    this.Q3.setQuestion("Do you prefer working alone or collaborating with other?");
    this.Q3.setAnswer1("I work alone, and only alone", 3, 1 , 0 , 0 );
    this.Q3.setAnswer2("I enjoy working in small groups", 1, 2 , 2 , 1);
    this.Q3.setAnswer3("I work best in a big team", 0, 0, 3 , 2);
    this.Q3.setAnswer4("I can work well alone and in a team", 1, 1 , 1 , 1);


    this.Q4.setQuestion("Do you work best with a plan, a supervisor or play by ear?");
    this.Q4.setAnswer1("Plans are the only way to go", 0, 3 , 2 , 1 );
    this.Q4.setAnswer2("I work well under close supervision and told what to do", 1, 2 , 3 , 1);
    this.Q4.setAnswer3("I do what I feel like and it usually turns out well", 3, 0, 0 , 2);
    this.Q4.setAnswer4("I don't really have a preference", 1, 1 , 1 , 1);


    this.Q5.setQuestion("Where do you want to work?");
    this.Q5.setAnswer1("I want to be sent on business trips around the world", 1, 0 , 0 , 3 );
    this.Q5.setAnswer2("Working in a lab with colleagues sound good", 0, 3 , 2 , 0);
    this.Q5.setAnswer3("I want my own office space I can go to everyday", 2, 0, 0 , 4);
    this.Q5.setAnswer4("Wish I could work from home", 3, 1 , 0 , 1);

}

questionManager.prototype.chooseNextQuestions = function(){
    var a = this.currentUser.getMatchedFaculty();
    if (a == "Arts") {
        this.Q6 = new question.questionArtsFaculty();
        this.Q7 = new question.questionArtsFaculty();
        this.Q8 = new question.questionArtsFaculty();


        this.Q6.setQuestion1Arts("Do you enjoy reading?");
        this.Q6.setAnswer1Arts("No, I despise reading ", 1, 0 , 0 , 1 );
        this.Q6.setAnswer2Arts("4 years", 1, 2 , 2 , 1);
        this.Q6.setAnswer3Arts("5 years with work experience", 0, 2, 3 , 1);
        this.Q6.setAnswer4Arts("2 years", 0, 0 , 0 , 0);

        this.Q7.setQuestion1Arts("Tell me your favorite class in school right now");
        this.Q7.setAnswer1Arts("Mathematics / Physics", 0, 2 , 4 , 1 );
        this.Q7.setAnswer2Arts("Chemistry / Biology", 0, 4 , 2 , 0);
        this.Q7.setAnswer3Arts("English / Economics ", 4, 0, 0 , 1);
        this.Q7.setAnswer4Arts("Accounting / Finance", 1, 0 , 0 , 4);

        this.Q8.setQuestion1Arts("Do you prefer working alone or collaborating with other?");
        this.Q8.setAnswer1Arts("I work alone, and only alone", 3, 1 , 0 , 0 );
        this.Q8.setAnswer2Arts("I enjoy working in small groups", 1, 2 , 2 , 1);
        this.Q8.setAnswer3Arts("I work best in a big team", 0, 0, 3 , 2);
        this.Q8.setAnswer4Arts("I can work well alone and in a team", 1, 1 , 1 , 1);

    }
    if (a == "Science") {
        this.Q6 = new question.questionScienceFaculty();
        this.Q7 = new question.questionScienceFaculty();
        this.Q8 = new question.questionScienceFaculty();

        this.Q6.setQuestion1Science("How long do you want to study in college?");
        this.Q6.setAnswer1Science("3 years", 1, 0 , 0 , 1 );
        this.Q6.setAnswer2Science("4 years", 1, 2 , 2 , 1);
        this.Q6.setAnswer3Science("5 years with work experience", 0, 2, 3 , 1);
        this.Q6.setAnswer4Science("2 years", 0, 0 , 0 , 0);

        this.Q7.setQuestion1Science("Tell me your favorite class in school right now");
        this.Q7.setAnswer1Science("Mathematics / Physics", 0, 2 , 4 , 1 );
        this.Q7.setAnswer2Science("Chemistry / Biology", 0, 4 , 2 , 0);
        this.Q7.setAnswer3Science("English / Economics ", 4, 0, 0 , 1);
        this.Q7.setAnswer4Science("Accounting / Finance", 1, 0 , 0 , 4);

        this.Q8.setQuestion1Science("Do you prefer working alone or collaborating with other?");
        this.Q8.setAnswer1Science("I work alone, and only alone", 3, 1 , 0 , 0 );
        this.Q8.setAnswer2Science("I enjoy working in small groups", 1, 2 , 2 , 1);
        this.Q8.setAnswer3Science("I work best in a big team", 0, 0, 3 , 2);
        this.Q8.setAnswer4Science("I can work well alone and in a team", 1, 1 , 1 , 1);
    }
    if (a == "Applied Sciences") {
        this.Q6 = new question.questionAppliedScienceFaculty();
        this.Q7 = new question.questionAppliedScienceFaculty();
        this.Q8 = new question.questionAppliedScienceFaculty();

        this.Q6.setQuestion1AppliedScience("How long do you want to study in college?");
        this.Q6.setAnswer1AppliedScience("3 years", 1, 0 , 0 , 1 );
        this.Q6.setAnswer2AppliedScience("4 years", 1, 2 , 2 , 1);
        this.Q6.setAnswer3AppliedScience("5 years with work experience", 0, 2, 3 , 1);
        this.Q6.setAnswer4AppliedScience("2 years", 0, 0 , 0 , 0);

        this.Q7.setQuestion1AppliedScience("APPS");
        this.Q7.setAnswer1AppliedScience("MathematicsAPPS / Physics", 0, 2 , 4 , 1 );
        this.Q7.setAnswer2AppliedScience("Chemistry APPS/ Biology", 0, 4 , 2 , 0);
        this.Q7.setAnswer3AppliedScience("English /APPS Economics ", 4, 0, 0 , 1);
        this.Q7.setAnswer4AppliedScience("AccountingAPPS / Finance", 1, 0 , 0 , 4);

        this.Q8.setQuestion1AppliedScience("Do you prefer working alone or collaborating with other?");
        this.Q8.setAnswer1AppliedScience("I work alone, and only alone", 3, 1 , 0 , 0 );
        this.Q8.setAnswer2AppliedScience("I enjoy working in small groups", 1, 2 , 2 , 1);
        this.Q8.setAnswer3AppliedScience("I work best in a big team", 0, 0, 3 , 2);
        this.Q8.setAnswer4AppliedScience("I can work well alone and in a team", 1, 1 , 1 , 1);
    }
    if (a == "Commerce") {
        this.Q6 = new question.questionCommerceFaculty();
        this.Q7 = new question.questionCommerceFaculty();
        this.Q8 = new question.questionCommerceFaculty();

        this.Q6.setQuestion1Commerce("How long do you want to study in college?");
        this.Q6.setAnswer1Commerce("3 years", 1, 0 , 0 , 1 );
        this.Q6.setAnswer2Commerce("4 years", 1, 2 , 2 , 1);
        this.Q6.setAnswer3Commerce("5 years with work experience", 0, 2, 3 , 1);
        this.Q6.setAnswer4Commerce("2 years", 0, 0 , 0 , 0);

        this.Q7.setQuestion1Commerce("Tell me your favorite class in school right now");
        this.Q7.setAnswer1Commerce("Mathematics / Physics", 0, 2 , 4 , 1 );
        this.Q7.setAnswer2Commerce("Chemistry / Biology", 0, 4 , 2 , 0);
        this.Q7.setAnswer3Commerce("English / Economics ", 4, 0, 0 , 1);
        this.Q7.setAnswer4Commerce("Accounting / Finance", 1, 0 , 0 , 4);

        this.Q8.setQuestion1Commerce("Do you prefer working alone or collaborating with other?");
        this.Q8.setAnswer1Commerce("I work alone, and only alone", 3, 1 , 0 , 0 );
        this.Q8.setAnswer2Commerce("I enjoy working in small groups", 1, 2 , 2 , 1);
        this.Q8.setAnswer3Commerce("I work best in a big team", 0, 0, 3 , 2);
        this.Q8.setAnswer4Commerce("I can work well alone and in a team", 1, 1 , 1 , 1);
    }
}


// questionManager.makeQuestions();
// console.log(questionManager.Q1.getAnswer1());

function main(){
    const qm = new questionManager(new User());
    qm.makeQuestions();
    console.log(qm.Q1.getQuestion());
    console.log(qm.Q1.getAnswer1());
    console.log(qm.Q1.getAnswer1Attributes());

    console.log(qm.Q2.getQuestion());
    console.log(qm.Q2.getAnswer2());
    console.log(qm.Q2.getAnswer2Attributes());

    console.log(qm.Q3.getQuestion());
    console.log(qm.Q3.getAnswer3());
    console.log(qm.Q3.getAnswer3Attributes());

    console.log(qm.Q4.getQuestion());
    console.log(qm.Q4.getAnswer4());
    console.log(qm.Q4.getAnswer4Attributes());

    qm.currentUser.addSciencePts(14);
    qm.currentUser.chooseFaculty();
    qm.chooseNextQuestions();
    console.log(qm.currentUser.getMatchedFaculty())

    console.log(qm.Q7.getQuestion());
    console.log(qm.Q7.getAnswer4());
    console.log(qm.Q7.getAnswer4Attributes());

}

main()

