//ERROR: no multipli inheritance
// class User extends Tagged, Timesstamped{
// } 

/**
 * A mixin is a function that
 * 1. takes a constructor,
 * 2. creates a class that extends that constructor with new functionality
 * 3. return the new class
 */

// Needed for all mixins
type Constructor<T = {}> = new (...args: any []) => T;

// Exemplo mixins

//A mixin that adds a property
//Extende a classe Constructor ao mesmo passo em que define o seu tipo
//Define o retorno como sendo do tipo TBase
function Timestamped<TBase extends Constructor>(Base: TBase) {
    return class extends Base {
        timestamp = Date.now();
    };
}

//a mixin that adds a property and methods 
function Activable<TBase extends Constructor>(Base: TBase) {
    return class extends Base {
        public isActivated = false;

        activate() {
            this.isActivated = true;
        }

        deactivate() {
            this.isActivated = false;
        }
    }
}

//Usage to compose classes

//Simple class
class User {
    name = '';
}

const TimestampedUser = Timestamped(User);

//User that is timestamped and activatable
const TimestampedActivatableUser = Timestamped(Activable(User));

//Using to composed classes

const TimestampedUserExample = new TimestampedUser();
const TimestampedActivatableUserExample = new TimestampedActivatableUser();
console.log(TimestampedUserExample.timestamp)
console.log(TimestampedActivatableUserExample.activate())
console.log(TimestampedActivatableUserExample.isActivated)
console.log(TimestampedActivatableUserExample.deactivate())
console.log(TimestampedActivatableUserExample.isActivated)


