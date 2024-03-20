import banner from './assets/images/illustration-article.svg'
import avatar from './assets/images/image-avatar.webp'

import './App.css'

function App() {
  return <div id="container">
    <img src={banner} alt='logo' id='banner'/>

    <div id='detail'>
      <div id='tag-bg' className='flex'>
        <p id='tag'>Learning</p>
      </div>
      <p id='date'>Published 21 Dec 2023</p>
      <h3>HTML & CSS foundations</h3>
      <p id='description'>These languages are the backbone of every website, defining structure, content, and presentation.</p>
    </div>

    <div id='user' className='flex'>
      <img src={avatar} alt='avatar'/>
      <h4>Greg Hooper</h4>
    </div>

  </div>;
}

export default App;
