interface SceneProps {
    label: string
    title: string
    tone: 'light'|'dark'
    wide?: boolean
    children: React.ReactNode
}

function Scene({label, title, tone, wide, children}: SceneProps){
    return (
        <section className={`scene scene-${tone}`}>
            <div className={`scene-inner ${wide ? 'scene-inner-wide' : ''}`}>
              <p className="scene-label">{label}</p>
              <h2 className="scene-title">{title}</h2>
              <div className="scene-content">{children}</div>
            </div>
        </section>
    )
}

export default Scene