import Category from '../models/category';
import Podcast from '../models/podcast'

export const CATEGORIES = [
  new Category('c1', 'Telugu Comedy', '#f5428d'),
  new Category('c2', 'Movie Audo Clips', '#f54242'),
  new Category('c3', 'Music', '#f5a442'),
  new Category('c4', 'Devotional', '#f5d142'),
  new Category('c5', 'Pravachanas', '#368dff'),
  new Category('c6', 'Episodes', '#41d95d'),
  new Category('c7', 'Channels', '#9eecff'),
  new Category('c8', 'Radio', '#b9ffb0'),
  new Category('c9', 'Tech Talks', '#ffc7ff'),
  new Category('c10', 'Others', '#47fced')
];

export const PODCASTS = [
  new Podcast(
    'p1110', 
    'Adavi Rambabu (Adavi Manishi) Hilarious Comedy Scene - Nani, Narsingh Yadhav', 
    "https://firebasestorage.googleapis.com/v0/b/podcasts-617e4.appspot.com/o/manual_upload%2Faudio%2FAdavi%20Rambabu%20(Adavi%20Manishi)%20Hilarious%20Comedy%20Scene%20-%20Nani%2C%20Narsingh%20Yadhav.mp3?alt=media&token=bd250c66-955f-412d-b419-9378cfdfa471",
    "https://firebasestorage.googleapis.com/v0/b/podcasts-617e4.appspot.com/o/manual_upload%2Fimages%2Fadavi%20rambabu.jpg?alt=media&token=a58a5ef2-8077-400d-9d9d-ed1aacc076b9",
    "Nani",
    141,
    ['c1']    
  ),
  new Podcast(
    'p1111', 
    'Bang - cock (Jabardasth Venu) Hilarious Comedy Scene With Chamki..', 
    "https://firebasestorage.googleapis.com/v0/b/podcasts-617e4.appspot.com/o/manual_upload%2Faudio%2FBang%20-%20cock%20(Jabardasth%20Venu)%20Hilarious%20Comedy%20Scene%20With%20Chamki...mp3?alt=media&token=a9a0831f-fe27-484c-abdc-69583ecf0e39",
    "https://firebasestorage.googleapis.com/v0/b/podcasts-617e4.appspot.com/o/manual_upload%2Fimages%2FBang%20Cock.jpg?alt=media&token=0512707f-3714-4c55-9c45-4110b77d6bc7",
    "Nani",
    173,
    ['c1']    
  ),
  new Podcast(
    'p1112', 
    'Nelavanka Movie - Comedy Scenes Suthi Velu, Suthi Veerabhadra Rao', 
    "https://firebasestorage.googleapis.com/v0/b/podcasts-617e4.appspot.com/o/manual_upload%2Faudio%2FNelavanka%20Movie%20-%20Comedy%20Scenes%20Suthi%20Velu%2C%20Suthi%20Veerabhadra%20Rao.mp3?alt=media&token=77f993a0-33cb-4b13-b175-2d605b953c42",
    "https://firebasestorage.googleapis.com/v0/b/podcasts-617e4.appspot.com/o/manual_upload%2Fimages%2Fnelavanka%20comedy.jpg?alt=media&token=dd9d9184-e265-4704-b28e-4c5d2e13719f",
    "Jandhyala",
    190,
    ['c1', 'c2']
  ),
  new Podcast(
    'p1113', 
    'Jandhyala Comedy Scenes - Suthi Veerabhadra Rao Stroy (Madyataragati Vedava Nayala) - Brahmanand', 
    "https://firebasestorage.googleapis.com/v0/b/podcasts-617e4.appspot.com/o/manual_upload%2Faudio%2FJandhyala%20Comedy%20Scenes%20-%20Suthi%20Veerabhadra%20Rao%20Stroy%20(Madyataragati%20Vedava%20Nayala)%20-%20Brahmanand.mp3?alt=media&token=5a3130fb-b494-4df3-a459-b8117d2cf81d",
    "https://firebasestorage.googleapis.com/v0/b/podcasts-617e4.appspot.com/o/manual_upload%2Fimages%2Fjandhyala%20comedy.jpg?alt=media&token=43e7824b-7282-4f45-a7b9-6118d81e1c56",
    "Nani",
    141,
    ['c1', 'c2']    
  ),    
];

