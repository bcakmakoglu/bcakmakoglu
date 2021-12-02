# Burak Cakmakoglu's Profile 🏴‍☠️

<img src="https://i.redd.it/v23m1t92qhx01.jpg" alt="drawing" width="500" />

[![trophy](https://github-profile-trophy.vercel.app/?username=bcakmakoglu)](https://github.com/bcakmakoglu)

![Anurag's GitHub stats](https://github-readme-stats.vercel.app/api?username=bcakmakoglu&show_icons=true)

[![Top Langs](https://github-readme-stats.vercel.app/api/top-langs/?username=bcakmakoglu)](https://github.com/bcakmakoglu/github-readme-stats)

```ts
import { Ability, Motivation, Personality } from 'life'

type Skills = { [key: Ability]: Motivation }

interface ContactInfo {
    mail?: string
    website?: string
    phone?: string
}
interface Developer {
    firstName: string
    lastName: string
    skills: Skills
    personality: Personality[]
    contact?: ContactInfo
}

const braks: Developer = {
    firstName: 'Burak',
    lastName: 'Cakmakoglu',
    skills: {
        'Vue': 10,
        'React': 8,
        'Angular': 5,
        'TypeScript': 10,
        'JavaScript': 5,
        'GraphQL': 8,
        'PHP': 5,
        'Java': 3,
        '(S)CSS': 9,
        'MachineLearning': 7,
        'Docker': 8,
        'AWS': 8,
        'Cloud': 8,
        'Hasura': 8,
    },
    personality: ['courageous', 'kind', 'funny', 'annoying'],
    contact: {
        mail: 'brainbraks@googlemail.com',
        website: 'https://github.com/bcakmakoglu'
    },
}
```
