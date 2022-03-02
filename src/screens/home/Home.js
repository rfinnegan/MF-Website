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
              information about the company.information about the company. information about the company.information about the company. information about the company.information about the company.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Home