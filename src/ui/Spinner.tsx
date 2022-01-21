import styled from "styled-components"

function Spinner({ className }: any) {
    return (
        <div className={className} role="progressbar">
            <div className="ring"></div>
            <div className="cover-ring"></div>
            <div className="spots">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    )
}

export default styled(Spinner)`
    width: 90px;
    height: 90px;
    background-color: #546c8c;
    border-radius: 100%;
    position: absolute;
    display: flex;
    align-items: center;
    transform-origin: center center;
    box-shadow: inset 2px -10px 0px rgba(0, 0, 0, 0.1);
    animation: planet 5s ease infinite alternate;

    @keyframes planet {
       0% {
          transform: rotate(10deg);
       }

       100% {
          transform: rotate(-10deg);
       }
    }

    /* planet ring */
    .ring {
       position: absolute;
       width: 150px;
       height: 150px;
       border-radius: 100%;
       background-color: #bacbd9;
       display: flex;
       align-items: center;
       justify-content: center;
       transform-origin: 33% center;
       box-shadow: 2px -10px 0px rgba(0, 0, 0, 0.1),
          inset -5px -10px 0px rgba(0, 0, 0, 0.1);
       animation: ring 3s ease infinite;

       @keyframes ring {
          0% {
             transform: rotateX(110deg) rotateZ(0deg) translate(-25px, 3px);
          }

          100% {
             transform: rotateX(110deg) rotateZ(360deg) translate(-25px, 3px);
          }
       }

       /* small ball */
       &:before {
          content: "";
          position: absolute;
          width: 5px;
          height: 15px;
          border-radius: 100%;
          background-color: #7ea1bf;
          z-index: 2;
          left: calc(0px - 3px);
          box-shadow: inset -3px 3px 0px rgba(0, 0, 0, 0.2);
       }

       /* inner ring */
       &:after {
          content: "";
          position: absolute;
          width: 120px;
          height: 120px;
          border-radius: 100%;
          background-color: #7ea1bf;
          box-shadow: inset 2px -10px 0px rgba(0, 0, 0, 0.1);
       }
    }

    /* to cover the back of the ring */
    .cover-ring {
       position: absolute;
       width: 100%;
       height: 50%;
       border-bottom-left-radius: 80%;
       border-bottom-right-radius: 80%;
       border-top-left-radius: 50px;
       border-top-right-radius: 50px;
       transform: translate(0px, -8px);
       background-color: #546c8c;
       z-index: 2;
       box-shadow: inset 0px -2px 0px rgba(0, 0, 0, 0.1);
    }

    /* planet spots */
    .spots {
       width: 100%;
       height: 100%;
       display: flex;
       align-items: center;
       justify-content: center;
       position: absolute;
       z-index: 2;

       span {
          width: 15px;
          height: 15px;
          background-color: #3c4359;
          position: absolute;
          border-radius: 100%;
          box-shadow: inset -2px 3px 0px rgba(0, 0, 0, 0.3);
          animation: dots 5s ease infinite alternate;

          @keyframes dots {
             0% {
                box-shadow: inset -3px 3px 0px rgba(0, 0, 0, 0.3);
             }
             100% {
                box-shadow: inset 3px 3px 0px rgba(0, 0, 0, 0.3);
             }
          }

          &:nth-child(1) {
             top: 10px;
             right: 25px;
          }

          &:nth-child(2) {
             top: 20px;
             left: 25px;
             width: 7px;
             height: 7px;
          }

          &:nth-child(3) {
             top: 40px;
             left: 10px;
             width: 12px;
             height: 12px;
          }

          &:nth-child(4) {
             top: 40px;
             left: 45px;
             width: 20px;
             height: 20px;
          }

          &:nth-child(5) {
             top: 72px;
             left: 30px;
             width: 15px;
             height: 15px;
          }

          &:nth-child(6) {
             top: 80px;
             left: 60px;
             width: 5px;
             height: 5px;
          }

          &:nth-child(7) {
             top: 45px;
             left: 75px;
             width: 7px;
             height: 7px;
          }
       }
    }
 }
`;