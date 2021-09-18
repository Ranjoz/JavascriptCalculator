class  Calculator {
    //constructor will take previous and cureent operand
    //we need to know where to place our display tesxt for our calculator
    constructor(previousOperandTextElement,currentOperandTextElement){
        this.previousOperandTextElement=previousOperandTextElement
        this.currentOperandTextElement=currentOperandTextElement
        //call clear function once Calculator is created
        this.clear();
    }

    //clear diffrent variables 
    clear (){
        this.currentOperand = ''
        this.previousOperand =''
        this.operation = undefined

    }
//remove a single number
    delete(){


    }

    //appends anumber everytime a user clicks it
    appendNumber(number){
       // debugger
       if (number==='.'&& this.currentOperand.includes('.') ) return
this.currentOperand = this.currentOperand.toString() + number.toString();

    }

    chooseOperation(operation){
       // debugger
        if(this.currentOperand === '') return
        if(this.previousOperand !== '') {

            this.compute()
        }
        this.operation = operation
        this.previousOperand = this.currentOperand
        this.currentOperand= ''

    }

    compute(){

let computation
const prev = parseFloat(this.previousOperand)
const current = parseFloat(this.currentOperand)
if (isNaN(prev) || isNaN(current)) return

switch (this.operation){

    case '+':
        computation = prev + current
        break
    case '-':
        computation = prev - current
        break
    case '*':
        computation = prev * current
        break
    case '÷':
        computation = prev / current
        break
    default:
        return

}

this.currentOperand = computation
this.operation =undefined
this.previousOperand = ''


    }

    updateDisplay(){
        //debugger;
        this.currentOperandTextElement.innerText = this.currentOperand
        this.previousOperandTextElement.innerText = this.previousOperand
    }
}



const numberButtons = document.querySelectorAll('[data-number]')
 const operationButtons = document.querySelectorAll('[data-operation]')
 const equalsButton = document.querySelector('[data-equals]');
 const deleteButton = document.querySelector('[data-delete]');
 const allClearButton = document.querySelector('[data-all-clear]');
 const previousOperandTextElement = document.querySelector('[data-previous-operand]');
 const currentOperandTextElement = document.querySelector('[data-current-operand]');

 const calculator = new Calculator(previousOperandTextElement,currentOperandTextElement)

  numberButtons.forEach(button =>{

    button.addEventListener('click',() =>{
        //debugger;
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay();
    })
  })

  operationButtons.forEach(button =>{

    button.addEventListener('click',() =>{
        //debugger;
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay();
    })
  })


  equalsButton.addEventListener('click', button => {
    debugger;
      calculator.compute()
      calculator.updateDisplay()
  })