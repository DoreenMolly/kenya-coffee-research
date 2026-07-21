interface SceneProps {
    label: string
    title: string
    tone: 'light'|'dark'
    children: React.ReactNode
}

function Scene({label, title, tone, children}: SceneProps){
    return (
        <section className={`scene scene-${tone}`}>
            <div className="scene-inner">
              <p className="scene-label">{label}</p>
              <h2 className="scene-title">{title}</h2>
              <div className="scene-content">{children}</div>
            </div>
        </section>
    )
}

export default Scene