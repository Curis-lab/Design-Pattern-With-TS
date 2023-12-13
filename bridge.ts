interface IResource{
    snippet():string,
    title():string,
    image():string
}

class LongForm{
    #resource: IResource;
    constructor(resource: IResource){
        this.#resource = resource
    }
    show(){
        return {
            snippet: this.#resource.snippet(),
            image: this.#resource.image()
        }
    }
}

class ArtistResource implements IResource{
    snippet(): string {
        return 'ArtistResource snippet'
    }
    title(): string {
        return 'ArtistResource title'
    }
    image(): string {
        return 'ArtistResource image'
    }
}

const long_artist = new LongForm(new ArtistResource())

console.log(long_artist.show())