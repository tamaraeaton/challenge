import React, { useState } from 'react';
import './TVShowQuery.css';

function TVShowQuery() {
    const [substr, setSubstr] = useState("");
    const [tvShowList, setTvShowList] = useState([]);

    const getTVShowNames = () => {

        fetch("http://api.tvmaze.com/search/shows?q=" + substr)
            .then(response => response.json())
            .then(data => {
                data.sort((a, b) => {
                    if (a.show.name < b.show.name) {
                        return -1;
                    }
                    if (a.show.name > b.show.name) {
                        return 1;
                    }
                    return 0;
                });
                printTVShowNames(data);
                setTvShowList(data);
                setSubstr('');
            })
            .catch(() => {
                alert("There was an error retrieving search results.")
            });
    };

    // const getTVShowNames1 = () => {
    //     fetch('http://localhost4000/notes')
    //         .then(response => response.json())
    //         .then(data => console.log(data))
    //         .catch(console.log('error'))

    // }

    const printTVShowNames = (tvData) => {
        for (let i = 0; i < tvData.length; i++) {
            console.log(tvData[i].show.name)
        }
    };

    return (
        <div>
            <div className="header">
                <h3>Input the name of the show you want to search:</h3>
                <div className="searchFunction">
                    <input onChange={(event) => setSubstr(event.target.value)} placeholder="Search Name" value={substr}></input>
                    <button onClick={() => getTVShowNames()}>Search</button>
                </div>
            </div>
            {
                tvShowList.map((item) => {
                    return (
                        item.show.image?.medium &&
                        <div key={item.show.id}>
                            <h3 >{item.show.name}</h3>
                            <img src={item.show.image?.medium} alt="showImage"></img>
                            <hr />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default TVShowQuery;
