// models/Country.js

class Country {
    constructor(id, index, name, image, population, capital, currency) {
        this.id = id,
            this.index = index,
            this.name = name;
        this.image = image;
        this.population = population;
        this.capital = capital;
        this.currency = currency;
    }

    static fromSnapshot(snapshot) {
        const data = snapshot.data();
        return new Country(
            snapshot.id,
            data.index,
            data.name,
            data.image,
            data.population,
            data.capital,
            data.currency
        );
    }

    toJSON() {
        return {
            id: this.id,
            index: this.index,
            name: this.name,
            image: this.image,
            population: this.population,
            capital: this.capital,
            currency: this.currency
        };
    }
}

module.exports = Country;
