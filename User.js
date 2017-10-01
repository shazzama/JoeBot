
 function User() {
    this.artsPts = 0
    this.sciencePts = 0
    this.appliedSciencePts = 0
    this.commercePts = 0
    this.matchedFaculty = null

}

User.prototype.addArtsPts= function (num) {
    this.artsPts += num;
};

User.prototype.addSciencePts = function (num) {
    this.sciencePts += num;
};

User.prototype.addAppliedSciencePts = function (num) {
    this.appliedSciencePts += num;
};

User.prototype.addCommercePts = function (num) {
    this.commercePts += num;
};

User.prototype.chooseFaculty= function(){
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

function userArts () {
    this.creativeWritingsPts = 0
    this.economicsPts = 0
    this.englishLiteraturePts = 0
    this.psychologyPts = 0
    this.filmActingPts = 0
  }

    userArts.prototype.addCreativeWritingPts: function (num) {
        this.creativeWritingsPts += num;
    },
    userArts.prototype.addEconomicsPts: function (num) {
        this.economicsPts += num;
    },
    userArts.prototype.addEnglishLiteraturePts: function (num) {
        this.englishLiteraturePts += num;
    },
    userArts.prototype.addPsychologyPts: function (num) {
        this.psychologyPts += num;
    },
    userArts.prototype.addFilmActingPts: function (num) {
        this.filmActingPts += num;
    }



function userScience () {
  this.Chemistry = 0
  this.Biology = 0
  this.Physics = 0
  this.ComputerScience = 0
  this.Math = 0
}

userScience.prototype.addChemistryPts: function (num) {
    this.ChemistryPts += num;
},
userScience.prototype.addBiologyPts: function (num) {
    this.BiologyPts += num;
},
userScience.prototype.addPhysicsPts: function (num) {
    this.PhysicsPts += num;
},
userScience.prototype.addComputerSciencePts: function (num) {
    this.ComputerSciencePts += num;
},
userScience.prototype.addMathPts: function (num) {
    this.MathPts += num;
}


function userAppliedScience () {
    this.CivilEng = 0
    this.BiochemEng = 0
    this.ComputerEng = 0
    this.electricalEng = 0
    this.mechanicEng = 0
  }

  userScience.prototype.addCivilEngPts: function (num) {
      this.CivilEngPts += num;
  },
  userScience.prototype.addBiochemEngPts: function (num) {
      this.BiochemEngPts += num;
  },
  userScience.prototype.addComputerEngPts: function (num) {
      this.ComputerEngPts += num;
  },
  userScience.prototype.addelectricalEngPts: function (num) {
      this.electricalEngPts += num;
  },
  userScience.prototype.addmechanicEngPts: function (num) {
      this.mechanicEngPts += num;
  }
}

function userCommerce () {
  this.accounting = 0
  this.finance = 0
  this.marketing = 0
  this.operationsAndLogistics = 0
  this.mechanicEng = 0
  }

  userScience.prototype.addaccountingPts: function (num) {
    this.accountingPts += num;
  },
  userScience.prototype.addfinancePts: function (num) {
    this.financePts += num;
  },
  userScience.prototype.addmarketingPts: function (num) {
    this.marketingPts += num;
  },
  userScience.prototype.addoperationsAndLogisticsPts: function (num) {
    this.operationsAndLogisticsPts += num;
  },
  userScience.prototype.addmechanicEngPts: function (num) {
    this.mechanicEngPts += num;
  }
}



 module.exports = User;
