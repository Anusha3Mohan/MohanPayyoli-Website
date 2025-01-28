import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Gallery from './Pages/Gallery';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Bio from './Pages/Bio'; 
import News from './Pages/News'; 
import Cart from './Pages/Cart'; 
import Art from './Pages/Arts';
import Awards from './Pages/Awards';
import Paintings from './Pages/Paintings';
import Photos from './Pages/Photos';
import './App.css';
import ScrollToTop from './Components/ScrollToTop';
import FilterAll from './Pages/FilterAll';
import Achievement from './Pages/Achievement';
import AwardPhotos from './Pages/AwardPhotos';
import Commercial from './Pages/Commercial';
import Faces from './Pages/Faces';
import Food from './Pages/Food';
import General from './Pages/General';
import Travel from './Pages/Travel';
import Sports from './Pages/Sports';
import Image1 from './Pages/Burj/Image1';
import Image2 from './Pages/Burj/Image2';
import Image3 from './Pages/Burj/Image3';
import Image4 from './Pages/Burj/Image4';
import Image5 from './Pages/Burj/Image5';
import Image6 from './Pages/Burj/Image6';
import Image7 from './Pages/Burj/Image7';
import Image8 from './Pages/Burj/Image8';
import Image9 from './Pages/Burj/Image9';
import Image10 from './Pages/Burj/Image10';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Oilpainting from './Pages/Oilpainting';
import Digitalpainting from './Pages/Digitalpainting';
import Scribbleart from './Pages/Scribbleart';
import Watercolor from './Pages/Watercolor';
import Pencildrawing from './Pages/Pencildrawing';
import Checkout from './Pages/Checkout';
import AdminDashboard from './Components/AdminDashboard';
import AdminLogin from './Pages/AdminLogin';
import AdminRegister from './Pages/AdminRegister';
import AdminHome from './Pages/AdminHome';
import BioPhotos from './Pages/BioPhotos';
import AdminHomepage from './Pages/AdminHomepage';
import Manage from './Pages/Manage';
import HomeAdmin from './Pages/HomeAdmin';
import AdminBio from './Pages/AdminBio';
import AdminGallery from './Pages/AdminGallery';
import AdminNews from './Pages/AdminNews';
import AdminAwards from './Pages/AdminAwards';
import AdminArts from './Pages/AdminArts';
import AdminPhotoorders from './Pages/AdminPhotoorders';
import AdminArtorders from './Pages/AdminArtorders';
import AdminMessages from './Pages/AdminMessages';
import AdminRecentphotos from './Pages/AdminRecentphotos';
import AdminRecentarts from './Pages/AdminRecentarts';
import EditSection from './Pages/EditSection';
import AdminAchievement from './Pages/AdminAchievement';
import AdminAwardphotos from './Pages/AdminAwardphotos';
import AdminCommercial from './Pages/AdminCommercial';
// import { CartProvider } from './Pages/CartContext';




const App = () => {
  return (
    // <CartProvider>
    <Router>
      <div className="app">
        <Header />
        <Routes>
          
        <Route path="/" element={<Home />} />
        <Route path="/bio" element={<Bio />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/news" element={<News />} />
          <Route path="/awards" element={<Awards />} />
          <Route path="/photos" element={<Photos />} />
          <Route path="/paintings" element={<Paintings />} />
          <Route path="/all" element={<FilterAll />} />
          <Route path="/achievement" element={<Achievement/>} />
          <Route path="/award-photos" element={<AwardPhotos/>} />
          <Route path="/commercial" element={<Commercial/>} />
          <Route path="/faces" element={<Faces/>} />
          <Route path="/food" element={<Food/>} />
          <Route path="/general" element={<General />} />
          <Route path="/Travel" element={<Travel/>} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/burj/image1" element={<Image1 />} />
          <Route path="/burj/image2" element={<Image2 />} />
          <Route path="/burj/image3" element={<Image3 />} />
          <Route path="/burj/image4" element={<Image4 />} />
          <Route path="/burj/image5" element={<Image5 />} />
          <Route path="/burj/image6" element={<Image6 />} />
          <Route path="/burj/image7" element={<Image7 />} />
          <Route path="/burj/image8" element={<Image8 />} />
          <Route path="/burj/image9" element={<Image9 />} />
          <Route path="/burj/image10" element={<Image10 />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/oil-painting" element={<Oilpainting />} />
          <Route path="/digital-painting" element={<Digitalpainting />} />
          <Route path="/scribble-art" element={<Scribbleart />} />
          <Route path="/water-colour" element={<Watercolor />} />
          <Route path="/pencil-drawing" element={<Pencildrawing/>} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout/>} />
          <Route path="/art" element={<Art />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/register" element={<AdminRegister/>} />
          <Route path="/admin/home" element={<AdminHome />} />
          <Route path="/bio-photos" element={<BioPhotos/>} />
          <Route path="/admin/homepage" element={<AdminHomepage/>} />
          <Route path="/admin/manage" element={<Manage/>} />
          <Route path="/admin/homeadmin" element={<HomeAdmin/>} />
          <Route path="/admin/bio" element={<AdminBio/>} />
          <Route path="/admin/gallery" element={<AdminGallery/>} />
          <Route path="/admin/news" element={<AdminNews/>} />
          <Route path="/admin/awards" element={<AdminAwards/>} />
          <Route path="/admin/arts" element={<AdminArts/>} />
          <Route path="/admin/photoorders" element={<AdminPhotoorders/>} />
          <Route path="/admin/artorders" element={<AdminArtorders/>} />
          <Route path="/admin/messages" element={<AdminMessages/>} />
          <Route path="/admin/recentphotos" element={<AdminRecentphotos/>} />
          <Route path="/admin/recentarts" element={<AdminRecentarts/>} />
          <Route path="/admin/gallery/achievements" element={<AdminAchievement/>} />
          <Route path="/admin/gallery/award-photos" element={<AdminAwardphotos/>} />
          <Route path="/admin/gallery/commercial" element={<AdminCommercial/>} />
          <Route path="/admin/gallery/edit/:sectionName" element={<EditSection />} />

        </Routes>
        <Footer />
        <ScrollToTop />
      </div>
    </Router>
    // </CartProvider>
  );99

};
export default App;
