class Music {
  constructor(title, singer, img, file) {
    this.title = title;
    this.singer = singer;
    this.img = img;
    this.file = file;
  }

  getName() {
    return this.title + " - " + this.singer;
  }
}

const musicList = [
  new Music("Lily", "Alan Walker", "1.jpg", "1.mp3"),
  new Music("On my way", "Alan Walker", "2.jpg", "2.mp3"),
];
