import React from 'react';

const MyPortfolio = () => {
    return (
        <div >
           
            <div class="card  bg-neutral text-neutral-content">
  <div class="card-body items-center ">
    <h2 class="card-title">My Portfolio</h2>
    <p>Name: Md Naim</p>
    <p>Email: kamruzzamannaim901@gmail.com</p>
    <p>Education: <ul>
        <li>Management Honours (NU)</li>
        <li>Higher Secondary(Science)</li>
        </ul></p>
        <p className='flex'>Skills: <ul>
            <li>Bootstrap</li>
            <li>Tailwind CSS</li>
            <li>Javascript</li>
            <li>React js</li>
            <li>Express js</li>
            <li>Node js</li>
            <li>Mongodb</li>
            </ul></p>
            <p className='flex'>My projects: 
                <p className='text-secondary'><a href='https://drill-manufucture.web.app/'>Drill Manufacturer</a>
                <br />
                <a href='https://bike-warehouse-b07ab.firebaseapp.com/'>Bike warehouse</a>
                <br />
                <a href='https://assignment-9-e3f10.web.app/'>Car Review</a></p>
            </p>
   
  </div>
</div>
        </div>
    );
};

export default MyPortfolio;