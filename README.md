# Bounteous JavaScript Coding Challenge
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## Instructions
Use this provided React starter app to complete the challenges below.  
Once you complete your work, zip this codebase and return it.

### Part 1: TV Shows

To solve this challenge, write an HTTP GET method to retrieve information from a TV database.

Add a function `getTVShowNames` to this React starter app.

**Function Description**

Given a string substr, `getTVShowNames` must perform the following tasks:

- Query http://api.tvmaze.com/search/shows?q={substr} (replace substr with your search criterion). 
- Store each show meeting the search criterion.
- Sort the shows in ascending order by name.
- Print to the console the sorted TV show names.


The query response from the website is a JSON response containing an array of search results that includes a `score` and a `show` object.  The `show` object contains various data about the show, including a `name`.



**Input Format For Testing**

A single string, substr, denoting the substring you must query for.

Sample Input:
`superman`



Sample Output:
```
Adventures of Superman
Atom Man vs. Superman
Max Fleischer's Superman
Superman
Superman & Louis
Superman: Red Son
Superman: The Animated Series
The New Adventures of Superman
The Return of Superman
The Superman/Aquaman Hour of Adventure
```



**Explanation:**

For this example, we want the TV show names containing the substring superman. The response for the query http://api.tvmaze.com/search/shows?q=superman is:


```
[
    {
        "score": 19.3631,
        "show": {
            "id": 44751,
            "url": "http://www.tvmaze.com/shows/44751/superman-lois",
            "name": "Superman & Lois",
            "type": "Scripted",
            "language": "English",
            "genres": [],
            "status": "In Development",
            "runtime": 60,
            "premiered": null,
            "officialSite": null,
            "schedule": {
                "time": "",
                "days": []
            },
            "rating": {
                "average": null
            },
            "weight": 95,
            "network": {
                "id": 5,
                "name": "The CW",
                "country": {
                    "name": "United States",
                    "code": "US",
                    "timezone": "America/New_York"
                }
            },
            "webChannel": null,
            "externals": {
                "tvrage": null,
                "thetvdb": null,
                "imdb": null
            },
            "image": null,
            "summary": "<p><b>Superman & Lois</b> follows the world's most famous superhero and comic books' most famous journalist, as they deal with all the stress, pressures and complexities that come with being working parents in today's society.</p>",
            "updated": 1579342831,
            "_links": {
                "self": {
                    "href": "http://api.tvmaze.com/shows/44751"
                }
            }
        }
    },
    {
        "score": 17.089745,
        "show": {
            "id": 7073,
            "url": "http://www.tvmaze.com/shows/7073/superman",
            "name": "Superman",
            "type": "Animation",
            "language": "English",
            "genres": [
                "Action",
                "Adventure",
                "Science-Fiction"
            ],
            "status": "Ended",
            "runtime": 30,
            "premiered": "1988-09-17",
            "officialSite": null,
            "schedule": {
                "time": "",
                "days": [
                    "Saturday"
                ]
            },
            "rating": {
                "average": null
            },
            "weight": 42,
            "network": {
                "id": 2,
                "name": "CBS",
                "country": {
                    "name": "United States",
                    "code": "US",
                    "timezone": "America/New_York"
                }
            },
            "webChannel": null,
            "externals": {
                "tvrage": 5408,
                "thetvdb": 71161,
                "imdb": "tt0213370"
            },
            "image": {
                "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/26/66186.jpg",
                "original": "http://static.tvmaze.com/uploads/images/original_untouched/26/66186.jpg"
            },
            "summary": "<p><b>Superman </b>is a 1988 animated Saturday morning television series produced by Ruby-Spears Productions and Warner Bros. Television that aired on CBS featuring the DC Comics superhero of the same name (coinciding with the character's 50th anniversary, along with the live-action Superboy TV series that year). Veteran comic book writer Marv Wolfman was the head story editor, and noted comic book artist Gil Kane provided character designs.</p>",
            "updated": 1574387787,
            "_links": {
                "self": {
                    "href": "http://api.tvmaze.com/shows/7073"
                },
                "previousepisode": {
                    "href": "http://api.tvmaze.com/episodes/406329"
                }
            }
        }
    },
    {
        "score": 14.352262,
        "show": {
            "id": 1957,
            "url": "http://www.tvmaze.com/shows/1957/superman-the-animated-series",
            "name": "Superman: The Animated Series",
            "type": "Animation",
            "language": "English",
            "genres": [
                "Action",
                "Adventure",
                "Science-Fiction"
            ],
            "status": "Ended",
            "runtime": 30,
            "premiered": "1996-09-06",
            "officialSite": null,
            "schedule": {
                "time": "",
                "days": [
                    "Saturday"
                ]
            },
            "rating": {
                "average": 8.2
            },
            "weight": 11,
            "network": {
                "id": 71,
                "name": "The WB",
                "country": {
                    "name": "United States",
                    "code": "US",
                    "timezone": "America/New_York"
                }
            },
            "webChannel": null,
            "externals": {
                "tvrage": 5407,
                "thetvdb": 71788,
                "imdb": "tt0115378"
            },
            "image": {
                "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/11/27899.jpg",
                "original": "http://static.tvmaze.com/uploads/images/original_untouched/11/27899.jpg"
            },
            "summary": "<p>Superman battles evil while trying to conceal his alter ego, Clark Kent.</p>",
            "updated": 1576081501,
            "_links": {
                "self": {
                    "href": "http://api.tvmaze.com/shows/1957"
                },
                "previousepisode": {
                    "href": "http://api.tvmaze.com/episodes/160353"
                }
            }
        }
    },
    {
        "score": 14.11917,
        "show": {
            "id": 4911,
            "url": "http://www.tvmaze.com/shows/4911/the-return-of-superman",
            "name": "The Return of Superman",
            "type": "Reality",
            "language": "Korean",
            "genres": [
                "Children"
            ],
            "status": "Running",
            "runtime": 90,
            "premiered": "2013-11-03",
            "officialSite": "http://program.kbs.co.kr/2tv/enter/superman",
            "schedule": {
                "time": "18:25",
                "days": [
                    "Sunday"
                ]
            },
            "rating": {
                "average": null
            },
            "weight": 74,
            "network": {
                "id": 128,
                "name": "KBS2",
                "country": {
                    "name": "Korea, Republic of",
                    "code": "KR",
                    "timezone": "Asia/Seoul"
                }
            },
            "webChannel": null,
            "externals": {
                "tvrage": null,
                "thetvdb": 276221,
                "imdb": "tt5129382"
            },
            "image": {
                "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/21/53613.jpg",
                "original": "http://static.tvmaze.com/uploads/images/original_untouched/21/53613.jpg"
            },
            "summary": "<p>In this new reality show, 4 celebrity dad's will take on the task of raising their kid(s) on their own without mom's help! These dads could not be more different from one another and are on different sides of the personality spectrums.</p>",
            "updated": 1580227630,
            "_links": {
                "self": {
                    "href": "http://api.tvmaze.com/shows/4911"
                },
                "previousepisode": {
                    "href": "http://api.tvmaze.com/episodes/1795289"
                }
            }
        }
    },
    {
        "score": 10.669076,
        "show": {
            "id": 7077,
            "url": "http://www.tvmaze.com/shows/7077/atom-man-vs-superman",
            "name": "Atom Man vs. Superman",
            "type": "Scripted",
            "language": "English",
            "genres": [
                "Action",
                "Adventure",
                "Science-Fiction"
            ],
            "status": "Ended",
            "runtime": 15,
            "premiered": "1950-07-20",
            "officialSite": null,
            "schedule": {
                "time": "",
                "days": [
                    "Thursday"
                ]
            },
            "rating": {
                "average": null
            },
            "weight": 0,
            "network": {
                "id": 2,
                "name": "CBS",
                "country": {
                    "name": "United States",
                    "code": "US",
                    "timezone": "America/New_York"
                }
            },
            "webChannel": null,
            "externals": {
                "tvrage": null,
                "thetvdb": 168321,
                "imdb": "tt0042211"
            },
            "image": {
                "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/79/198350.jpg",
                "original": "http://static.tvmaze.com/uploads/images/original_untouched/79/198350.jpg"
            },
            "summary": "<p>The second of Columbia's Superman serials, the 15-episode <b>Atom Man vs. Superman</b> stars Kirk Alyn once again in the dual role of Clark Kent and the \"Man of Steel\". This time, Kent/Superman is pitted against bald-pated Lex Luthor, who, disguised as Atom Man, threatens to devastate Metropolis with any number of devilish devices-the deadliest of which is a disintegration machine. Luthor stumbles onto Superman's Achilles' heel: Kryptonite. Once our hero has been exposed to this fatal ore, Metropolis becomes a wide-open town for criminals of all varieties. But Superman regains his full powers in time to stop Luthor from laying waste to Metropolis with his latest demon machine, a sonic vibrator. Also appearing in Atom Man vs. Superman are Noel Neill as Lois Lane, Tommy Bond (the onetime \"Butch\" of The Little Rascals) as Jimmy Olson, and Pierre Watkin as Perry White.</p>",
            "updated": 1520572657,
            "_links": {
                "self": {
                    "href": "http://api.tvmaze.com/shows/7077"
                },
                "previousepisode": {
                    "href": "http://api.tvmaze.com/episodes/406452"
                }
            }
        }
    },
    {
        "score": 10.669076,
        "show": {
            "id": 7071,
            "url": "http://www.tvmaze.com/shows/7071/max-fleischers-superman",
            "name": "Max Fleischer's Superman",
            "type": "Animation",
            "language": "English",
            "genres": [
                "Action",
                "Adventure",
                "Children"
            ],
            "status": "Ended",
            "runtime": 10,
            "premiered": "1941-09-26",
            "officialSite": null,
            "schedule": {
                "time": "",
                "days": [
                    "Friday"
                ]
            },
            "rating": {
                "average": null
            },
            "weight": 0,
            "network": {
                "id": 1,
                "name": "NBC",
                "country": {
                    "name": "United States",
                    "code": "US",
                    "timezone": "America/New_York"
                }
            },
            "webChannel": null,
            "externals": {
                "tvrage": null,
                "thetvdb": 102621,
                "imdb": "tt0034247"
            },
            "image": {
                "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/26/66158.jpg",
                "original": "http://static.tvmaze.com/uploads/images/original_untouched/26/66158.jpg"
            },
            "summary": "<p>Superman made his animated debut in this series of seventeen classic Technicolor short films produced by Fleischer Studios and its successor Famous Studios on 26 September 1941 originally titled <i><b>\"Max Fleischer's Superman\"</b></i>. This series of shorts has been re-released several times in the last few decades under other titles such as \"Superman: The Max Fleischer Animated Shorts\", \"Superman: The Max Fleischer Cartoon Collection\" and \"Superman (1941)\".</p>",
            "updated": 1547736955,
            "_links": {
                "self": {
                    "href": "http://api.tvmaze.com/shows/7071"
                },
                "previousepisode": {
                    "href": "http://api.tvmaze.com/episodes/406244"
                }
            }
        }
    },
    {
        "score": 10.669076,
        "show": {
            "id": 7076,
            "url": "http://www.tvmaze.com/shows/7076/the-new-adventures-of-superman",
            "name": "The New Adventures of Superman",
            "type": "Animation",
            "language": "English",
            "genres": [
                "Action",
                "Adventure",
                "Children"
            ],
            "status": "Ended",
            "runtime": 30,
            "premiered": "1966-09-10",
            "officialSite": null,
            "schedule": {
                "time": "",
                "days": [
                    "Saturday"
                ]
            },
            "rating": {
                "average": null
            },
            "weight": 0,
            "network": {
                "id": 2,
                "name": "CBS",
                "country": {
                    "name": "United States",
                    "code": "US",
                    "timezone": "America/New_York"
                }
            },
            "webChannel": null,
            "externals": {
                "tvrage": 6023,
                "thetvdb": 71451,
                "imdb": null
            },
            "image": {
                "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/26/66206.jpg",
                "original": "http://static.tvmaze.com/uploads/images/original_untouched/26/66206.jpg"
            },
            "summary": "<p><b>The New Adventures of Superman</b> was an animated series that premiered on September 10, 1966. The series was produced by Filmation Associates and ran for three seasons. It was based on the popular Superman comics created by Jerry Siegel and Joe Shuster. The series focuses on the adventures of Superman an incredibly powerful superhero from the planet Krypton who defends Earth from all sorts of dangers. Superman's secret identity is Clark Kent a mild-mannered reporter for the newspaper \"The Daily Planet\". There Superman worked under newspaper editor Perry White with fellow reporter Louis Lane and photographer Jimmy Olsen. The first season of the series ran from 1966 to 1967 under the title The New Adventures of Superman and featured two six minute Superman cartoons with one six minute Superboy cartoon played between them. Thirty-six Superman shorts and eighteen Superboy shorts were produced.</p>",
            "updated": 1504255746,
            "_links": {
                "self": {
                    "href": "http://api.tvmaze.com/shows/7076"
                },
                "previousepisode": {
                    "href": "http://api.tvmaze.com/episodes/406437"
                }
            }
        }
    },
    {
        "score": 10.669076,
        "show": {
            "id": 1306,
            "url": "http://www.tvmaze.com/shows/1306/adventures-of-superman",
            "name": "Adventures of Superman",
            "type": "Scripted",
            "language": "English",
            "genres": [
                "Action",
                "Adventure",
                "Crime"
            ],
            "status": "Ended",
            "runtime": 30,
            "premiered": "1952-09-19",
            "officialSite": null,
            "schedule": {
                "time": "17:00",
                "days": [
                    "Monday"
                ]
            },
            "rating": {
                "average": null
            },
            "weight": 47,
            "network": {
                "id": 72,
                "name": "Syndication",
                "country": {
                    "name": "United States",
                    "code": "US",
                    "timezone": "America/New_York"
                }
            },
            "webChannel": null,
            "externals": {
                "tvrage": 2504,
                "thetvdb": 77403,
                "imdb": "tt0044231"
            },
            "image": {
                "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/7/18484.jpg",
                "original": "http://static.tvmaze.com/uploads/images/original_untouched/7/18484.jpg"
            },
            "summary": "<p><b>Adventures of Superman</b> (originally known as <i>The Adventures of Superman</i>) is an American syndicated children's television series based on comic book characters and concepts created in 1938 by Jerry Siegel and Joe Shuster. The series saw six seasons and one-hundred-four half-hour episodes. Sponsored by cereal manufacturer Kellogg's, the show's initial and final air dates are sometimes disputed but generally accepted as September 19, 1952 to April 28, 1958. The show's first two seasons were filmed in black-and-white while seasons four through six were filmed in color, though broadcast monochromatically.</p><p>Adventures of Superman was the first television series to feature Superman though the superhero had appeared as a character in a radio program starring Bud Collyer, two theatrical serials starring Kirk Alyn and Noel Neill, and a series of Max Fleischer cartoons. The television series began filming in 1951 in Culver City, California with exterior locations filmed in and around the Los Angeles area and the San Fernando Valley. Episodes follow Superman as he battles gangsters, thugs, mad scientists, meteors and malfunctioning radioactive machines in the city of Metropolis. In the first episode, his origin on the planet Krypton and his arrival on Earth are dramatized while in succeeding episodes, he conceals his identity by posing as mild mannered Daily Planet reporter Clark Kent who, in times of crisis, scoots to a broom closet, sheds his civvies, and reappears in superhero tights and trunks to rescue hapless folk from the clutches of ne'er-do-wells. In the last seasons, the kindly but absent-minded Professor Pepperwinkle creates problems for Superman with his bizarre inventions.</p><p>Adventures of Superman won no major awards but was popular with its audience and remains popular today. Its opening theme, The Superman March, has become a classic of its kind and is instantly recognizable by most television buffs. Since the show's cancellation, several of its stars have participated in Superman-related conventions, autograph signings, and other events. In 2003, Noel Neill published her memoirs Truth, Justice, and The American Way: The Life and Times of Noel Neill. In 2006, the death of George Reeves was dramatized in the film Hollywoodland with Ben Affleck starring in the role of Reeves. In 2006, the series became available in its entirety on DVD and reruns of the show still hold a place on television programming schedules.</p>",
            "updated": 1574385656,
            "_links": {
                "self": {
                    "href": "http://api.tvmaze.com/shows/1306"
                },
                "previousepisode": {
                    "href": "http://api.tvmaze.com/episodes/110876"
                }
            }
        }
    },
    {
        "score": 10.669076,
        "show": {
            "id": 7075,
            "url": "http://www.tvmaze.com/shows/7075/superman-red-son",
            "name": "Superman: Red Son",
            "type": "Animation",
            "language": "English",
            "genres": [
                "Action",
                "Adventure",
                "Children"
            ],
            "status": "Ended",
            "runtime": 6,
            "premiered": "2009-07-24",
            "officialSite": null,
            "schedule": {
                "time": "",
                "days": [
                    "Friday"
                ]
            },
            "rating": {
                "average": null
            },
            "weight": 42,
            "network": null,
            "webChannel": {
                "id": 47,
                "name": "iTunes",
                "country": null
            },
            "externals": {
                "tvrage": null,
                "thetvdb": 197281,
                "imdb": null
            },
            "image": {
                "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/26/66205.jpg",
                "original": "http://static.tvmaze.com/uploads/images/original_untouched/26/66205.jpg"
            },
            "summary": "<p><i><b>\"Superman: Red Son\"</b></i>, Motion Comics bring the pages of Mark Millar's Eisner-Award-nominated comic book series that re-imagined the iconic American superhero as a communist champion. The story begins like the original Superman, with baby Superman traveling through space in a rocket ship and landing on Earth. However, instead of landing in rural Kansas and being raised to believe in American values, his rocket ship crashes into a Ukrainian farm. The young hero grows up in Russia and becomes the champion of the common worker, fighting on the side of socialism during Stalin's reign. What begins as one small shift in trajectory results in massive changes for the world, as the most powerful man alive no longer belongs to the United States of America. As time passes, Superman becomes more involved in Russia's politics, using his reputation to influence international governments.</p>",
            "updated": 1574387750,
            "_links": {
                "self": {
                    "href": "http://api.tvmaze.com/shows/7075"
                },
                "previousepisode": {
                    "href": "http://api.tvmaze.com/episodes/406369"
                }
            }
        }
    },
    {
        "score": 10.28897,
        "show": {
            "id": 33326,
            "url": "http://www.tvmaze.com/shows/33326/the-supermanaquaman-hour-of-adventure",
            "name": "The Superman/Aquaman Hour of Adventure",
            "type": "Animation",
            "language": "English",
            "genres": [],
            "status": "Ended",
            "runtime": 7,
            "premiered": "1967-09-09",
            "officialSite": "http://superfriends.wikia.com/wiki/The_Superman/Aquaman_Hour_of_Adventure",
            "schedule": {
                "time": "08:00",
                "days": [
                    "Saturday"
                ]
            },
            "rating": {
                "average": null
            },
            "weight": 0,
            "network": {
                "id": 2,
                "name": "CBS",
                "country": {
                    "name": "United States",
                    "code": "US",
                    "timezone": "America/New_York"
                }
            },
            "webChannel": {
                "id": 107,
                "name": "CBS All Access",
                "country": {
                    "name": "United States",
                    "code": "US",
                    "timezone": "America/New_York"
                }
            },
            "externals": {
                "tvrage": null,
                "thetvdb": 71453,
                "imdb": "tt0231046"
            },
            "image": {
                "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/134/336879.jpg",
                "original": "http://static.tvmaze.com/uploads/images/original_untouched/134/336879.jpg"
            },
            "summary": "<p>The animated adventures of several DC Comics superheroes.</p>",
            "updated": 1535648965,
            "_links": {
                "self": {
                    "href": "http://api.tvmaze.com/shows/33326"
                },
                "previousepisode": {
                    "href": "http://api.tvmaze.com/episodes/1354067"
                }
            }
        }
    }
]
```


The values of the name field for each TV show in the order received are:

```
Superman & Lois
Superman
Superman: The Animated Series
The Return of Superman
Atom Man vs. Superman
Max Fleischer's Superman
The New Adventures of Superman
Adventures of Superman
Superman: Red Son
The Superman/Aquaman Hour of Adventure
```

We then sort the array in ascending order, and output it as our answer.


### Part 2: Display Show Image


Using the provide React starter app, display the data returned from the previous question. 

**Output**

The list should look like: 

```
TV Show Name
[Medium Image]
<hr>
TV Show Name
[Medium Image] 
<hr> 
TV Show Name
[Medium Image] 
<hr> 
TV Show Name
[Medium Image] 
<hr> 
TV Show Name
[Medium Image]
```

Note that any TV show that does not have a medium image should be skipped.



## Available Scripts

In the project directory, you can run:
### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
