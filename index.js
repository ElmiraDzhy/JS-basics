'use strict';

//PROTOTYPES

function Leadder ( currentStep = 0){
  this.step = currentStep;
}

function LeadderProto(){
  this.up = function(){
    this.step++;
    return this.step;
  }

  this.down = function(){
    this.step--;
    return this.step;

  }

  this.showStep =function (){
    return this.step;
  }
}

Leadder.prototype = new LeadderProto();

const leadder = new Leadder();
