import React from 'react';
import { Link } from 'react-router-dom';
import './Gallery.css'; // Ensure this is the correct path

function Gallery() {
  const images = [
    // { src: "https://th.bing.com/th/id/R.6afc61b50aabe45a2e6c68eae2c217ba?rik=L2W0YWncfjZBVA&riu=http%3a%2f%2fwww.shutterstock.com%2fblog%2fwp-content%2fuploads%2fsites%2f5%2f2016%2f03%2ffall-trees-road-1.jpg&ehk=KA%2bzFrmYoWsdK4k7v%2fgfNkd1T2rdnNtpF5ICdLIxAeM%3d&risl=&pid=ImgRaw&r=0", alt: "Landscape 2", link: "/gallery/all" },
    { src: "https://wallpaperaccess.com/full/4723250.jpg", alt: "Landscape 3", link: "/achievement" },
    { src: "https://nofilmschool.com/sites/default/files/styles/article_wide/public/bigstock.jpg?itok=Snv4I36d", alt: "Landscape 4", link: "/gallery/award-photos" },
    { src: "https://wallpaperaccess.com/full/2416021.jpg", alt: "Landscape 5", link: "/gallery/commercial" },
    { src: "https://i.pinimg.com/originals/e5/9b/8b/e59b8bf4007df9103b891051875cee9c.jpg", alt: "Landscape 6", link: "/gallery/faces" },
    { src: "https://nofilmschool.com/sites/default/files/styles/article_wide/public/bigstock.jpg?itok=Snv4I36d", alt: "Landscape 7", link: "/gallery/food" },
    { src: "https://www.seoclerk.com/pics/211413-1LJR771398506244.jpg", alt: "Landscape 9", link: "/gallery/general" },
    { src: "https://i.ytimg.com/vi/Faow3SKIzq0/maxresdefault.jpg", alt: "Landscape 11", link: "/gallery/travel" },
    { src: "https://cdn.pixabay.com/photo/2013/10/02/23/03/mountains-190055_1280.jpg", alt: "Landscape 12", link: "/gallery/sports" }
  ];

  return (
    <div>
      <nav className="gallery-navbar">
        <ul>
          <li><Link to="/gallery">Filter-All</Link></li>
          <li><Link to="/achievement">Achievements</Link></li>
          <li><Link to="/award-photos">Award Photos</Link></li>
          <li><Link to="/commercial">Commercial</Link></li>
          <li><Link to="/faces">Faces</Link></li>
          <li><Link to="/food">Food</Link></li>
          <li><Link to="/general">General</Link></li>
          <li><Link to="/travel">Travel</Link></li>
          <li><Link to="/sports">Sports</Link></li>
        </ul>
      </nav>

      <div className="gallery-grid">
        {images.map((image, index) => (
          <div className="gallery-item" key={index}>
            <Link to={image.link}>
              <img src={image.src} alt={image.alt} />
              <div className="overlay">
                <span>{image.link.split('/').pop().replace('-', ' ').toUpperCase()}</span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
