let choice = prompt('What would you like to do?');

const list = [];

while (choice !== 'quit' && choice !== 'q') {

    if (choice === 'new') {
        let todo = prompt('Add a todo:');
        list.push(todo);
        console.log(todo, ' added to the list!');

    } else if (choice === 'list') {
        console.log('***********')
        for(let i = 0; i < list.length; i ++) {
            console.log(`${i}: ${list[i]}`);
        }
        console.log('***********')

    } else if (choice === 'delete') {
        let removing = parseInt(prompt('What number do you want to remove?'));
        while (list.length - 1  < removing || removing < 0){
            removing = parseInt(prompt('That number is not on the list, please try again.'));
        }
        list.splice(removing, 1);
        console.log('Todo removed:', removing);
    }
    choice = prompt('What would you like to do?');
}

alert('App was closed.');