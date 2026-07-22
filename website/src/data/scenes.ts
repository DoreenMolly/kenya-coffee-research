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
        body: 'Yield dropped from 679 kg/ha in 1990 to an average of roughly 399 kg/ha over the study period. \n This is a decline of 4.6 kg/ha per year (p = 0.009).',
    },
    {
        label: 'Scene 3',
        title: 'Temperature is the strongest climate signal.',
        body: 'Hotter years are associated with measurably lower yield (r = -0.406, p = 0.016). This is consistent with coffee\u2019s narrow optimal temperature range.',
    },
    {
        label: 'Scene 4',
        title: 'Five regression models, each refined to correct a specific weakness in the last.',
        body: 'Explanatory power climbed from 17% to 51% as the model was refined.',
    },
    {
        label: 'Scene 5',
        title: 'Yield exhibits persistence instead of the biennial bearing pattern typically described in coffee agronomy.',
        body: 'A high-yield year significantly predicts another high-yield year the following season (p = 0.001), even after controlling for climate.',
    },
    {
        label: 'Scene 6',
        title: 'Climate accounts for roughly half of the variation in yield.',
        body: 'The remaining variation could be pointing towards economic and structural factors not captured by climate data alone.',
    },
]