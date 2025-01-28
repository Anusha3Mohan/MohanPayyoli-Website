import React from 'react';
import './Awards.css'; // Create a CSS file for styling

function Awards() {
  return (
    <div className="award-container">
      <h1>Awards & Recognitions</h1>
      <div className="award-grid">
        
        <div className="award-item left">
          <img src="https://th.bing.com/th/id/R.79c384546136eb99360709b11f59b9d8?rik=8JTBbt%2bXlRAOlA&riu=http%3a%2f%2fimg.izismile.com%2fimg%2fimg10%2f20170330%2f640%2fsony_world_photography_2017_has_finally_announced_the_winners_and_they_will_leave_you_speechless_640_25.jpg&ehk=90wR3JcPOYBkE2f0yapgngaIXhZAx5xjcQPpC1dUOjg%3d&risl=&pid=ImgRaw&r=0" alt="Award 1" />
          <div className="award-content">
            <h2>Best Landscape Photographer 2023</h2>
            <p>Received from the National Photography Association for outstanding contributions to landscape photography.</p>
          </div>
        </div>

        <div className="award-item right">
          <div className="award-content">
            <h2>Excellence in Portrait Photography</h2>
            <p>Awarded by the International Photography Federation for innovative portrait techniques.</p>
          </div>
          <img src="https://th.bing.com/th/id/R.79c384546136eb99360709b11f59b9d8?rik=8JTBbt%2bXlRAOlA&riu=http%3a%2f%2fimg.izismile.com%2fimg%2fimg10%2f20170330%2f640%2fsony_world_photography_2017_has_finally_announced_the_winners_and_they_will_leave_you_speechless_640_25.jpg&ehk=90wR3JcPOYBkE2f0yapgngaIXhZAx5xjcQPpC1dUOjg%3d&risl=&pid=ImgRaw&r=0" alt="Award 2" />
        </div>

        <div className="award-item left">
          <img src="https://th.bing.com/th/id/R.79c384546136eb99360709b11f59b9d8?rik=8JTBbt%2bXlRAOlA&riu=http%3a%2f%2fimg.izismile.com%2fimg%2fimg10%2f20170330%2f640%2fsony_world_photography_2017_has_finally_announced_the_winners_and_they_will_leave_you_speechless_640_25.jpg&ehk=90wR3JcPOYBkE2f0yapgngaIXhZAx5xjcQPpC1dUOjg%3d&risl=&pid=ImgRaw&r=0" alt="Award 3" />
          <div className="award-content">
            <h2>Photography of the Year 2022</h2>
            <p>Recognized for a breathtaking photograph that captures the essence of urban life.</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Awards;
