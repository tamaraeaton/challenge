import React, { useState } from 'react';
import './TVShowQuery.css';

function TVShowQuery() {
    // use the state to show the list result and the search name
    const [tvShowList, setTvShowList] = useState([]);
    const [subString, setSubString] = useState('');
    const [showImage, setShowImage] = useState();

    // create variable array to store the sorted list result
    const storeSortData = [];

    const getTVShowNames = () => {

        // fetch the data using the query search name
        fetch('http://api.tvmaze.com/search/shows?q=' + subString)
            .then(response => response.json())
            .then(data => {
                // put the data in an array and sort it
                // use fa and fb to compare against the next data point
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
                // set the list and clear out the search name
                // console.log(data.show.name)
                // console.log(data?.show?.image?.medium)
                console.log(storeSortData)
                setTvShowList(data)
                setShowImage(data)
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

            <table className="tvShowTable">
                <thead>
                    <tr className='tableHeader'>
                        <th>TV Show Name</th>
                        <th>TV Show Image</th>
                    </tr>
                </thead>
                <tbody>
                    {tvShowList.map((search) => {
                        // console.log(search.show.image?.medium)
                        return (

                            <tr key={search.show.id}>
                                <td className='tableData'>{search.show.name}</td>
                                <td className='tableData'>{search.show.image?.medium}</td>
                            </tr>
                        )
                    })
                    }
                </tbody>
            </table>

        </div>
    )
}

export default TVShowQuery