import React from 'react';
import './style/style.scss'
import Cards from './Cards'

const App = () => (
  <>
  <div className="main-banner img-container  l-section" id="main-banner">
    <div className="ed-grid lg-grid-6">
      <div className="lg-cols-4 lg-x-2">
        <img className="main-banner__img" alt="banner" src="https://external.flim10-1.fna.fbcdn.net/safe_image.php?d=AQCCtGaFPjJTWgLI&w=750&h=391&url=https%3A%2F%2Fi.ytimg.com%2Fvi%2FE4L5JYFktIU%2Fmaxresdefault.jpg&cfs=1&sx=0&sy=17&sw=1280&sh=668&ext=jpg&_nc_cb=1&_nc_hash=AQAW7UBzUIdqs-w5" />
        <div className="main-banner__data s-center">
          <p className="t2 s-mb-0">Título del banner</p>
          <p> Subtítulo del banner</p>
          <a href="https://ed.team" className="button">Botón del banner</a>
        </div>
      </div>
    </div>
  </div>
  <div className="ed-grid m-grid-3">
    <Cards 
      title="React desde Cero"
      teacher="Beto Quiroz"
      image="https://edteam-media.s3.amazonaws.com/courses/small/f7dad9a6-e060-4305-9adf-b9a9079075de.jpg"
      price="50"
    />
    <Cards 
      title="JavaScript desde Cero"
      teacher="Alvaro Félipe"
      image="https://edteam-media.s3.amazonaws.com/courses/small/61e5a210-8dab-412e-a6dc-802c070cc18c.jpg"
      price="20"
    />
    <Cards 
      title="HTML desde Cero"
      teacher="Alvaro Félipe"
      image="https://edteam-media.s3.amazonaws.com/courses/small/26557907-0555-427e-a40c-6ff207f98d72.png"
      price="10"
    />
    <Cards 
      title="React desde Cero"
      teacher="Beto Quiroz"
      image="https://edteam-media.s3.amazonaws.com/courses/small/f7dad9a6-e060-4305-9adf-b9a9079075de.jpg"
      price="50"
    />
    <Cards 
      title="JavaScript desde Cero"
      teacher="Alvaro Félipe"
      image="https://edteam-media.s3.amazonaws.com/courses/small/61e5a210-8dab-412e-a6dc-802c070cc18c.jpg"
      price="20"
    />
    <Cards 
      title="HTML desde Cero"
      teacher="Alvaro Félipe"
      image="https://edteam-media.s3.amazonaws.com/courses/small/26557907-0555-427e-a40c-6ff207f98d72.png"
      price="10"
    />
    <Cards 
      title="React desde Cero"
      teacher="Beto Quiroz"
      image="https://edteam-media.s3.amazonaws.com/courses/small/f7dad9a6-e060-4305-9adf-b9a9079075de.jpg"
      price="50"
    />
    <Cards 
      title="JavaScript desde Cero"
      teacher="Alvaro Félipe"
      image="https://edteam-media.s3.amazonaws.com/courses/small/61e5a210-8dab-412e-a6dc-802c070cc18c.jpg"
      price="20"
    />
    <Cards 
      title="HTML desde Cero"
      teacher="Alvaro Félipe"
      image="https://edteam-media.s3.amazonaws.com/courses/small/26557907-0555-427e-a40c-6ff207f98d72.png"
      price="10"
    />
  </div>
  </>
)

export default App;
