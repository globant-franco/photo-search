/** @jsxImportSource @emotion/react */

import React from "react"
import NavBar from "../components/nav-bar"
import Collections from "../components/collections"

import { createApi } from "unsplash-js";

const api = createApi({accessKey: process.env.REACT_APP_SPLASH_ACCESS_KEY
});

const PhotoComp = ({ photo }) => {
  const { user, urls } = photo;

  return (
    <React.Fragment>
      <img alt="custom-img" css={{width: '100vw', height: 'auto'}} src={urls.regular} />
      <a href={`https://unsplash.com/@${user.username}`}>
        {user.name}
      </a>
    </React.Fragment>
  );
};

export default function Search() {

  const [collection, setCollection] = React.useState('')
  const [data, setPhotosResponse] = React.useState(null);

  React.useEffect(() => {

    if (!collection) return

    api.search
      .getPhotos({ query: collection, orientation: "landscape" })
      .then(result => {
        setPhotosResponse(result);
      })
      .catch(() => {
        console.log("something went wrong!");
      });
  }, [collection])

  if (data?.errors) {
    return (
      <div>
        <div>{data.errors[0]}</div>
        <div>PS: Make sure to set your access token!</div>
      </div>
    );
  } else {
    return (
      <main>
      <NavBar/>
      <Collections onSelect={setCollection}/>
      <div className="feed">
        <ul className="columnUl">
          {data?.response.results.map(photo => (
            <li key={photo.id} className="li">
              <PhotoComp photo={photo} />
            </li>
          ))}
        </ul>
      </div>
      </main>

    );
  }
}
