import React from 'react';
import './singlepost.css';
export default function SinglePost() {
  return (
    <>
      <div className="singlepost">
        <div className="singlePostWarpper">
    <img src="https://media.licdn.com/dms/image/D5612AQFwB0bKSPsi3A/article-cover_image-shrink_720_1280/0/1691657104300?e=2147483647&v=beta&t=lo6C1kl6vHdgMeJEYLIIgRfJuzAt2S4mFCTCiJnZgQE" alt="post" className="singlePostImg" />
    <h1 className="singlePostTitle">
        Website post Title Here
        <span className="singlePostEdit">
        <i className="fa-regular fa-pen-to-square singlePostIcon"></i>
        <i className="fa-solid fa-trash-can singlePostIcon"></i>
        </span>
    </h1>
        </div>
        <div className="singlePostInfo">
            <span className='singlePostAuthor'>Author: <b>Laiba Afzal</b></span>
            <span className='singlePostDate'>Pulish: <b>1 hour ago</b></span>
        </div>
        <p className="singlePostContent">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi a ratione ad voluptatibus similique sint eum totam, eius dolor ipsa illum tenetur, nostrum optio omnis explicabo saepe? Totam, obcaecati dignissimos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi rerum saepe unde quas distinctio minima voluptas, labore, vero eaque quam inventore dignissimos. Provident corrupti id labore ab architecto explicabo obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis error voluptates magnam aliquid dolore et debitis eos vel ab aspernatur consequatur quas, iste totam ad odio doloremque explicabo dolores exercitationem.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi a ratione ad voluptatibus similique sint eum totam, eius dolor ipsa illum tenetur, nostrum optio omnis explicabo saepe? Totam, obcaecati dignissimos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi rerum saepe unde quas distinctio minima voluptas, labore, vero eaque quam inventore dignissimos. Provident corrupti id labore ab architecto explicabo obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis error voluptates magnam aliquid dolore et debitis eos vel ab aspernatur consequatur quas, iste totam ad odio doloremque explicabo dolores exercitationem.
        </p>
      </div>
    </>
  )
}
