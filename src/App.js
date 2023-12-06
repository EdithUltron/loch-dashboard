import React, { useState } from "react";
import "./App.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Notification from "./components/Notification";
import bell from "./imgs/Bell.svg";
import img from "./imgs/leftimg1.png";
import eye from "./imgs/Eye.svg";
import symbol from "./imgs/Vector.svg";
import Testimonal from "./components/Testimonal";

function App() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  const responsiveb = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1.8,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  const [email, setemail] = useState("");
  const [msg, setmsg] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    if(email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )) {
      setmsg("You’ll receive an email with an invite link to join.");
      setTimeout(() => {
        window.location.href="https://app.loch.one/welcome";
      }, 1000);
    }
    else {
      setmsg("Please enter a valid email");
    }
  }

  return (
    <div className='App'>
      <div className='main'>
        <div className='left'>
          <div className='top'>
            <div className='top__left'>
              <div className='tl__top'>
                <img src={bell} alt='Bell' />
              </div>
              <div className='tl__mid'>
                Get notified when a highly correlated whale makes a move
              </div>
              <div className='tl__end'>
                Find out when a certain whale moves more than any preset amount
                on-chain or when a dormant whale you care about becomes active.
              </div>
            </div>
            <div className='top__right'>
              <Carousel
                swipeable={true}
                draggable={true}
                showDots={false}
                infinite={true}
                autoPlay={true}
                arrows={false}
                autoPlaySpeed={3000}
                responsive={responsive}>
                <Notification type='3' />
                <Notification type='2' />
                <Notification type='1' email={email} />
              </Carousel>
            </div>
          </div>
          <div className='middle'>
            <div className='middle__left'>
              <img src={img} alt='img' />
            </div>
            <div className='middle__right'>
              <div className='tl__top'>
                <img src={eye} alt='see' />
              </div>
              <div className='tl__mid'>Watch what the whales are doing </div>
              <div className='tl__end'>
                All whales are not equal. Know exactly what the whales impacting
                YOUR portfolio are doing.
              </div>
            </div>
          </div>
          <div className='end'>
            <div className='end__top'>
              <img className='et_s' src={symbol} alt='symbol' />
              <h1>Testimonals</h1>
            </div>
            <div className='end__mid'></div>
            <div className='end__bottom'>
              <div className='eb__left'>
                <img src={symbol} alt='symbol' />
              </div>
              <div className='eb__right'>
                <Carousel
                  swipeable={true}
                  draggable={true}
                  showDots={false}
                  infinite={true}
                  arrows={false}
                  responsive={responsiveb}>
                  <Testimonal
                    name='Jack F'
                    role='Ex Blackrock PM'
                    msg='“Love how Loch integrates portfolio analytics and whale watching into one unified app.”'
                  />
                  <Testimonal
                    name='Yash P'
                    role='Research, 3poch Crypto Hedge Fund'
                    msg="“I use Loch everyday now. I don't think I could analyze crypto whale trends markets without it. I'm addicted!”"
                  />
                  <Testimonal
                    name='Shiv S'
                    role='Co-Founder Magik Labs'
                    msg='“Managing my own portfolio is helpful and well designed. What’s really interesting is watching the whales though. No one else has made whale tracking so simple.”'
                  />
                </Carousel>
              </div>
            </div>
          </div>
        </div>
        <div className='right'>
          <form onSubmit={submitForm} className='right__signup'>
            <div className='rs__info'>Sign up for exclusive access.</div>
            <input
              type='text'
              placeholder='Your email address'
              className='rs__email'
              value={email}
              onChange={(e)=>setemail(e.target.value)}
            />
            <button type='submit' className='rs__gs'>
              Get started
            </button>
            <div className='rs__msg'>
              {msg}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
