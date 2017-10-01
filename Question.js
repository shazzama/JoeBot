

function questionFaculty() {
    answer1 = "",
    answer1Attributes = [arts, sci , appSci, commerce],
    answer2 = "",
    answer2Attributes = [arts, sci , appSci, commerce],
    answer3 = "",
    answer3Attributes = [arts, sci , appSci, commerce],
    answer4 = "",
    answer4Attributes = [arts, sci , appSci, commerce],

    // SETTERS QUESTIONS AND ANSWERS
    setQuestion= function (string) {
        this.questionString = string;
    },
    setAnswer1 = function (string, artspts, scipts, appscipts, commpts) {
        this.answer1 = string;
        this.answer1Attributes = [artspts, scipts, appscipts, commpts];
    },
    setAnswer2 = function (string, artspts, scipts, appscipts, commpts) {
        this.answer2 = string;
        this.answer2Attributes = [artspts, scipts, appscipts, commpts];
    },
    setAnswer3 = function (string, artspts, scipts, appscipts, commpts) {
        this.answer3 = string;
        this.answer3Attributes = [artspts, scipts, appscipts, commpts];
    },
    setAnswer4 = function (string, artspts, scipts, appscipts, commpts) {
        this.answer4 = string;
        this.answer4Attributes = [artspts, scipts, appscipts, commpts];
    },

    // GETTERS QUESTIONS AND ANSWERS
    getQuestion= function(){
        return this.questionString;
    },
    getAnswer1= function () {
        this.answer1;
    },
    getAnswer2= function () {
        this.answer2;
    },
    getAnswer3= function () {
        this.answer3;
    },
    getAnswer4= function () {
        this.answer4;
    },

    // GETTERS FOR ANSWER ATTRIBUTES
    getAnswer1Attributes= function(){
        return this.answer1Attributes;
    },
    getAnswer2Attributes= function(){
        return this.answer2Attributes;
    },
    getAnswer3Attributes= function(){
        return this.answer3Attributes;
    },
    getAnswer4Attributes= function(){
        return this.answer4Attributes;
    };
}

function questionArtsFaculty(){
    questionStringArts = "",
    answer1Arts = "",
    answer1ArtsAttributes = [creativeWriting, economics, englishLiterature, psychology, filmActing],
    answer2Arts = "",
    answer2ArtsAttributes = [creativeWriting, economics, englishLiterature, psychology, filmActing],
    answer3Arts = "",
    answer3ArtsAttributes = [creativeWriting, economics, englishLiterature, psychology, filmActing],
    answer4Arts = "",
    answer4ArtsAttributes = [creativeWriting, economics, englishLiterature, psychology, filmActing],

    // SETTERS QUESTIONS AND ANSWERS
    setQuestion1Arts = function (string) {
        this.questionStringArts = string;
    },
    setAnswer1Arts= function (string, creativeWritingPts, economicsPts, englishLiteraturePts, psychologyPts, filmACtingPts) {
        this.answer1Arts = string;
        this.answer1ArtsAttributes = [creativeWritingPts, economicsPts, englishLiteraturePts, psychologyPts, filmACtingPts]
    },
    setAnswer2Arts= function (string, creativeWritingPts, economicsPts, englishLiteraturePts, psychologyPts, filmACtingPts) {
        this.answer2Arts = string;
        this.answer2ArtsAttributes = [creativeWritingPts, economicsPts, englishLiteraturePts, psychologyPts, filmACtingPts]
    },
    setAnswer3Arts= function (string, creativeWritingPts, economicsPts, englishLiteraturePts, psychologyPts, filmACtingPts) {
        this.answer3Arts = string;
        this.answer3ArtsAttributes = [creativeWritingPts, economicsPts, englishLiteraturePts, psychologyPts, filmACtingPts]
    },
    setAnswer4Arts= function (string, creativeWritingPts, economicsPts, englishLiteraturePts, psychologyPts, filmACtingPts) {
        this.answer4Arts = string;
        this.answer4ArtsAttributes = [creativeWritingPts, economicsPts, englishLiteraturePts, psychologyPts, filmACtingPts]
    },

    // GETTERS QUESTIONS AND ANSWERS
    getQuestionArts= function () {
        return this.questionStringArts;
    },
    getAnswer1Arts= function () {
        return this.answer1Arts
    },
    getAnswer2Arts= function () {
        return this.answer2Arts
    },
    getAnswer3Arts= function () {
        return this.answer3Arts
    },
    getAnswer4Arts= function () {
        return this.answer4Arts
    },

    // GETTERS FOR ANSWERS ATTRIBUTES
    getAnswer1ArtsAttributes= function() {
        return this.answer1ArtsAttributes;
    },
    getAnswer2ArtsAttributes= function() {
        return this.answer2ArtsAttributes;
    },
    getAnswer3ArtsAttributes= function() {
        return this.answer3ArtsAttributes;
    },
    getAnswer4ArtsAttributes= function() {
        return this.answer4ArtsAttributes;
    };

}


// TODO
var questionScienceFaculty = {

}

// TODO
var questionsAppliedScienceFaculty = {

}

// TODO
var questionsCommerceFaculty = {

}
