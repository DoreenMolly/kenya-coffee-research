export interface SceneData {
    label: string
    title: string
    body: string
}

export const scenes: SceneData[] = [
    {
        label: 'Scene 1',
        title: 'How much does climate explain the falling coffee yield trend in Kenya?',
        body: 'Kenyan coffee yield has dropped 23% since 1990.',
    },
    {
        label: 'Scene 2',
        title: 'A steady statistically significant fall.',
        body: 'Yield dropped from 679 kg/ha in 1990 to an average of roughly 399 kg/ha over the study period. This is a decline of 4.6 kg/ha per year (p = 0.009).',
    },
    {
        label: 'Scene 3',
        title: 'Four climate variables. Only one was significant.',
        body: 'Temperature, precipitation, humidity, and solar radiation were each tested against yield independently. Only temperature showed a pattern strong and consistent enough to be considered statistically meaningful.',
    },
    {
        label: 'Scene 4',
        title: 'Temperature is the strongest climate signal.',
        body: 'Hotter years are consistently associated with lower coffee yield. The relationship is real but it does not hold true every single time, since many other factors shape any single year\u2019s harvest. Even so, the overall tendancy across all 35 years was clear and consistent enough to be a genuine pattern, and not chance.',
    },
    {
        label: 'Scene 5',
        title: 'Five regression models, each refined to correct a specific weakness in the last.',
        body: 'Each model represents a different attempt to predict yield from climate data, with each version building on the last. The percentage shown reflects how much of the year-to-year variation in yield each model could account for. It climbs from 17% in the first attempt to 51% in the final one. Notably, solar radiation showed no relationship with yield on its own (as seen above it was statistically insignificant), yet became a meaningful predictor once considered alongside temperature. This shows that climate variables can interact in ways that a single comparison may not reveal.',
    },
    {
        label: 'Scene 6',
        title: 'Yield exhibits persistence instead of the biennial bearing pattern typically described in coffee agronomy.',
        body: 'Coffee is often expected to alternate between strong and weak harvests, since a heavy crop can exhaust a tree\u2019s resources. This dataset shows something different: a strong year tends to be followed by another strong year even after accounting for climate. The likely explanation is economic. A good harvest probably reflects a farm with the resources to properly maintain its trees, and that kind of investment tends to carry forward from one year to the next.',
    },
    {
        label: 'Scene 7',
        title: 'Climate accounts for roughly half of the variation in yield.',
        body: 'The remaining half points somewhere climate data cannot reach. It most likely reflects farm investment, market conditions, decisions made by individual growers season after season, what they invest in their land, whether a difficult year leaves them able to try again next year, and more. That question represents a promising direction for future work.',    
    },
]