import React, {Component} from 'react';

class RegularClass {}
class ComponentClass extends Component {}

const regularClassInstance = new RegularClass();
const componentClassInstance = new ComponentClass();

console.log('regularClassInstance', regularClassInstance);
console.log('componentClassInstance', componentClassInstance);


class App extends Component {

    render(){
        return (
            <div>
                <h1>Iam kollu</h1>
                <p>Hello kollu1</p>
                <p>bhardwaja</p>
            </div>
        )
    } //render end

} //class end

export default App;