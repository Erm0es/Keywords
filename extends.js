/*The extends keyword is used in class declarations or class expressions to create a class that is a child of another class.*/

class DateFormatter extends Date{
    getFormattedDate(){
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul','Aug','Sep','Oct','Nov','Dec'];
        return `${this.getDate()}-${months[this.getMonth()]}-${this.getFullYear()}`;
    }
}

console.log(new DateFormatter('August 19, 1975 23:15:30').getFormattedDate());
//expected output: "19-Aug-1975"
