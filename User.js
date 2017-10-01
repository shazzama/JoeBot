
var user = {
    artsPts : 0,
    sciencePts : 0,
    appliedSciencePts : 0,
    commercePts : 0,
    matchedFaculty : null,

    addArtsPts: function (num) {
        this.artsPts += num;
    },

    addSciencePts : function (num) {
        this.sciencePts += num;
    },

    addAppliedSciencePts : function (num) {
        this.appliedSciencePts += num;
    },

    addCommercePts : function (num) {
        this.commercePts += num;
    },

    chooseFaculty: function(){
        var max = 0;
        matchedFaculty = null;
        if (this.artsPts > max){
            max = this.artsPts;
            matchedFaculty = "Arts"
        }
        if (this.sciencePts > max){
            max = this.sciencePts;
            matchedFaculty = "Science"
        }
        if (this.appliedSciencePts > max){
            max = this.appliedSciencePts;
            matchedFaculty = "Applied Sciences"
        }
        if (this.commercePts > max){
            max = this.commercePts;
            matchedFaculty = "Commerce"
        }
    }
}

var userArts = {
    creativeWritingsPts : 0,
    economicsPts : 0,
    englishLiteraturePts :0,
    psychologyPts: 0,
    filmActingPts: 0,

    addCreativeWritingPts: function (num) {
        this.creativeWritingsPts += num;
    },
    addEconomicsPts: function (num) {
        this.economicsPts += num;
    },
    addEnglishLiteraturePts: function (num) {
        this.englishLiteraturePts += num;
    },
    addPsychologyPts: function (num) {
        this.psychologyPts += num;
    },
    addFilmActingPts: function (num) {
        this.filmActingPts += num;
    }
}

// TODO
var userScience = {

}

// TODO
var userAppliedScience = {

}

// TODO
var userCommerce = {

}





