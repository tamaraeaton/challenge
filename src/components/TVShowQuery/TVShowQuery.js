import React, { useState } from 'react';
import './TVShowQuery.css';

function TVShowQuery() {
    const [subString, setSubString] = useState('');
    const [tvShowList, setTvShowList] = useState([]);

    const storeSortData = [];

    const getTVShowNames = () => {

        fetch('http://api.tvmaze.com/search/shows?q=' + subString)
            .then(response => response.json())
            .then(data => {
                storeSortData.push(data.sort((a, b) => {
                    let fa = a.show.name.toLowerCase(),
                        fb = b.show.name.toLowerCase();
                    if (fa < fb) {
                        return -1;
                    }
                    if (fa > fb) {
                        return 1;
                    }
                    return 0;
                }
                ))
                console.log(data)
                setTvShowList(data)
                setSubString('')
            })
            .catch(err => console.error(err));
    }


    return (
        <div>
            <div className="searchBox">
                <input onChange={(event) => setSubString(event.target.value)} value={subString} placeholder="Search Name"></input>
                <button onClick={() => getTVShowNames()}>Search</button>
            </div>
            {
                tvShowList.map((item) => {
                    return (
                        item.show.image?.medium &&
                        <div key={item.show.id}>
                            <h3 >{item.show.name}</h3>
                            <img src={item.show.image?.medium} alt='showImage'></img>
                            <hr />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default TVShowQuery
