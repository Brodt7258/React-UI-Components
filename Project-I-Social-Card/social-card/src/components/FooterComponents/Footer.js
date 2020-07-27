import React, { useState } from 'react';
import './Footer.css';
import { FaRegComment, FaRetweet, FaRegHeart, FaRegEnvelope } from 'react-icons/fa';

const Footer = () => {
  const [comments, setComments] = useState(0);
  const [reTweets, setReTweets] = useState(0);
  const [likes, setLikes] = useState(0);
  const [mails, setMails] = useState(0);

  return (
    <div className="card-footer">
      <div className="icon-counter-pair">
        <FaRegComment onClick={() => setComments(comments + 1)} />
        <span>{comments}</span>
      </div>
      <div className="icon-counter-pair">
        <FaRetweet onClick={() => setReTweets(reTweets + 1)} />
        <span>{reTweets}</span>
      </div>
      <div className="icon-counter-pair">
        <FaRegHeart onClick={() => setLikes(likes + 1)} />
        <span>{likes}</span>
      </div>
      <div className="icon-counter-pair">
        <FaRegEnvelope onClick={() => setMails(mails + 1)} />
        <span>{mails}</span>
      </div>
    </div>
  )
}

export default Footer;