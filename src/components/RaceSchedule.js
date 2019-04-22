import React from "react"
import { graphql, useStaticQuery } from "gatsby"

function RaceSchedule() {
  const data = useStaticQuery(graphql`
    query{ 
      allContentfulRaceSchedule {
        nodes {
          scheduleTitle,
          races {
            raceTitle,
            raceDate
          }
        }
      }
    }
  `)

  const raceList = data.allContentfulRaceSchedule.nodes;
  Array.from(raceList);

  return (
    <div className="race-list">
      {raceList.map((event, eventKey) => 
        <>
        <h2 key={`h2${eventKey}`}>{event.scheduleTitle}</h2>
        <ul key={`ul${eventKey}`} className="raceSchedule">
          {event.races.map((race, raceKey) =>
            <li key={`raceLi${raceKey}`}>
              {race.raceTitle}
              <span key={`raceSpan${raceKey}`}>
                {race.raceDate}
              </span>
            </li>
          )}
        </ul>
        </>
      )}
    </div>
  )
}

export default RaceSchedule 
