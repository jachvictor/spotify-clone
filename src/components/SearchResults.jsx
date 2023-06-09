import React from 'react'
import { AiFillClockCircle } from "react-icons/ai";
import { reducerCases } from '../utils/Constants';
import { useStateProvider } from '../utils/StateProvider';
import styled from 'styled-components';
import "../css/sr.css"
function SearchResults({searchDetails}) {
    const [, dispatch] = useStateProvider();
    const playTrack =( 
      id,
      name,
      // artists,
      // image,
      // duration_ms,
      uri,
      track_number
      )=>{
        const selectedUri = uri;
          dispatch({type:reducerCases.SET_SELECTED_URI,selectedUri})
          
    }
      const msToMinutesAndSeconds = (ms) => {
        var minutes = Math.floor(ms / 60000);
        var seconds = ((ms % 60000) / 1000).toFixed(0);
        return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
      };
  return (
    <Container>
     {/* <div className="imag6"> */}
     <img className="des" src={process.env.PUBLIC_URL + '/des.png'} alt="logo" />

     {/* </div> */}
      <>
        <div className="playlist">
          </div>
          <div className="list">
            <div className="header-row">
              <div className="col">
                <span className='spanh1'>#</span>
              </div>
              <div className="col">
                <span className='spanh1'>TITLE</span>
              </div>
              <div className="col">
                <span className='spanh2'>ALBUM</span>
              </div>
              <div className="col">
                <span>
                  <AiFillClockCircle className="spanh3"/>
                </span>
              </div>
            </div>
            <div className="tracks">
              {searchDetails.map(
                (
                  {
                    id,
                    name,
                    artists,
                    // image,
                    duration_ms,
                    // album,
                    uri,
                    track_number,
                  },
                  index
                ) => {
                  return (
                    <div
                      className="row"
                      key={id}
                      onClick={() =>
                        playTrack(
                          id,
                          name,
                          // artists,
                          // image,
                          // duration_ms,
                          uri,
                          // track_number
                        )
                      }
                    >
                      <div className="col">
                        <span>{index + 1}</span>
                      </div>
                      <div className="col detail">
                        <div className="image">
                          {/* <img src={image[0]} alt="track" /> */}
                        </div>
                        <div className="info">
                          <span className="name">{name}</span>
                          {/* <span>{item.artists}</span> */}
                        </div>
                      </div>
                      <div className="col">
                        <span>{artists[0].name }</span>
                      </div>
                      <div className="col">
                        <span>{msToMinutesAndSeconds(duration_ms)}</span>
                      </div>
                    </div>
                  );
                }
              )}
            </div>
          </div>
      </>
       
    </Container>
  )
}

export default SearchResults

const Container = styled.div`
.list {
  margin-top:5cm;
  margin-left: -7cm;
display:flex:
flex-direction:column:
  margin-right
  width:5cm;
    .header-row {
      display: flex;
      grid-template-columns: 0.3fr 3fr 2fr 0.1fr;
      margin: 1rem 0 0 0;
      color: black;
      margin-left:9cm;
      margin-top:-9cm;
     
      font-size:large;
      position: sticky;
      top: 15vh;
      padding: 1rem 3rem;
      transition: 0.3s ease-in-out;
      background-color: ${({ headerBackground }) =>
        headerBackground ? "white" : "none"};
    }
    .tracks {
      // align-items:center;
        // justify-content:center:
      // margin: 0 2rem;
      display: flex;
      flex-direction: column;
      margin-left: -19cm;
      .row {
        flex-direction: column;
        align-items:center;
        justify-content:center:
        padding: 0.5rem 1rem;
        cursor:pointer;
        display: grid;
        color:black;
        width:100%;
        font-size:0.5cm;
        grid-template-columns: 0.3fr 3.1fr 2fr 0.1fr;
        &:hover {
          background-color: white;
        }
        .col {
          display: flex;
          align-items: center;
          color: black;
          img {
            // cursor:pointer
            height: 40px;
            width: 40px;
          }
        }
        .detail {
          display: flex;
          gap: 1rem;
          .info {
            display: flex;
            flex-direction: column;
          }
        }
      }
    }
  }
`;