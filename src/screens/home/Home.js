import { useEffect, useState, useRef } from 'react'
import NET from 'vanta/dist/vanta.net.min'
import './home.css'

const Home = () => {
  const [vantaEffect, setVantaEffect] = useState(0);
  const animationRef = useRef(null);

  useEffect(() => {
    document.title = 'Home';
  }, [])


  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(NET({
        el: animationRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: window.innerHeight - 96,
        scale: 1.00,
        scaleMobile: 1.00,
        points: 20.00,
        maxDistance: 25,
        color: 0x3fddff,
        backgroundColor: 0x0
      }))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])

  return (
    <div class="home-container">
      <div ref={animationRef}>
        <div>
          <div class="title-container">Company Name</div>
          <div class="blurb-container">Cutting edge decision making in today's financial markets</div>
          <div class="paragraph-container">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Home