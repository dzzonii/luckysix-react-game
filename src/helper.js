var self = module.exports = {
    addClass: (draw, number) => {
        if (draw.indexOf(number) !== - 1) {
            return "match animated flash"
        }
        else {
            return "default"
        }
    },
    getRandom: () => {
        const min = 1;
        const max = 48;
        return Math.floor(Math.random() * (max - min)) + min;
    },
    getRandomCombination: (size) => {
        let random = 0;
        let joined = [];

        while (joined.length < size) {
            random = self.getRandom()
            if (joined.indexOf(random) === -1) {
                joined.push(random);
            }
            else {
                random = self.getRandom()
            }
        }
        return joined
    },
    makeCopy: (array) => {
        return array.map(item => ({ ...item, numbers: [...item.numbers] }))
    }
}