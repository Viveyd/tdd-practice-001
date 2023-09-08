export default class Calculator{

    add(...args){
        return args.reduce((sum, n) => {
            if(Array.isArray(n)) return sum + n.reduce((acc, cur) => {
               return Array.isArray(cur) ? acc + this.add(cur) : acc + cur;
            }, 0);
            return sum + n;
        }, 0);
    }

    subtract(...args){
        if(Array.isArray(args[0])) args[0] = this.subtract(... args[0]);
        return args.reduce((diff, n) => Array.isArray(n) ? diff - this.subtract(...n): diff - n);
    }

    multiply(...args){
        return args.reduce((prod, n) => {
            if(Array.isArray(n)){
                const multiplier = n.reduce((acc, cur) => Array.isArray(cur) ? acc * this.multiply(cur) : acc * cur);
                return prod * multiplier;
            }
            else return prod * n;
        }, 1);
    }

    divide(...args){
        return args.reduce((quot, n) => {
            if(Array.isArray(n)){
                const divisor = n.reduce((acc, cur) => Array.isArray(cur) ? acc / this.divide(cur) : acc / cur);
                console.log(divisor);
                return quot / divisor;
            }
            else return quot / n;
        });
    }
}