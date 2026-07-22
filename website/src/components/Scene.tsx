import { useInView } from 'react-intersection-observer'

interface SceneProps {
    label: string
    title: string
    tone: 'light'|'dark'
    wide?: boolean
    children: React.ReactNode
}


function Scene({label, title, tone, wide, children}: SceneProps){
    const { ref, inView } = useInView({
        threshold: 0.3,
        triggerOnce: false,
    })

  return (
    <section ref={ref} className={`scene scene-${tone} ${inView ? 'scene-visible' : ''}`}>
      <div className={`scene-inner ${wide ? 'scene-inner-wide' : ''}`}>
        <p className="scene-label">{label}</p>
        <h2 className="scene-title">{title}</h2>
        <div className="scene-content">{children}</div>
      </div>
    </section>
  )
}

export default Scene