while(true)
{
    let sign = window.prompt("What operation do you want to do? \n1. + \n2. - \n3. / \n4. * \n5. %");
    
    let isFound = false;

    let allowed = ['1', '2', '3', '4', '5', '+', '-', '/', '*', '%']
    allowed.forEach( element => {
        if(sign === element)
        {
            isFound = true;
        }
    });

    if(!isFound)
    {
        alert(`${sign} is not a valid operation.`)
        continue;
    }

    let num1 = parseInt(window.prompt("Enter your first number ==>"));
    let num2 = parseInt(window.prompt("Enter your second number ==>"));

    if(sign === '+' || sign === '1')
    {
        alert('Your answer is = ' + (num1 + num2));
    }
    else if(sign === '-' || sign === '2')
    {
        alert('Your answer is = ' + (num1 - num2));
    }
    else if(sign === '/' || sign === '3')
    {
        alert('Your answer is = ' + (num1 / num2));
    }
    else if(sign === '*' || sign === '4')
    {
        alert('Your answer is = ' + (num1 * num2));
    }
    else if(sign === '%' || sign === '5')
    {
        alert('Your answer is = ' + (num1 % num2));
    }

    let isQuit = window.prompt("Do you want quit? \n\nEnter 'y' for yes & n 'no'");
    if(isQuit === 'y')
    {
        alert("Good Bye!")
        break;
    }else if(isQuit === 'n')
    {
        continue;
    }
    else
    {
        alert('That did not make any sense, shutting down...');
        break;
    }

}