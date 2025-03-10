import React from 'react';
import { Link } from 'react-router-dom';
import './Image1.css'; // Import the CSS for styling

function Image1() {
  return (
    <div className="image-container">
      <img
        src="https://th.bing.com/th/id/R.6afc61b50aabe45a2e6c68eae2c217ba?rik=L2W0YWncfjZBVA&riu=http%3a%2f%2fwww.shutterstock.com%2fblog%2fwp-content%2fuploads%2fsites%2f5%2f2016%2f03%2ffall-trees-road-1.jpg&ehk=KA%2bzFrmYoWsdK4k7v%2fgfNkd1T2rdnNtpF5ICdLIxAeM%3d&risl=&pid=ImgRaw&r=0"
        alt="Serene Autumn Forest Road"
        className="image"
      />
      <div className="image-description">
        <h2>Serene Autumn Forest Road</h2>
        <p>
          This beautiful photograph captures a calm forest road surrounded by the golden hues of autumn trees. The path leads deep into the tranquil wilderness, offering a peaceful retreat for nature lovers and adventurers alike. A perfect addition to your collection for those who appreciate the quiet beauty of nature.
        </p>
        

        <h2>Standard: Canson Infinity Fine Art Print - Ready To Frame</h2>
        <p>
          Canson Infinity prints are printed on 100% museum-grade cotton papers with a matte or lustre finish, which has the vibrancy of glossy papers without the reflections. With a high Dmax, Canson prints have rich colors and deep blacks. At 310 gsm, these fine art prints feel substantial when held and are one of the most archival papers on the market with a rating of over 200 years.
        </p>
        <p>
          Each print features a one-inch white border around the live image area to provide maximum flexibility while framing. Loose prints are the ideal choice for interior designers or collectors who plan to work with a professional framer. I custom sign all individual prints with a digital signature for provenance unless requested otherwise.
        </p>
        <p>
          I can either ship directly to you or your framer of choice. Free shipping within the United States. Please contact me for Canada & international shipping fees.
        </p>

        <h4>Select a print size:</h4>

        <table className="print-size-table">
          <thead>
            <tr>
              <th>Size</th>
              <th>Price</th>
              <th>Option</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>12 x 18 inches</td>
              <td>$79.99</td>
              <td>
              <Link to="/cart">
          <button className="add-to-cart-main-btn">Add to Cart</button>
        </Link>
              </td>
            </tr>
            <tr>
              <td>16 x 24 inches</td>
              <td>$129.99</td>
              <td>
              <Link to="/cart">
          <button className="add-to-cart-main-btn">Add to Cart</button>
        </Link>
              </td>
            </tr>
            <tr>
              <td>24 x 36 inches</td>
              <td>$199.99</td>
              <td>
              <Link to="/cart">
          <button className="add-to-cart-main-btn">Add to Cart</button>
        </Link>
              </td>
            </tr>
          </tbody>
        </table>

        
      </div>
    </div>
  );
}

export default Image1;
