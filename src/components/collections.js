/** @jsxImportSource @emotion/react */
import couple from '../images/couple.png'
import people from '../images/people.png'
import woman from '../images/woman.png'
import { Title } from './lib'
export default function Collections({onSelect}) {

  const collections = {
    'wedding': couple,
    'outdoors': people,
    'portraits': woman
  }

  return(
    <section css={{ width: '100vw', height: '30vh', backgroundColor: '#F4DFCA' }}>
      <Title>My Collections</Title>

      <div css={{display: 'flex', justifyContent: 'space-around' }}>
        {Object.entries(collections).map(([title, imgSrc], index) => (
          <div key={index}>
            <img src={imgSrc} alt={title} css={{width: 'auto', height: 'auto'}} onClick={() => onSelect(title)}/>
            <p css={{fontFamily: 'Kalam',
              fontSize: '0.8rem',
              margin: '0'
            }}>{title}</p>
          </div>
        ))}
      </div>

      <Title>Activity Feed</Title>
    </section>
  )
}
