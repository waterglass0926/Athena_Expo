// models/Continent.js

class Continent {
    constructor(id, index, name, image, countries, population, cities, photos) {
        this.id = id,
            this.index = index,
            this.name = name;
        this.image = image;
        this.countries = countries;
        this.population = population;
        this.cities = cities;
        this.photos = photos;
    }

    static fromSnapshot(snapshot) {
        const data = snapshot.data();
        return new Continent(
            snapshot.id,
            data.index,
            data.name,
            data.image,
            data.countries,
            data.population,
            data.cities,
            data.photos
        );
    }

    toJSON() {
        return {
            id: this.id,
            index: this.index,
            name: this.name,
            image: this.image,
            countries: this.countries,
            population: this.population,
            cities: this.cities,
            photos: this.photos
        };
    }
}

module.exports = Continent;
