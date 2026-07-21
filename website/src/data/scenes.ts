export interface SceneData {
    label: string
    title: string
    body: string
}

export const scenes: SceneData[] = [
    {
        label: 'Scene 1',
        title: 'How much does climate explain the falling coffee yield trend?',
        body: 'Kenyan coffee yield has dropped 23% since 1990.',
    },
    {
        label: 'Scene 2',
        title: 'It has not gotten drier. It has gotten wetter.',
        body: 'Rainfall and humidity have increased.',
    },
    {
        label: 'Scene 3',
        title: 'Five regression models, each refined to correct a specific weakness in the last.',
        body: 'Explanatory power climbed from 17% to 51% as the model was refined.',
    },
    {
        label: 'Scene 4',
        title: 'Yield exhibits persistence, not the biennial bearing pattern typically described in coffee agronomy.',
        body: 'A high-yield year significantly predicts another high-yield year the following season (p = 0.001), even after controlling for climate.',
    },
    {
        label: 'Scene 5',
        title: 'Climate accounts for roughly half of the variation in yield.',
        body: 'The remaining variation could be pointing towards economic and structural factors not captured by climate data alone.',
    },
]