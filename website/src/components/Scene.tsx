interface SceneProps {
    label: string
    title: string
    children: React.ReactNode
}

function Scene({label, title, children}: SceneProps){
    return (
        <section className="scene">
            <p className="scene-label">{label}</p>
            <h2 className="scene-title">{title}</h2>
            <div className="scene-content">{children}</div>
        </section>
    )
}

export default Scene