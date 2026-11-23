import { useState, useEffect, useRef } from 'react'

function Introduction() {

  const hobbies = [
    { id: 1, title: 'Running', img: '/running.jpg' },
    { id: 2, title: 'Playing Guitar', img: '/guitar.jpg' },
    { id: 3, title: 'Playing Games', img: '/games.jpg' },
    { id: 4, title: 'Watch Movies', img: '/movies.jpg' },
  ]

  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <section id='home' className='intro'>
        <div className='intro-text'>
          <h1>
            hello, I'm a frontend web developer.
          </h1>
          <p>
            My name is Christian Muncey. I'm a student who is passionate about programming and technology.
            I have many hobbies, including coding, running, playing the guitar, and playing games.
          </p>
        </div>
        <img src="/profile.jpg" alt="My Profile" />
      </section>
      <section className='hobbies' ref={sectionRef}>
        <h2 className={visible ? "tools-title show" : "tools-title"}>
          when i'm not coding
        </h2>
        <div className='hobbies-grid'>
          {hobbies.map((hobby, index) => (
            <figure 
            key={hobby.id} 
            className= {visible ? 'hobby-card show' : 'hobby-card'} 
            style={{ animationDelay: `${index * 0.12}s` }}
            >
              <img src={hobby.img} alt={hobby.title} />
              <figcaption>{hobby.title}</figcaption>
            </figure>
          ))}
        </div>
      </section>
    </>
  )
}

export default Introduction