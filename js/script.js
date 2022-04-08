//debug
console.log('JS OK!')

/*

MILESTONE 1
Stampare all'interno di una lista, un item per ogni todo.
Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.

MILESTONE 2
Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene 
rimosso dalla lista.

MILESTONE 3
Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, 
il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene 
aggiunto alla lista dei todo esistenti.
*/


const list = [
    {
        text: "Fare l'esercizio del pomeriggio",
        done: false,
    },
    {
        text: 'Giocare ad Halo Infinite',
        done: false,
    },
    {
        text: 'Portare fuori il cane',
        done: false,
    },
    {
        text: 'Uscire con gli amici',
        done: false,
    },
    {
        text: 'Guardare il nuovo episodio di One Piece',
        done: false,
    },
];

const app = new Vue({
    el: '#root',
    data: {
        list,
        newTask: '',
    },

    methods: {
        taskClicked(index) {
            //console.log(index);
            this.list[index].done = true;
        },
        deleteTask(index) {
            const filteredArray = this.list.filter(
                (item, i) => {
                    return index !== i;
                }
            )
            console.table(filteredArray);
            this.list = filteredArray;
        },
        addNewTask() {
            const newTask = {
                text: this.newTask,
                done: false
            }
            this.list.push(newTask)
            this.newTask = '';
        }
    }
});