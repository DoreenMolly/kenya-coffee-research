interface StatCalloutProps {
    value: string
    caption: string
}

function StatCallout({ value, caption }: StatCalloutProps) {
    return (
        <div className="stat-callout">
            <p className="stat-value">{value}</p>
            <p className="stat-caption">{caption}</p>
        </div>
    )
}

export default StatCallout