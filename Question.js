function questionFaculty() {
    this.questionString = "",
    this.answer1 = "",
    this.answer1Attributes = ["arts", "sci" , "appSci", "commerce"],
    this.answer2 = "",
    this.answer2Attributes = ["arts", "sci" , "appSci", "commerce"],
    this.answer3 = "",
    this.answer3Attributes = ["arts", "sci" , "appSci", "commerce"],
    this.answer4 = "",
    this.answer4Attributes = ["arts", "sci" , "appSci", "commerce"];
}

questionFaculty.prototype.setQuestion = function (string) {
    this.questionString = string;
};

questionFaculty.prototype.setAnswer1 = function (string, artspts, scipts, appscipts, commpts) {
    this.answer1 = string;
    this.answer1Attributes = [artspts, scipts, appscipts, commpts];
};
questionFaculty.prototype.setAnswer2 = function (string, artspts, scipts, appscipts, commpts) {
    this.answer2 = string;
    this.answer2Attributes = [artspts, scipts, appscipts, commpts];
    };
questionFaculty.prototype.setAnswer3 = function (string, artspts, scipts, appscipts, commpts) {
    this.answer3 = string;
    this.answer3Attributes = [artspts, scipts, appscipts, commpts];
    };
questionFaculty.prototype.setAnswer4 = function (string, artspts, scipts, appscipts, commpts) {
    this.answer4 = string;
    this.answer4Attributes = [artspts, scipts, appscipts, commpts];
    };

    // GETTERS QUESTIONS AND ANSWERS
questionFaculty.prototype.getQuestion= function(){
    return this.questionString;
    };
questionFaculty.prototype.getAnswer1= function () {
    return this.answer1;
    };
questionFaculty.prototype.getAnswer2= function () {
    return this.answer2;
    };
questionFaculty.prototype.getAnswer3= function () {
    return this.answer3;
    };
questionFaculty.prototype.getAnswer4= function () {
    return this.answer4;
    },

    // GETTERS FOR ANSWER ATTRIBUTES
questionFaculty.prototype.getAnswer1Attributes= function(){
        return this.answer1Attributes;
    };
questionFaculty.prototype.getAnswer2Attributes= function(){
        return this.answer2Attributes;
    };
questionFaculty.prototype.getAnswer3Attributes= function(){
        return this.answer3Attributes;
    };
questionFaculty.prototype.getAnswer4Attributes= function(){
        return this.answer4Attributes;
    };



function questionArtsFaculty(){
    this.questionStringArts = "",
        this.answer1Arts = "",
        this.answer1ArtsAttributes = ["creativeWriting", "economics", "englishLiterature", "psychology", "filmActing"],
        this.answer2Arts = "",
        this.answer2ArtsAttributes = ["creativeWriting", "economics", "englishLiterature", "psychology", "filmActing"],
        this.answer3Arts = "",
        this.answer3ArtsAttributes = ["creativeWriting", "economics", "englishLiterature", "psychology", "filmActing"],
        this.answer4Arts = "",
        this.answer4ArtsAttributes = ["creativeWriting", "economics", "englishLiterature", "psychology", "filmActing"];
}

// SETTERS QUESTIONS AND ANSWERS
questionArtsFaculty.prototype.setQuestion1Arts = function (string) {
    this.questionStringArts = string;
},
    questionArtsFaculty.prototype.setAnswer1= function (string, creativeWritingPts, economicsPts, englishLiteraturePts, psychologyPts, filmACtingPts) {
        this.answer1Arts = string;
        this.answer1ArtsAttributes = [creativeWritingPts, economicsPts, englishLiteraturePts, psychologyPts, filmACtingPts]
    },
    questionArtsFaculty.prototype.setAnswer2= function (string, creativeWritingPts, economicsPts, englishLiteraturePts, psychologyPts, filmACtingPts) {
        this.answer2Arts = string;
        this.answer2ArtsAttributes = [creativeWritingPts, economicsPts, englishLiteraturePts, psychologyPts, filmACtingPts]
    },
    questionArtsFaculty.prototype.setAnswer3= function (string, creativeWritingPts, economicsPts, englishLiteraturePts, psychologyPts, filmACtingPts) {
        this.answer3Arts = string;
        this.answer3ArtsAttributes = [creativeWritingPts, economicsPts, englishLiteraturePts, psychologyPts, filmACtingPts]
    },
    questionArtsFaculty.prototype.setAnswer4= function (string, creativeWritingPts, economicsPts, englishLiteraturePts, psychologyPts, filmACtingPts) {
        this.answer4Arts = string;
        this.answer4ArtsAttributes = [creativeWritingPts, economicsPts, englishLiteraturePts, psychologyPts, filmACtingPts]
    },

    // GETTERS QUESTIONS AND ANSWERS
    questionArtsFaculty.prototype.getQuestion= function () {
        return this.questionStringArts;
    },
    questionArtsFaculty.prototype.getAnswer1= function () {
        return this.answer1Arts
    },
    questionArtsFaculty.prototype.getAnswer2= function () {
        return this.answer2Arts
    },
    questionArtsFaculty.prototype.getAnswer3= function () {
        return this.answer3Arts
    },
    questionArtsFaculty.prototype.getAnswer4 function () {
        return this.answer4Arts
    },

    // GETTERS FOR ANSWERS ATTRIBUTES
    questionArtsFaculty.prototype.getAnswer1= function() {
        return this.answer1ArtsAttributes;
    },
    questionArtsFaculty.prototype.getAnswer2= function() {
        return this.answer2ArtsAttributes;
    },
    questionArtsFaculty.prototype.getAnswer3= function() {
        return this.answer3ArtsAttributes;
    },
    questionArtsFaculty.prototype.getAnswer4= function() {
        return this.answer4ArtsAttributes;
    };

function questionScienceFaculty() {
    this.questionStringScience = "",
        this.answer1Science = "",
        this.answer1ScienceAttributes = ["chemistry", "biology", "physics", "computerScience", "math"],
        this.answer2Science = "",
        this.answer2ScienceAttributes = ["chemistry", "biology", "physics", "computerScience", "math"],
        this.answer3Science = "",
        this.answer3ScienceAttributes = ["chemistry", "biology", "physics", "computerScience", "math"],
        this.answer4Science = "",
        this.answer4ScienceAttributes = ["chemistry", "biology", "physics", "computerScience", "math"];
}

// SETTERS QUESTIONS AND ANSWERS
questionScienceFaculty.prototype.setQuestion1 = function (string) {
    this.questionStringScience = string;
},
    questionScienceFaculty.prototype.setAnswer1 = function (string, chemistryPts, biologyPts, physicsPts, compSciPts, mathPts) {
        this.answer1Science = string;
        this.answer1ScienceAttributes = [chemistryPts, biologyPts, physicsPts, compSciPts, mathPts]
    },
    questionScienceFaculty.prototype.setAnswer2 = function (string, chemistryPts, biologyPts, physicsPts, compSciPts, mathPts) {
        this.answer2Science = string;
        this.answer2ScienceAttributes = [chemistryPts, biologyPts, physicsPts, compSciPts, mathPts]
    },
    questionScienceFaculty.prototype.setAnswer3= function (string, chemistryPts, biologyPts, physicsPts, compSciPts, mathPts) {
        this.answer3Science = string;
        this.answer3ScienceAttributes = [chemistryPts, biologyPts, physicsPts, compSciPts, mathPts]
    },
    questionScienceFaculty.prototype.setAnswer4= function (string, chemistryPts, biologyPts, physicsPts, compSciPts, mathPts) {
        this.answer4Science = string;
        this.answer4ScienceAttributes = [chemistryPts, biologyPts, physicsPts, compSciPts, mathPts]
    },

    // GETTERS QUESTIONS AND ANSWERS
    questionScienceFaculty.prototype.getQuestion = function () {
        return this.questionStringScience;
    },
    questionScienceFaculty.prototype.getAnswer1 = function () {
        return this.answer1Science
    },
    questionScienceFaculty.prototype.getAnswer2 = function () {
        return this.answer2Science
    },
    questionScienceFaculty.prototype.getAnswer3 = function () {
        return this.answer3Science
    },
    questionScienceFaculty.prototype.getAnswer4 = function () {
        return this.answer4Science
    },

    // GETTERS FOR ANSWERS ATTRIBUTES
    questionScienceFaculty.prototype.getAnswer1= function() {
        return this.answer1ScienceAttributes;
    },
    questionScienceFaculty.prototype.getAnswer2= function() {
        return this.answer2ScienceAttributes;
    },
    questionScienceFaculty.prototype.getAnswer3= function() {
        return this.answer3ScienceAttributes;
    },
    questionScienceFaculty.prototype.getAnswer4= function() {
        return this.answer4ScienceAttributes;
    };


function questionsAppliedScienceFaculty() {
    this.questionStringAppliedScience = "",
        this.answer1AppliedScience = "",
        this.answer1AppliedScienceAttributes = ["civilEng", "electricalEng", "biochemEng", "mechEng", "compEng"],
        this.answer2AppliedScience = "",
        this.answer2AppliedScienceAttributes = ["civilEng", "electricalEng", "biochemEng", "mechEng", "compEng"],
        this.answer3AppliedScience = "",
        this.answer3AppliedScienceAttributes = ["civilEng", "electricalEng", "biochemEng", "mechEng", "compEng"],
        this.answer4AppliedScience = "",
        this.answer4AppliedScienceAttributes = ["civilEng", "electricalEng", "biochemEng", "mechEng", "compEng"];
}
// SETTERS QUESTION AND ANSWERS
questionsAppliedScienceFaculty.prototype.setQuestion1 = function (string) {
    this.questionStringAppliedScience = string;
},
    questionsAppliedScienceFaculty.prototype.setAnswer1= function (string, civilEngPts, electricalEngPts, biochemEngPts, mechEngPts, compEngPts) {
        this.answer1AppliedScience = string;
        this.answer1AppliedScienceAttributes = [civilEngPts, electricalEngPts, biochemEngPts, mechEngPts, compEngPts]
    },
    questionsAppliedScienceFaculty.prototype.setAnswer2= function (string, civilEngPts, electricalEngPts, biochemEngPts, mechEngPts, compEngPts) {
        this.answer2AppliedScience = string;
        this.answer2AppliedScienceAttributes = [civilEngPts, electricalEngPts, biochemEngPts, mechEngPts, compEngPts]
    },
    questionsAppliedScienceFaculty.prototype.setAnswer3= function (string, civilEngPts, electricalEngPts, biochemEngPts, mechEngPts, compEngPts) {
        this.answer3AppliedScience = string;
        this.answer3AppliedScienceAttributes = [civilEngPts, electricalEngPts, biochemEngPts, mechEngPts, compEngPts]
    },
    questionsAppliedScienceFaculty.prototype.setAnswer4= function (string, civilEngPts, electricalEngPts, biochemEngPts, mechEngPts, compEngPts) {
        this.answer4AppliedScience = string;
        this.answer4AppliedScienceAttributes = [civilEngPts, electricalEngPts, biochemEngPts, mechEngPts, compEngPts]
    },

    // GETTERS QUESTIONS AND ANSWERS
    questionsAppliedScienceFaculty.prototype.getQuestion = function () {
        return this.questionStringAppliedScience;
    },
    questionsAppliedScienceFaculty.prototype.getAnswer1 = function () {
        return this.answer1AppliedScience
    },
    questionsAppliedScienceFaculty.prototype.getAnswer2 = function () {
        return this.answer2AppliedScience
    },
    questionsAppliedScienceFaculty.prototype.getAnswer3 = function () {
        return this.answer3AppliedScience
    },
    questionsAppliedScienceFaculty.prototype.getAnswer4 = function () {
        return this.answer4AppliedScience
    },

    // GETTERS FOR ANSWERS ATTRIBUTES
    questionsAppliedScienceFaculty.prototype.getAnswer1= function() {
        return this.answer1AppliedScienceAttributes;
    },
    questionsAppliedScienceFaculty.prototype.getAnswer2= function() {
        return this.answer2AppliedScienceAttributes;
    },
    questionsAppliedScienceFaculty.prototype.getAnswer3= function() {
        return this.answer3AppliedScienceAttributes;
    },
    questionsAppliedScienceFaculty.prototype.getAnswer4= function() {
        return this.answer4AppliedScienceAttributes;
    };

function questionsCommerceFaculty() {
    this.questionStringCommerce = "",
        this.answer1Commerce = "",
        this.answer1CommerceAttributes = ["accounting", "finance", "marketing", "humanResources", "operationsAndLogistics"],
        this.answer2Commerce = "",
        this.answer2CommerceAttributes = ["accounting", "finance", "marketing", "humanResources", "operationsAndLogistics"],
        this.answer3Commerce = "",
        this.answer3CommerceAttributes = ["accounting", "finance", "marketing", "humanResources", "operationsAndLogistics"],
        this.answer4Commerce = "",
        this.answer4CommerceAttributes = ["accounting", "finance", "marketing", "humanResources", "operationsAndLogistics"];
}

// SETTERS QUESTIONS AND ANSWERS
questionsCommerceFaculty.prototype.setQuestion1 = function (string) {
    this.questionStringCommerce = string;
},
    questionsCommerceFaculty.prototype.setAnswer1= function (string, accountingPts, financePts, marketingPts, humanResourcesPts, operationsAndLogisticsPts) {
        this.answer1Commerce = string;
        this.answer1CommerceAttributes = [accountingPts, financePts, marketingPts, humanResourcesPts, operationsAndLogisticsPts]
    },
    questionsCommerceFaculty.prototype.setAnswer2= function (string, accountingPts, financePts, emarketingPts, humanResourcesPts, operationsAndLogisticsPts) {
        this.answer2Commerce = string;
        this.answer2CommerceAttributes = [accountingPts, financePts, marketingPts, humanResourcesPts, operationsAndLogisticsPts]
    },
    questionsCommerceFaculty.prototype.setAnswer3= function (string, accountingPts, financePts, marketingPts, humanResourcesPts, operationsAndLogisticsgPts) {
        this.answer3Commerce = string;
        this.answer3CommerceAttributes = [accountingPts, financePts, marketingPts, humanResourcesPts, operationsAndLogisticsPts]
    },
    questionsCommerceFaculty.prototype.setAnswer4= function (string, accountingPts, financePts, marketingPts, humanResourcesPts, operationsAndLogisticsPts) {
        this.answer4Commerce = string;
        this.answer4CommerceAttributes = [accountingPts, financePts, marketingPts, humanResourcesPts, operationsAndLogisticsPts]
    },

    // GETTERS QUESTIONS AND ANSWERS
    questionsCommerceFaculty.prototype.getQuestion = function () {
        return this.questionStringCommerce;
    },
    questionsCommerceFaculty.prototype.getAnswer1 = function () {
        return this.answer1Commerce
    },
    questionsCommerceFaculty.prototype.getAnswer2 = function () {
        return this.answer2Commerce
    },
    questionsCommerceFaculty.prototype.getAnswer3 = function () {
        return this.answer3Commerce
    },
    questionsCommerceFaculty.prototype.getAnswer4 = function () {
        return this.answer4Commerce
    },

    // GETTERS FOR ANSWERS ATTRIBUTES
    questionsCommerceFaculty.prototype.getAnswer1= function() {
        return this.answer1CommerceAttributes;
    },
    questionsCommerceFaculty.prototype.getAnswer2= function() {
        return this.answer2CommerceAttributes;
    },
    questionsCommerceFaculty.prototype.getAnswer3= function() {
        return this.answer3CommerceAttributes;
    },
    questionsCommerceFaculty.prototype.getAnswer4= function() {
        return this.answer4CommerceAttributes;
    };




module.exports = {
    questionFaculty: questionFaculty,
    questionArtsFaculty: questionArtsFaculty,
    questionScienceFaculty: questionScienceFaculty,
    questionAppliedScienceFaculty: questionsAppliedScienceFaculty,
    questionCommerceFaculty: questionsCommerceFaculty
};
