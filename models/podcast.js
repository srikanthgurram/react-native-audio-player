class Podcast {
    constructor(id, title, podacastUrl, artWork, artist, duration, categoryIds){
        this.id = id,
        this.title = title,
        this.url = podacastUrl,
        this.artwork = artWork,
        this.artist = artist,        
        this.duration = duration,
        this.categoryIds = categoryIds
    }
}

export default Podcast