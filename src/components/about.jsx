import background from '../assets/backgroundss.jpg';
import bg from '../assets/bg.png';
import text_img from '../assets/text-img.webp';
import Plx from 'react-plx'; // Ensure this library is installed with 'npm install react-plx'





const About = () => {
    return (
            <>
            <div id='#About'>

                <div>About me</div>
        <Plx
          parallaxData={[
            {
              start: 0,
              end: 100,
              easing: "ease-in",
              properties: [
                {
                  startValue: 1,
                  endValue: 1.6,
                  property: "scale"
                }
              ]
            }
          ]}
          style={{
            position: "fixed",
            left: 0,
            top: 0,
            width: "100%",
            zIndex: 0
          }}
        >
          <img style={{ width: "100%" }} src={bg} alt="foreground" />
        </Plx>
        <Plx
          parallaxData={[
            {
              start: 0,
              end: 800,
              properties: [
                {
                  startValue: 1,
                  endValue: 1.18,
                  property: "scale"
                }
              ]
            }
          ]}
          style={{
            position: "fixed",
            left: 0,
            top: 0,
            width: "100%"
          }}
        >
          <img style={{ width: "100%" }} src={background} alt="background" />
        </Plx>
        <Plx
          parallaxData={[
            {
              start: 0,
              end: 400,
              properties: [
                {
                  startValue: 1,
                  endValue: 0,
                  property: "opacity"
                }
              ]
            }
          ]}
          style={{
            position: "fixed",
            left: 0,
            top: "26vw",
            width: "100%"
          }}
        >
          <img
            style={{
              width: "30vw"
            }}
            src={text_img}
            alt="Goonies"
          />
        </Plx>
        <div
          style={{
            position: "fixed",
            left: 0,
            top: 0,
            zIndex: 0,
            paddingTop: "56%",
            height: "400vh",
            width: "100%"
          }}
        >
          <div
            style={{
              background: "#000",
              height: "100%"
            }}
          ></div>
        </div>
      </div>
            </>
    )
}

export default About;

