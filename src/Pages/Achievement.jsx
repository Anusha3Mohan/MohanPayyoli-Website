import React from 'react';
import './Achievement.css';
import { Link } from 'react-router-dom';

function Achievement() {
  const images = [
    { src: "https://th.bing.com/th/id/R.6afc61b50aabe45a2e6c68eae2c217ba?rik=L2W0YWncfjZBVA&riu=http%3a%2f%2fwww.shutterstock.com%2fblog%2fwp-content%2fuploads%2fsites%2f5%2f2016%2f03%2ffall-trees-road-1.jpg&ehk=KA%2bzFrmYoWsdK4k7v%2fgfNkd1T2rdnNtpF5ICdLIxAeM%3d&risl=&pid=ImgRaw&r=0", alt: "", link: "/burj/image1" },
    { src: "https://wallpaperaccess.com/full/4723250.jpg", alt: "", link: "/burj/image2" },
    { src: "https://nofilmschool.com/sites/default/files/styles/article_wide/public/bigstock.jpg?itok=Snv4I36d", alt: "", link: "/burj/image3" },
    { src: "https://wallpaperaccess.com/full/2416021.jpg", alt: "", link: "/burj/image4" },
    { src: "https://i.pinimg.com/originals/e5/9b/8b/e59b8bf4007df9103b891051875cee9c.jpg", alt: "", link: "/burj/image5" },
    { src: "https://nofilmschool.com/sites/default/files/styles/article_wide/public/bigstock.jpg?itok=Snv4I36d", alt: "I", link: "/burj/image6" },
    { src: "https://www.seoclerk.com/pics/211413-1LJR771398506244.jpg", alt: "", link: "/burj/image7" },
    { src: "https://i.ytimg.com/vi/Faow3SKIzq0/maxresdefault.jpg", alt: "", link: "/burj/image8" },
    { src: "https://cdn.pixabay.com/photo/2013/10/02/23/03/mountains-190055_1280.jpg", alt: "", link: "/burj/image9" },
    { src: "https://www.pxwall.com/wp-content/uploads/2019/04/4K-Ultra-HD-Gallery.jpg", alt: "", link: "/burj/image10" },
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

      <div className="photos-grid">
        {images.map((image, index) => (
          <div className="photos-item" key={index}>
            <Link to={image.link}>
              <img src={image.src} alt={image.alt} />
              <div className="overlayburj">
                <span>{image.alt.toUpperCase()}</span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Achievement;
