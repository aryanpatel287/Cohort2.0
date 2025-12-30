// Day33 Tasks

// let n = Number(prompt("Enter the Number (n): "))
//Tried fibo
// let fib = []
// for (let i = 0; i <= n; i++) {
//     if (i === 0 || i === 1) {
//         fib.push(i)
//     } else {
//         fib.push((fib[i - 1] + fib[i - 2]))
//     }
// }
// console.log(fib)



//table of N till 10
// for(let i=1;i<=10;i++){
//     console.log(`${n} x ${i} = ${n*i}`)
// }

// Checks the how many digits are greater than j between 1 to n
// let j = Number(prompt("Enter the number that you want to know to the count of numbers greater than j btw n and 1 , J = "))
// let count = 0 ;
// for(let i=1;i<=n;i++){
//     if(i<8){
//     count++;
//     }
// }
// console.log(`${count} numbers are greater than ${j} between 1 and ${n}` )



// User password Authentication (3 trials)
// SavedPass = prompt("Set the Password first : ")
// let trials = 3;
// while (true) {
//     if (trials === 0) {
//         alert("Account locked.Please try later.")
//         break;
//     }
//     CurrentPass = prompt("Enter the Password you set before : ")
//     if (CurrentPass === SavedPass) {
//         alert("Password Entered is correct.")
//         break;
//     }
//     else {
//         if (trials === 1) {
//             alert("Password Entered is incorrect.\nAccount locked.Please try later. Please try later.")
//             break;
//         }
//         alert(`Password Entered is incorrect.\nPlease Try again (${trials - 1} trails left) `)
//         trials--;
//     }
// }



// User input stops at "stop" and counts yes word
// let yesCount = 0;
// let sentenceArr = []
// while (true) {
//     let word = prompt("Enter the word or sentence").trim().toLowerCase();
//     sentenceArr.push(...word.split(" "))
//     console.log(sentenceArr)
//     if (sentenceArr.includes("yes")) {
//         yesCount++;
//     }
//     if (sentenceArr.includes("stop")) {
//         console.log(sentenceArr)
//         alert(`Loop stopped. Yes is word is used ${yesCount} times`)
//         break;
//     }
//     else {
//         continue
//     }

// }



function IntegerInput(promptToUser = "Enter a number") {
    let num;
    let repititionCount = 0;
    while (true) {
        if (repititionCount === 3) {
            let userChoice = confirm("Do you want to continue entering a number one more time?")
            if (userChoice) {
                repititionCount--;
            } else {
                break
            }
        }
        repititionCount++;
        num = prompt(`${promptToUser}`)
        console.log(`IntegerInput value : ${num}`)
        if (num == null) {
            let userChoice = confirm(`Click "OK" to exit`)
            if (userChoice) {
                num = null
                break
            } else {
                continue
            }
        }
        else {
            num = num.trim()
            if (isNaN(num)) {
                alert("Please enter the number only one integer without space.")
                continue
            }

            num = Number(num)
            break
        }

    }
    console.log("IntegerInput function is done executing")
    return num
}

// Print numbers divisible by 7 from 1 to 50
// alert("Print numbers divisible by J(Number) from 1 to a given number in Console")
// let num = IntegerInput();
// alert("Enter J (Number)")
// let j = IntegerInput();
// let divisibleNumsArr=[];
// for(i=1;i<=num ;i++){
//     if(i%j==0){
//         divisibleNumsArr.push(i)
//     }
// }

// console.log(`Numbers is divisble by 7${j} between 1 to ${num} are :  ${divisibleNumsArr}`)



// 14. Sum of all odd numbers from 1 to 30
// Add only odd numbers. Print final sum.

// alert("Sum of all odd numbers from 1 to N")
// let n = IntegerInput();
// let sum = 0;
// for(i=1;i<=n;i++){
//     if(i%2!=0){
//         sum += i
//     }
// }
// console.log(`Sum of All odd integers from 1 to ${n} is ${sum}`)




// 15 Keep asking number until user enters an even number
// Use while loop. Stop only if input is even.
// alert("Keep asking number until user enters an even number.\nUse while loop. Stop only if input is even.")
// while (true) {
//     let n = IntegerInput()
//     if (n % 2 == 0) {
//         alert("Entered Number is even")
//         break
//     }
//     else {
//         alert("Please Enter an Even number")
//     }

// }



// 16. Print numbers between two user inputs
// Input start and end using prompt() → print all between.

// alert("Print numbers between two user inputs.\nInput start and end using prompt() → print all between.")
// let firstNum=IntegerInput()
// let secondNum=IntegerInput()
// let NumsArr = []
// for(i=firstNum;i<=secondNum;i++){
//     NumsArr.push(i)    
// }
// console.log(`Numbers between ${firstNum} and ${secondNum} are : ${NumsArr}` )




// 17. Print only first 3 odd numbers from 1 to 20
// Use loop. Stop with break after 3 odd prints.

// alert("17. Print only first 3 odd numbers between 2 numbers.\n Use loop. Stop with break after 3 odd prints.")
// let firstNum=IntegerInput()
// let secondNum=IntegerInput()
// let oddCount=0;
// for(i=firstNum;i<=secondNum;i++){
//     if(oddCount===3){
//         break
//     }
//     if(i%2!=0){
//         console.log(i)
//         oddCount++
//         continue
//     }    
// }



// 18. Ask user 5 numbers. Count how many are positive
// Use loop + condition + counter.

// alert("18. Ask user 5 numbers. Count how many are positive.\nUse loop + condition + counter.")
// alert("You will be asked for 5 numbers contiuously.\nEnter one by one(how many numbers you are entering will not be shown)")
// let postiveCount=0
// for(i=0;i<5;i++){
//     let n = IntegerInput()
//     if(n>0){
//         postiveCount++
//     }
// }
// alert(`${postiveCount} numbers are positive. `)


// 19. ATM Simulator – Allow 3 withdrawals
// Start with ₹1000 balance. Ask withdrawal amount 3 times.
// If enough balance → deduct
// Else → print “Insufficient balance”

alert("19. ATM Simulator – Allow 3 withdrawals.\nStart with ₹1000 balance. Ask withdrawal amount 3 times.\nIf enough balance → deduct.\nElse → print “Insufficient balance”")

alert("This is a ATM simulator")
let actionNum;
let AccBalance = 1000
while (true) {
    actionNum = IntegerInput("Enter the Numbers of action that you want to execute.\n1.Check Balance\n2.Widthdraw Money\n3.Deposit Money\n4.Exit")
    console.log(`switch case : ${actionNum}`)

    if (actionNum == null) {
        console.log(`We are in Null case`);
        break;
    }
    //Actions for the Atm
    switch (actionNum) {
        case 1:
            alert(`Available Balance in your account is ${AccBalance}Rs.`)
            break;

        case 2:
            while (true) {
                let WidthdrawAmt = IntegerInput("Enter the amount you want to widthdraw.");
                if(WidthdrawAmt == null){
                    break;
                }
                if (WidthdrawAmt <= 0) {
                    let userChoice = confirm("Widthdrawal amount cannot be less than or zero.\nDo you wish to continue?")
                    if (userChoice) {
                        continue
                    } else { break }
                }
                else {
                    if (WidthdrawAmt <= AccBalance) {
                        AccBalance -= WidthdrawAmt
                        alert(`${WidthdrawAmt}Rs Widthdrawed.\n Available balance is ${AccBalance}Rs`)
                        break
                    }
                    else {
                        alert(`Insufficient Balance.Please Check your Account Balance`)
                        break
                    }
                }
            }
            break;

        case 3:
            while (true) {
                let DepositAmt = IntegerInput("Enter the amount you want to Deposit.");
                if(DepositAmt == null){
                    break;
                }
                if (DepositAmt <= 0) {
                    let userChoice = confirm("Deposit amount cannot be less than or zero.\nDo you wish to continue?")
                    if (userChoice) {
                        continue
                    } else { break }
                }
                else {
                    AccBalance += DepositAmt
                    alert(`${DepositAmt}Rs Deposited.\n Available Balance is ${AccBalance}Rs`)
                    break
                }
            }
            break;

        case 4:
            alert("Thank you for using our Atm.\nExiting...")
            break;



        default:
            alert("Invalid choice. Please enter a number between 1 and 4.");


    }


    //Breaking the Loop
    if (actionNum === 4) {
        break
    }
}

