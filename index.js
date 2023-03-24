'use strict';

//PROTOTYPES

function Leadder ( currentStep = 0){
  this.step = currentStep;
}

function LeadderProto(){
  this.up = function(){
    this.step++;
    return this;
  }

  this.down = function(){
    this.step--;
    return this;

  }

  this.showStep =function (){
    return this.step;
  }
}

Leadder.prototype = new LeadderProto();

const leadder = new Leadder();

console.log(leadder.up().up().up().down().showStep()); //chaining (chain - цепочка)